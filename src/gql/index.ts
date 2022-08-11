import { Response, Timings } from "har-format";
import { isGraphQL, NetRequest, ParsedQuery, parseEntry } from "./utils";



export interface GQLRequest extends ParsedQuery {
  responseBody: any,
  url: string,
  response: Response,
  timings: Timings,
  time: number
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