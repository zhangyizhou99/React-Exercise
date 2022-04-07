import React, { useEffect, useState } from 'react'
import { Layout, Menu } from 'antd';
import { useNavigate,useLocation } from 'react-router-dom'

import './index.css'
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  SettingOutlined
} from '@ant-design/icons';
import axios from 'axios';

const { Sider } = Layout;
const { SubMenu } = Menu;

const iconList = {
  "/home": <UserOutlined />,
  "/user-manage": <VideoCameraOutlined />,
  "/user-manage/list": <VideoCameraOutlined />,
  "/right-manage": <UploadOutlined />,
  "/right-manage/role/list": <UploadOutlined />,
  "/right-manage/right/list": < SettingOutlined />,
}


export default function SideMenu(props) {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/rights?_embed=children")
      .then((res) => {
        setMenu(res.data)
      })

  }, [])
  // 使用路由守卫导航 V6版本中已经不适用withRouter
  const navigate = useNavigate()
  const curKey = useLocation().pathname
  const curName = ["/" + useLocation().pathname.split("/")[1]]
  console.log(curName)

  // 检查是否需要渲染
  const checkPagePermission = (item) => {
    return item.pagepermisson === 1
  }
  // 递归渲染菜单列表
  const renderMenu = (menuList) => {

    return menuList.map(item => {
      if (item.children?.length>0 && checkPagePermission(item)) {
        return <SubMenu key={item.key} icon={iconList[item.key]} title={item.title}>
          {renderMenu(item.children)}
        </SubMenu>
      }
      return checkPagePermission(item) && <Menu.Item key={item.key} icon={iconList[item.key]} onClick={() => { navigate(item.key) }} >{item.title}</Menu.Item>
    })
  }

  return (

    <Sider trigger={null} collapsible collapsed={false} >
      <div style={{display: "flex", height:"100%" ,"flexDirection":"column"}}>
      <div className="logo" >全球新闻发布系统</div>
      <div style={{flex: 1, overflow: "auto"}}>
      <Menu theme="dark" mode="inline" selectedKeys={curKey} defaultOpenKeys={curName}>
        {renderMenu(menu)}
      </Menu></div>
      </div>
    </Sider>


  )
}
