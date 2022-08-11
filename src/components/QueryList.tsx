import { Table } from "antd"
import { ColumnsType } from "antd/lib/table"
import { GQLRequest } from "../gql"


export const QueryList = (props: { queries: GQLRequest[] }) => {
    
    const cols: ColumnsType<GQLRequest> = [
        {
            title: 'Endpoint',
            dataIndex: 'url'
        },
        {
            title: 'Query Name',
            dataIndex: ['data', 'name']
        },
        {
            title: 'Timing',
            dataIndex: 'time'
        }
    ]

    return <div className="query-list">
        <Table 
            dataSource={props.queries}
            columns={cols}
            rowKey="id"
        />
    </div>
}