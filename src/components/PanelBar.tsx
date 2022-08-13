import { Button, Dropdown, Menu, Switch } from 'antd'
import { DeleteFilled, SettingFilled } from '@ant-design/icons'
import { useState } from 'react'
import './PanelBar.scss'
import { useAppState } from '../util'

const Settings = () => {

    const {
        clearOnNav,
        setClearOnNav
    } = useAppState()

    return <Menu className='settings'
        items={[
           {
            key: 1,
            label: (
                <div className='clear-on-nav'>
                    <Switch checked={clearOnNav} onChange={() => setClearOnNav(!clearOnNav)} />
                    <label>Clear on Navigation</label>
                </div>
            ),
            onClick: () => setClearOnNav(!clearOnNav)
           }
        ]}
    />
}

export const PanelBar = (props: { onClear: () => void }) => {
    
    return <div className="panel-bar">
        <Button onClick={props.onClear} icon={<DeleteFilled />}>
        </Button>
        <Dropdown className='settings-btn' overlay={<Settings />} trigger={['click']}>
            <Button icon={<SettingFilled />}>
            </Button>
        </Dropdown>
    </div>
}