import React, { useState } from 'react'
import { Layout , Avatar} from 'antd'
import { Menu, Dropdown } from 'antd';

import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined 
} from '@ant-design/icons';

const { Header } = Layout

export default function TopHeader() {
  const [collapsed, setCollapsed] = useState(false)
  const changeCollapsed = () => {
    setCollapsed(!collapsed)
  }
  const menu = (
    <Menu>
      <Menu.Item>
         超级管理员
      </Menu.Item>
      <Menu.Item danger>退出登录</Menu.Item>
    </Menu>
  );
  return (
    <Header className="site-layout-background" style={{ padding: '0  16px' }}>
      {
        collapsed ? <MenuUnfoldOutlined onClick={changeCollapsed} /> : <MenuFoldOutlined onClick={changeCollapsed} />
      }
      <div style={{ float: "right" }}><span>欢迎admin回来</span>
        <Dropdown overlay={menu}>
         
         <Avatar  size="small" style={{margin: " 0 10px"}} icon={<UserOutlined />} />

        </Dropdown></div>

    </Header>
  )
}
