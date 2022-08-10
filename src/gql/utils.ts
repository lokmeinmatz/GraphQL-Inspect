import browser from 'webextension-polyfill'
import { Entry as HarEntry, Param } from 'har-format'
import { ArgumentNode, DocumentNode, Kind, parse, SelectionNode, SelectionSetNode, ValueNode } from 'graphql'
import { GQLRequest } from '.';

export type NetRequest = browser.devtools.network.Request & HarEntry


function isContentType(entry: NetRequest, contentType: string) {
  return entry.request.headers.some(({ name, value }) => {
    return name.toLowerCase() === 'content-type' && value.split(';')[0].toLowerCase() === contentType.toLowerCase();
  });
}

function getQueryFromParams(params: Param[] = []) {
  return decodeURIComponent(params.find(param => param.name === 'query')?.value ?? '');
}

export function isGraphQL(entry: NetRequest) {
  try {
    if (isContentType(entry, 'application/graphql')) {
      return true;
    }

    if (isContentType(entry, 'application/json') && entry.request.postData?.text) {
      const json = JSON.parse(entry.request.postData.text);
      return json.query || json[0].query;
    }

    if (isContentType(entry, 'application/x-www-form-urlencoded') && getQueryFromParams(entry.request.postData?.params)) {
      return true;
    }
  } catch (e) {
    return false;
  }
}


export async function parseEntry(entry: NetRequest): Promise<GQLRequest[]> {
  const parsedQueries: ParsedQuery[] = [];

  if (isContentType(entry, 'application/graphql')) {

    const query = entry.request.postData?.text
    const vars = (entry.request.postData as any)!.variables

    if (!query || !vars) {
      throw { message: 'missing text or variables' }
    }

    parsedQueries.push(parseQuery(
      query,
      vars
    ));
  } else if (isContentType(entry, 'application/x-www-form-urlencoded')) {
    parsedQueries.push(parseQuery(getQueryFromParams(entry.request.postData!.params)));
  } else {
    let json;

    try {
      json = JSON.parse(entry.request.postData!.text!);
    } catch (e: any) {
      throw `Internal Error Parsing: ${entry}. Message: ${e.message}. Stack: ${e.stack}`
    }

    if (!Array.isArray(json)) {
      json = [json];
    }

    for (let batchItem of json) {
      const { query } = batchItem;
      let { variables } = batchItem;

      try {
        variables = typeof variables === 'string' ? JSON.parse(variables) : variables;
      } catch (e: any) {
        throw `Internal Error Parsing: ${entry}. Message: ${e.message}. Stack: ${e.stack}`
      }

      parsedQueries.push(parseQuery(query, variables));
    }
  }

  const responseBody = await entry.getContent() as unknown as string

  return parsedQueries.map((parsedQuery, i) => {
    return {
      responseBody: Array.isArray(responseBody) ? responseBody[i] : responseBody,
      url: entry.request.url,
      response: entry.response,
      ...parsedQuery
    };
  })
}

function getValue(value: ValueNode): any {
  if (value.kind === 'ListValue') {
    return value.values.map(x => getValue(x));
  } else if (value.kind === 'Variable') {
    return `$${value.name.value}`;
  } else if (value.kind === 'ObjectValue') {
    const out: Record<string, any> = {};
    value.fields.forEach(field => {
      out[field.name.value] = getValue(field.value);
    });
    return JSON.stringify(out);
  } else {
    return 'value' in value ? value.value : undefined;
  }
}

function parseArguments(arr: readonly ArgumentNode[]) {
  return arr.filter(x => x.name).map(x => ({
    name: x.name.value,
    value: getValue(x.value),
    kind: x.value.kind,
  }));
}

function parseFields(ssNode: SelectionSetNode) {
  return ssNode.selections.map(x => parseOperation(x));
}

function getName(definition: SelectionNode) {
  if (definition.kind === 'InlineFragment') {
    return `InlineFragment if ${definition.typeCondition?.name.value}`;
  } else if ('alias' in definition && definition.name) {
    return `${definition.alias?.value}: ${definition.name.value}`;
  } else if (definition.name) {
    return definition.name.value;
  } else {
    return 'Anonymous';
  }
}

function parseOperation(definition: SelectionNode): { kind: Kind, name: string, params?: any, fields?: any } {
  return {
    kind: definition.kind,
    name: getName(definition),
    params: 'arguments' in definition && definition.arguments ? parseArguments(definition.arguments) : null,
    fields: 'selectionSet' in definition && definition.selectionSet ? parseFields(definition.selectionSet) : null,
  };
}

function internalParse(requestData: DocumentNode) {
  const { definitions } = requestData;
  return definitions.map((definition: any) => {
    return {
      name: definition.name ? definition.name.value : (definition.operation || 'request'),
      kind: definition.kind,
      operations: definition.selectionSet.selections.map((operation: SelectionNode) => {
        return {
          ...parseOperation(operation),
          type: definition.operation || operation.kind,
        };
      }),
    };
  });
}

export interface ParsedQuery {
  queryVariables: Record<string, any>,
  fragments: any[],
  id: string,
  bareQuery: string,
  data: { name: string, kind: Kind, operations: any }[],
  rawParse: string
}

export function parseQuery(query: string, variables = {}): ParsedQuery {
  let requestData,
    rawParse;

  try {
    rawParse = parse(query);
  } catch (e: any) {
    throw `GraphQL Error Parsing: ${query}. Message ${e.message}. Stack: ${e.stack}`;
  }

  try {
    requestData = internalParse(rawParse);
  } catch (e: any) {
    throw `Internal Error Parsing: ${query}. Message: ${e.message}. Stack: ${e.stack}`;
  }

  const fragments = requestData
    .filter(x => x.kind === 'FragmentDefinition');

  return {
    queryVariables: variables,
    fragments,
    id: `${Date.now() + Math.random()}`,
    bareQuery: query,
    data: requestData,
    rawParse: JSON.stringify(rawParse),
  };
}
