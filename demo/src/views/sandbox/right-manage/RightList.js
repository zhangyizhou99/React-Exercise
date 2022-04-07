import React, {useState, useEffect} from 'react'
import { Button, Table, Tag, Modal } from 'antd'
import {DeleteOutlined, EditOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import axios from 'axios'
const {confirm} =Modal
export default function RightList() {

  const [dataSource, setDataSource] = useState([])
 
  useEffect(()=>{
    axios
    .get("http://localhost:5000/rights?_embed=children")
    .then(res=>{
      const list =res.data
      list.forEach((item) => {
        if(item.children?.length === 0){
          item.children = ""
        }
      })
      setDataSource(res.data)
    })
  },[])
  const pagination={
    pageSize:5
  }
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
     
     
    },
    {
      title: '权限名称',
      dataIndex: 'title',
   
    },
    {
      title: '权限路径',
      dataIndex: 'key',
      render: (key)=>{
        return <Tag color="blue">{key}</Tag>
      }
    },
    {
      title: '操作',
      render:(item)=>{
        return <div>
          <Button style={{borderColor: "#fff"}} shape="circle" danger icon={<DeleteOutlined  style={{fontSize:"15px"}} />} onClick={()=>confirmModal(item)}></Button>
          <Button style={{borderColor: "#fff", color:'#096dd9'}}  shape="circle" icon={<EditOutlined   style={{fontSize:"15px"}} />}></Button>
        </div>
      }
  
    },
  ];
  const confirmModal = (item)=>{
    confirm({
      title: '确定要删除该项吗？',
      icon: <ExclamationCircleOutlined />,
      onOk() {
        deleteMethod(item)
      },
      onCancel() {
      
      },
    });
  }
  const deleteMethod = (item) =>{
    if(item.grade === 1){
      axios.delete(`http://localhost:5000/rights/${item.id}`)
      .then(()=>{
       setDataSource(dataSource.filter(data => data.id!==item.id))
      })
    }else{
      let list = dataSource.filter(data =>data.id === item.rightId)
      console.log(list)
      list[0].children = list[0].children.filter(data => data.id !== item.id)
      axios.delete(`http://localhost:5000/rights/${item.id}`)
      setDataSource([...dataSource])
    }
  
  }
  return (
    <div>
    <Table pagination={pagination} dataSource={dataSource} columns={columns} />;
    </div>
  )
}
