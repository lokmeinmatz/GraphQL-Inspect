import browser from 'webextension-polyfill'
import { createRoot } from 'react-dom/client'
import App from './App'
import { GraphQLRequestStore } from './gql'
import { NetRequest } from './gql/utils'

let isInited = false

const gql = new GraphQLRequestStore()

browser.devtools.network.onRequestFinished.addListener(async req => {
    const data = await gql.parseNetworkRequest(req as NetRequest)
    console.log(data)
})

browser.devtools.panels.create(
    'GraphQL-Inspect',
    'icons/icon.png',
    'panel.html'
).then(panel => {
    console.log('created GraphQL-Inspect panel')
    panel.onShown.addListener(pWin => {

        if (isInited) return
        isInited = true
        console.log('rendering panel window')
        createRoot(pWin.document.getElementById('root')!).render(
            <App />
        )
    })
})