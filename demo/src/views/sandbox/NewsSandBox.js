import React from 'react'
import { Route, Routes,Navigate } from 'react-router-dom'
import SideMenu from '../../components/sandbox/SideMenu'
import TopHeader from '../../components/sandbox/TopHeader'
import Home from './home/Home'
import RightList from './right-manage/RightList'
import RoleList from './right-manage/RoleList'
import UserList from './user-manage/UserList'

export default function NewsSandBox() {
  return (
    <div>
        <SideMenu></SideMenu>
        <TopHeader></TopHeader>
        <Routes>
              <Route path="/home" element={<Home />}></Route>
              <Route path="/user-manage/list" element={<UserList />}></Route>
              <Route path="/right-management/role/list" element={<RoleList />}></Route>
              <Route path="/right-management/right/list" element={<RightList />}></Route>
              <Route path="/" element={<Navigate to="/home" />}></Route>
        </Routes>
    </div>
  )
}
