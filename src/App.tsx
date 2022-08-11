import { Kind } from 'graphql'
import './App.scss'
import { PanelBar } from './components/PanelBar'
import { QueryList } from './components/QueryList'
import { GQLRequest } from './gql'

export default () => {
    console.log('rendering App')


    const testData: GQLRequest[] = [
        {
            url: 'https://asdf.de/graphql',
            bareQuery: 'query ASDF',
            fragments: [],
            data: [{
                name: 'ASDF',
                kind: Kind.NAME,
                operations: null
            }],
            id: 'id-1',
            queryVariables: { var1: 'peter pan' },
            rawParse: 'whatever',
            response: null as any,
            timings: {
                receive: 123,
                wait: 31
            },
            time: Date.now(),
            responseBody: null
        }
    ]

    return (
        <main>
            <PanelBar />
            <QueryList queries={testData} />
        </main>
    )
}