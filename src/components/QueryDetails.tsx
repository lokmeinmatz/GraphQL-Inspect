import { CloseOutlined } from "@ant-design/icons";
import { Button, Collapse } from "antd";
import { GQLRequest } from "../gql";
import cls from 'classnames';
import './QueryDetails.scss'
import { useWindowSize } from "react-use";
import { JSONTree } from "react-json-tree";


export const QueryDetails = (props: { query: GQLRequest, onClose: () => void }) => {

    const { width, height } = useWindowSize()
    const onBottom = width < height

    return <aside className={cls('query-details', { vertical: !onBottom, horizontal: onBottom })}>
        <div className="query-details__controls">
            <h1>{ props.query.data[0].name }</h1>
            <Button onClick={props.onClose}>
                <CloseOutlined />
            </Button>
        </div>
        <div className="query-details__main">
            <Collapse>
                <Collapse.Panel header='Request' key='req'>
                    <Collapse>
                        <Collapse.Panel header='Query' key='query'>
                            {props.query.bareQuery}
                        </Collapse.Panel>
                        <Collapse.Panel header='Variables' key='variables'>
                            <JSONTree data={props.query.queryVariables} shouldExpandNode={(_k, _d, level) => level < 3} />
                        </Collapse.Panel>
                    </Collapse>
                </Collapse.Panel>
                <Collapse.Panel header='Response' key='res'>
                    <JSONTree data={props.query.responseBody} shouldExpandNode={(_k, _d, level) => level < 3} />
                </Collapse.Panel>
            </Collapse>
        </div>
    </aside>
}