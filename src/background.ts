import { fakeReq1 } from './fakes'
import { GraphQLRequestStore } from './gql'
import { NetRequest } from './gql/utils'
import { CLEAR_ON_NAV_KEY, ExtMessage, toExtMessage } from './util'

const gql = new GraphQLRequestStore()

// @ts-ignore
window.gql = gql



async function run() {
    if ('browser' in window || 'chrome' in window) {

        console.log('web extension context detected, loading polyfill')
        const browser = (await import('webextension-polyfill')).default
        console.log(browser)
        const tabId = browser.devtools.inspectedWindow.tabId

        browser.devtools.network.onRequestFinished.addListener(async req => {
            const data = await gql.parseNetworkRequest(req as NetRequest)
            console.log(data)
        })

        browser.devtools.network.onNavigated.addListener(async url => {
            const clear = await browser.storage.local.get(CLEAR_ON_NAV_KEY).then(d => d[CLEAR_ON_NAV_KEY])

            console.log('navigated. clearAll: ' + clear)
            if (clear) {
                gql.clearAll()
            }
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

        gql.events.on('updateAll', ({ data }) => {
            browser.runtime.sendMessage(toExtMessage({
                type: 'updateAll',
                data
            }, tabId))
        })  
        
        browser.devtools.panels.create(
            'GraphQL-Inspect',
            'icons/icon.png',
            'index.html'
        )
    } else {
        console.error('no webextension apis detected')
    }
}

run()