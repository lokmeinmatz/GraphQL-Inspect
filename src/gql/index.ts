import { Response, Timings } from "har-format";
import mitt from "mitt";
import { isGraphQL, NetRequest, ParsedQuery, parseEntry } from "./utils";



export interface GQLRequest extends ParsedQuery {
  responseBody: any,
  url: string,
  response: Response,
  timings: Timings,
  time: number,
  startedDateTime: string
}


export class GraphQLRequestStore {

  requests: GQLRequest[] = []

  events = mitt<{ 
    requestsAdded: { startIndex: number, data: GQLRequest[]}
    updateAll: { data: GQLRequest[] }
  }>()

  async parseNetworkRequest(req: NetRequest) {
    if (!isGraphQL(req)) return null;
    const newQueries = await parseEntry(req)
    const firstNewIdx = this.requests.length
    this.requests.push(...newQueries)
    this.emitRequestAdded(firstNewIdx)
    return newQueries
  }

  emitRequestAdded(firstNewIndex: number) {
    this.events.emit('requestsAdded', {
      startIndex: firstNewIndex,
      data: this.requests.slice(firstNewIndex)
    })
  }

  clearAll() {
    this.requests = []
    this.events.emit('updateAll', { data: [] })
  }

}
