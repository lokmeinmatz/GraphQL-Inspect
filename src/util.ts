import { GQLRequest } from "./gql";


export function isInWebExt(): boolean {
    return 'browser' in window || 'chrome' in window
}

export type ExtMessage = ExtMessageBase & ExtMessageInstance

type ExtMessageInstance = ExtMessagePing | ExtMessageUpdatedRequests | ExtMessageClearAll

interface ExtMessageBase {
    tabId: number;
    id: string;
}

interface ExtMessagePing {
    type: 'ping'
}

interface ExtMessageUpdatedRequests {
    type: 'requestsAdded',
    startIndex: number,
    data: GQLRequest[]
}

interface ExtMessageClearAll {
    type: 'clearAll'
}

export function toExtMessage(inst: ExtMessageInstance, tabId: number): ExtMessage {
    const f = inst as ExtMessage
    f.id = Math.random().toFixed(10)
    f.tabId = tabId
    return f
}