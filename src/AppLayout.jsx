import React, { Component } from 'react';
import { Link,Outlet } from 'react-router-dom';
import { Layout, Menu} from 'antd';
import './App.less'
import {
  SecurityScanOutlined,
  VideoCameraOutlined,
  ShoppingCartOutlined,
  WhatsAppOutlined,
  CloudSyncOutlined
} from '@ant-design/icons';



const {  Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;



export default class AppLayout extends Component {
 
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };
  
  render() {
    const { collapsed } = this.state;
    return (
      <div>
           <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse} className='sider'>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <SubMenu key="sub1" icon={<SecurityScanOutlined />} title="检测项目">
              <Menu.Item key="1"><Link to="/admin/pest">农药残留</Link></Menu.Item>
              <Menu.Item key="2"><Link to="/admin/items/animal">兽药残留</Link></Menu.Item>
              <Menu.Item key="3"><Link to="/admin/items/micro">微生物</Link></Menu.Item>
              <Menu.Item key="4"><Link to="/admin/items/add">添加剂</Link></Menu.Item>
            </SubMenu>
            <Menu.Item key="5" icon={<VideoCameraOutlined />}><Link to="/admin/cases">案例展示</Link></Menu.Item>
            <Menu.Item key="6" icon={<WhatsAppOutlined />}><Link to="/admin/experts">食安专家</Link></Menu.Item>
            <Menu.Item key="7" icon={<ShoppingCartOutlined />}><Link to="/admin/tests">检测试剂</Link></Menu.Item>
            <Menu.Item key="8" icon={<CloudSyncOutlined />}>
            <Link to="/admin/datas">数据库</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Content style={{ margin: '20px ',padding:'0' ,}} className='layoutContent'>              
              <Outlet/>
          </Content>
          <Footer style={{ textAlign: 'center' }}>天津大学</Footer>
        </Layout>
      </Layout>
      </div>
    )}
}
