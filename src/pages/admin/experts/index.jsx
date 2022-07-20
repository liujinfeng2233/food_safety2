import React, { Component } from 'react';
import { Layout, Menu } from 'antd'
import {Link,Outlet}from 'react-router-dom'
import '.././index.less'


const { Header, Content } = Layout
export default class Experts extends Component {
  render() {
    return (
    <div>
    <Layout>
    <Header style={{  position: 'relative', zIndex: 1, width: '100%' }}>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[1]}>
        <Menu.Item key="1">储晓刚<Link to="/admin/experts/cxg"></Link></Menu.Item>
        <Menu.Item key="2"><Link to="/admin/experts/zf">张峰</Link></Menu.Item>
      </Menu>
    </Header>
    <Content className='layoutContent' style={{ padding: '0 50px', marginTop: 30 }}>
    <Outlet/>
    </Content>
   
    </Layout>
    </div>
    )}
}
