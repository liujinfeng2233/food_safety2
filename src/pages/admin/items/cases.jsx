import React, { Component } from 'react';
import { Layout, Menu } from 'antd'
import {Link,Outlet}from 'react-router-dom'

const { Header, Content } = Layout
export default class Cases extends Component {
  render() {
    return (
 
     <Layout>
        <Header style={{  position: 'relative', zIndex: 1, width: '100%' }}>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">农药残留</Menu.Item>
            <Menu.Item key="2"><Link to="/admin/pest/jnw">兽药残留</Link></Menu.Item>
            <Menu.Item key="3">微生物</Menu.Item>
          </Menu>
        </Header>
        <Content className='layoutContent' style={{ padding: '0 50px', marginTop: 30 }}>
          <Outlet/>
        </Content>
     </Layout>

    )
  }
}
