import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import SideMenu from '../../components/sandbox/SideMenu'
import TopHeader from '../../components/sandbox/TopHeader'
import Home from './home/Home'
import RightList from './right-manage/RightList'
import RoleList from './right-manage/RoleList'
import UserList from './user-manage/UserList'
import NotFund from '../../components/NodeFund'

import { Layout } from 'antd'
// css
import './NewsSandBox.css'

const { Content } = Layout
export default function NewsSandBox() {
  return (

    <Layout>
      <SideMenu></SideMenu>

      <Layout className="site-layout">
        <TopHeader  ></TopHeader>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            overflow:"auto",
          }}>
          <Routes>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/user-manage/list" element={<UserList />}></Route>
            <Route path="/right-manage/role/list" element={<RoleList />}></Route>
            <Route path="/right-manage/right/list" element={<RightList />}></Route>
            <Route path="/" element={<Navigate to="/home" replace />}></Route>
            <Route path="*" element={<NotFund></NotFund>}></Route>
          </Routes>
        </Content>
      </Layout>
    </Layout>

  )
}
