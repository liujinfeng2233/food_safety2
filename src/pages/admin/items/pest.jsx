import React, { Component } from 'react';
import { Layout, Menu,Input, Space  } from 'antd'
import { AudioOutlined } from '@ant-design/icons';
import {Link,Outlet}from 'react-router-dom'

const { Header, Content } = Layout
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);
const { Search } = Input;
const onSearch = value => console.log(value);


export default class Pest extends Component {
  render() {
    return (
 
     <Layout>
        <Header style={{  position: 'relative', zIndex: 1, width: '100%' }}>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1"><Link to="/admin/pest/durs">毒死蜱</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/admin/pest/jnw">甲萘威</Link></Menu.Item>
            <Menu.Item key="3">乙酰甲胺磷</Menu.Item>
            <Menu.Item key="4">   
            <Search className='pestsearch'
              placeholder="输入查询内容"
              allowClear
              enterButton="搜索"
              size="large"
              onSearch={onSearch}
             />
            </Menu.Item>
          </Menu>
        </Header>
        <Content className='layoutContent' style={{ padding: '0 50px', marginTop: 30 }}>
          <Outlet/>
        </Content>
     </Layout>

    )
  }
}
