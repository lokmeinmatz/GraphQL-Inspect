import { Button, Dropdown, Menu, Switch } from 'antd'
import { DeleteFilled, SettingFilled } from '@ant-design/icons'
import { useState } from 'react'
import './PanelBar.scss'

const Settings = () => {

    const [clearOnNav, setClearOnNav] = useState(false)

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

export const PanelBar = () => {
    
    return <div className="panel-bar">
        <Button>
            <DeleteFilled />
        </Button>
        <Dropdown className='settings-btn' overlay={<Settings />} trigger={['click']}>
            <Button>
                <SettingFilled />
            </Button>
        </Dropdown>
    </div>
}