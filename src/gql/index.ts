import { Response } from "har-format";
import { isGraphQL, NetRequest, ParsedQuery, parseEntry } from "./utils";



export interface GQLRequest extends ParsedQuery {
  responseBody: any,
  url: string,
  response: Response
}


export class GraphQLRequestStore {

  private requests: GQLRequest[] = []

  async parseNetworkRequest(req: NetRequest) {
    if (!isGraphQL(req)) return null;
    const newQueries = await parseEntry(req)
    this.requests.push(...newQueries)
    return newQueries
  }
}