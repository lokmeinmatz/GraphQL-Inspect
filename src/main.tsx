import { createRoot } from 'react-dom/client'
import App from './App'
import { fakeReq1, fakeReq2 } from './fakes'
import { GraphQLRequestStore } from './gql/index'
import { isInWebExt } from './util'




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
    window.fakeReq = () => {
        gql.requests.push(fakeReq1, fakeReq2)
        gql.emitRequestAdded(gql.requests.length - 2)
    }

    createRoot(document.getElementById('root')!).render(
        <App gqlStore={gql} />
    )
}

run()