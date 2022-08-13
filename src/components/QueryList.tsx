import { Table } from "antd"
import { ColumnsType } from "antd/lib/table"
import { Kind } from "graphql"
import { GQLRequest } from "../gql"
import { findOperation, fmtTime, getSizeStr } from "../util"
import './QueryList.scss'



export const QueryList = (props: {
    queries: GQLRequest[],
    onSelect: (selection: GQLRequest | undefined) => any,
    selectedQuery?: GQLRequest
}) => {
    
    const cols: ColumnsType<object> = [
        {
            title: 'Query Name',
            dataIndex: ['data'],
            render: (data: GQLRequest['data']) => {
                const op = findOperation(data)
                return `${op?.operations[0].type} ${op?.name}`
            }
        },
        {
            title: 'Endpoint',
            dataIndex: 'url'
        },
        {
            title: 'Time',
            width: 100,
            render: (entry: GQLRequest) => (fmtTime(new Date(entry.startedDateTime)))
        },
        {
            title: 'Sizes (kB)',
            width: 90,
            render: (entry: GQLRequest) => (<span className="response-size">{getSizeStr(entry.response)}</span>)
        }
    ]

    return <div className="query-list">
        <Table 
            dataSource={props.queries}
            columns={cols}
            rowKey="id"
            pagination={false}
            sticky={true}
            scroll={{ y: '100%'}}
            onRow={(record: any, idx) => {
                console.log(record.id, props.selectedQuery?.id)
                return {
                    onClick: () => props.onSelect(record),
                    className: record.id == props.selectedQuery?.id ? 'selected' : ''
                }
            }}
        />
    </div>
}