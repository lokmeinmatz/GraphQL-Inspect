import { createRoot } from 'react-dom/client'
import App from './App'
import { fakeReq1, fakeReq2 } from './fakes'
import { GraphQLRequestStore } from './gql/index'
import { isInWebExt } from './util'

// POLYFILL
if (typeof (window as any).global === 'undefined') {
    (window as any).global = window;
}


async function run() {
    let gql: GraphQLRequestStore
    if (isInWebExt()) {
        const module = await import('./gql/proxy')
        gql = new module.GraphQLRequestStoreProxy()
    } else {
        const module = await import('./gql/index')
        gql = new module.GraphQLRequestStore()
    }
    // @ts-ignore
    window.gql = gql
    // @ts-ignore
    window.loadFake = async () => {
        const HAR = await fetch('/test1.har').then(r => r.json())
        for (const entry of HAR.log.entries) {
            entry.getContent = () => Promise.resolve(entry.response.content?.text)
            await gql.parseNetworkRequest(entry)
        }
        console.log('added fake data from public/test1.har')
    }

    createRoot(document.getElementById('root')!).render(
        <App gqlStore={gql} />
    )
}

run()