import { CloseOutlined } from "@ant-design/icons";
import { Button, Collapse, List } from "antd";
import { GQLRequest } from "../gql";
import cls from 'classnames';
import './QueryDetails.scss'
import { useWindowSize } from "react-use";
import ReactJson from 'react-json-view';
import { findOperation, fmtTime, getSizeStr } from "../util";
import { useMemo } from "react"
import {UnControlled as CodeMirror} from 'react-codemirror2'
import { EditorConfiguration } from 'codemirror'
import 'codemirror-graphql/mode';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/twilight.css';

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

    const queryConf: EditorConfiguration = {
        readOnly: true,
        mode: 'graphql',
        theme: 'twilight'
    }

    return <aside className={cls('query-details', { vertical: !onBottom, horizontal: onBottom })}>
        <div className="query-details__controls">
            <h1>{ title }</h1>
            <Button onClick={props.onClose} icon={<CloseOutlined />} style={{ backgroundColor: '#111' }}>
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
                            <CodeMirror
                                value={props.query.bareQuery}
                                options={queryConf}
                            />
                        </Collapse.Panel>
                        <Collapse.Panel header='Variables' key='variables'>
                            <ReactJson src={props.query.queryVariables} theme="twilight" />
                        </Collapse.Panel>
                    </Collapse>
                </Collapse.Panel>
                <Collapse.Panel header='Response' key='res'>
                    <ReactJson src={props.query.responseBody} theme="twilight" shouldCollapse={arg => {
                        if (arg.type === 'array') return (arg.src as any[]).length > 5;
                        return Object.keys(arg.src).length > 10;
                    }} />
                </Collapse.Panel>
            </Collapse>
        </div>
    </aside>
}