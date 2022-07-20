import React from 'react';
import './index.less'
import 'antd/dist/antd.css'
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';



function Login(){
 
  const onFinish = (values) => {
     const{password,username}=values
     if (password==='123456'&username==='admin'){
     intologin()
     }
      };
      const navigate=useNavigate()
      const intologin=()=>{
          navigate('/admin')
      }
    return (
        <div className='login'>
         <section className='login-content'>
         <h2>用户登录</h2>
         <Form name="normal_login" className="login-form" 
         initialValues={{remember: true,}} onFinish={onFinish} >
        <Form.Item name="username"
                rules={[
                { required: true, message: '用户名必须输入！'},
                { max: 12, message: '用户名最多12位'},
                { min: 3, message: '用户名最少3位'},
                ]}
        >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
         </Form.Item>
         <Form.Item name="password"
        rules={[
          {required: true, message: '密码必须输入'},
          {min:6, message: '密码至少6位'},
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="密码"
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button" >
          登录
        </Button>   
      </Form.Item>
         </Form>
         </section>  
        </div>
    )}

export default Login

/*
1、前台表单验证
2、收集表单数据
*/