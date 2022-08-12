import { GQLRequest, GraphQLRequestStore } from "."
import { ExtMessage, toExtMessage } from "../util"
import { NetRequest } from "./utils"
import browser from 'webextension-polyfill'

/**
 * receiver in panel context
 */
 export class GraphQLRequestStoreProxy extends GraphQLRequestStore {

    constructor() {
      super()
  
  
      browser.runtime.onMessage.addListener((msg: ExtMessage) => {
        if (msg.type === 'requestsAdded' && msg.tabId === browser.devtools.inspectedWindow.tabId) {
          if (msg.startIndex === this.requests.length) {
              this.requests.push(...msg.data)
              this.emitRequestAdded(msg.startIndex)
          } else {
            console.warn('start Indices dont match, request new data!')
          }
        }
      })
    }

    override clearAll(): void {
        browser.runtime.sendMessage(toExtMessage({
            type: 'clearAll'
        }, browser.devtools.inspectedWindow.tabId))
        super.clearAll()
    }
  
    override parseNetworkRequest(req: NetRequest): Promise<GQLRequest[] | null> {
      throw new Error('not allowed to call on proxy')
    }
  }