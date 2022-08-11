import { createRoot } from 'react-dom/client'
import App from './App'
import { GraphQLRequestStore } from './gql'
import { NetRequest } from './gql/utils'

let isInited = false

const gql = new GraphQLRequestStore()

async function run() {
    if ('browser' in window || 'chrome' in window) {
        console.log('web extension context detected, loading polyfill')
        const browser = (await import('webextension-polyfill')).default
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
    } else {
        createRoot(document.getElementById('demo-root')!).render(<App />)
    }
}

run()