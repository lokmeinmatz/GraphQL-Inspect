import { CloseOutlined } from "@ant-design/icons";
import { Button, Collapse, List } from "antd";
import { GQLRequest } from "../gql";
import cls from 'classnames';
import './QueryDetails.scss'
import { useWindowSize } from "react-use";
import { JSONTree } from "react-json-tree";
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
import Editor, { loader } from "@monaco-editor/react";
import { findOperation, fmtTime, getSizeStr } from "../util";
import { useMemo } from "react";

loader.config({ monaco });


export const QueryDetails = (props: { query: GQLRequest, onClose: () => void }) => {

    const { width, height } = useWindowSize()
    const onBottom = width < height

    const title = useMemo(() => {
        const op = findOperation(props.query.data)
        if (!op) return 'no operation found'
        return `${op.operations[0].type} ${op.name}`
    }, [props.query.data])


    const infoData = [
        <span>Endpoint: <a>{props.query.url}</a></span>,
        <span>On {fmtTime(new Date(props.query.startedDateTime))} (Duration: {props.query.time.toFixed(0)}ms)</span>,
        <span>Size: {getSizeStr(props.query.response)}</span>
    ]

    return <aside className={cls('query-details', { vertical: !onBottom, horizontal: onBottom })}>
        <div className="query-details__controls">
            <h1>{ title }</h1>
            <Button onClick={props.onClose} icon={<CloseOutlined />}>
            </Button>
        </div>
        <div className="query-details__main">
            <List
                size="small"
                dataSource={infoData}
                renderItem={item => <List.Item>{item}</List.Item>}
            />
            <div className="infos">
                
            </div>
            <Collapse>
                <Collapse.Panel header='Request' key='req'>
                    <Collapse>
                        <Collapse.Panel header='Query' key='query' className='query-panel'>
                            <Editor
                                height="80vh"
                                value={props.query.bareQuery}
                                language='graphql'
                                theme="vs-dark"
                                options={{
                                    readOnly: true
                                }}
                            />
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