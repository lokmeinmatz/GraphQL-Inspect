import { fakeReq1 } from './fakes'
import { GraphQLRequestStore } from './gql'
import { NetRequest } from './gql/utils'
import { ExtMessage, toExtMessage } from './util'

const gql = new GraphQLRequestStore()

// @ts-ignore
window.gql = gql

// @ts-ignore
window.fakeEntry = () => {
    gql.requests.push(fakeReq1)

    gql.emitRequestAdded(gql.requests.length - 1)
}

async function run() {
    if ('browser' in window || 'chrome' in window) {

        console.log('web extension context detected, loading polyfill')
        const browser = (await import('webextension-polyfill')).default
        const tabId = browser.devtools.inspectedWindow.tabId

        browser.devtools.network.onRequestFinished.addListener(async req => {
            const data = await gql.parseNetworkRequest(req as NetRequest)
            console.log(data)
        })

        browser.runtime.onMessage.addListener((msg: ExtMessage) => {
            if (msg.type === 'clearAll' && tabId === msg.tabId) {
                gql.clearAll()
            }
        })

        gql.events.on('requestsAdded', ({ startIndex, data }) => {
            browser.runtime.sendMessage(toExtMessage({
                startIndex,
                data,
                type: 'requestsAdded'
            }, tabId))

            console.log('sent message')
        })
        
        const panel = await browser.devtools.panels.create(
            'GraphQL-Inspect',
            'icons/icon.png',
            'index.html'
        )
    } else {
        console.error('no webextension apis detected')
    }
}

run()