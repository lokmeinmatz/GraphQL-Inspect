import { Table } from "antd"
import { ColumnsType } from "antd/lib/table"
import { GQLRequest } from "../gql"



const fmtTime = (time: Date) => `${time.getHours().toString().padStart(2, '0')}:${time.getMinutes().toString().padStart(2, '0')}:${time.getSeconds().toString().padStart(2, '0')}:${time.getMilliseconds().toString().padStart(3, '0')}`

export const QueryList = (props: {
    queries: GQLRequest[],
    onSelect: (selection: GQLRequest | undefined) => any,
    selectedQuery?: GQLRequest
}) => {
    
    const cols: ColumnsType<GQLRequest> = [
        {
            title: 'Query Name',
            dataIndex: ['data', 0, 'name']
        },
        {
            title: 'Endpoint',
            dataIndex: 'url'
        },
        {
            title: 'Time',
            render: (entry: GQLRequest) => (<p>{fmtTime(entry.startedDateTime)}</p>)
        }
    ]

    return <div className="query-list">
        <Table 
            dataSource={props.queries}
            columns={cols}
            rowKey="id"
            onRow={(record, idx) => {
                console.log(record.id, props.selectedQuery?.id)
                return {
                    onClick: () => props.onSelect(record),
                    className: record.id == props.selectedQuery?.id ? 'selected' : ''
                }
            }}
        />
    </div>
}