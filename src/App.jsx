import React from 'react';
import {Routes,Route} from 'react-router-dom'
import Login from './pages/login'
import Signup from './pages/signup'
import Header from './components/header'
import AppLayout from './AppLayout'
import Admin from './pages/admin'

import Pest from './pages/admin/items/pest'
import Durs from './pages/admin/items/durs'
import Jnw from './pages/admin/items/jnw'

import Animal from './pages/admin/items/animal'
import  Micro from './pages/admin/items/micro'
import Add from './pages/admin/items/add'

import Experts from './pages/admin/experts'
import Cxg from './pages/admin/experts/cxg'
import Zf from './pages/admin/experts/zf'

import Data from './pages/admin/datas'

import Test from './pages/admin/tests'
import Pestcase from './pages/admin/cases'


function App() {
  
    return (
        <div>
            <div className='div1'>
            <Header/>
            </div>
            <div className='div2'>
              <Routes>
              <Route path="/" element={<Login/>}/>
              <Route path="/signup" element={<Signup/>}/>
              <Route path="/admin" element={<AppLayout/>}>
                <Route index element={<Admin/>}/>
                <Route path="/admin/pest" element={<Pest/>}>
                       <Route path="/admin/pest/durs" element={<Durs/>}/>
                       <Route path="/admin/pest/jnw" element={<Jnw/>}/>
                </Route>
                <Route path="/admin/items/animal" element={<Animal/>}/>
                <Route path="/admin/items/micro" element={<Micro/>}/>
                <Route path="/admin/items/add" element={<Add/>}/>
                <Route path="/admin/experts" element={<Experts/>}>
                       <Route path="/admin/experts/cxg" element={<Cxg/>}/>
                       <Route path="/admin/experts/zf" element={<Zf/>}/>
                </Route>
                <Route path="/admin/cases" element={<Pestcase/>}/>
                <Route path="/admin/tests" element={<Test/>}/>   
                <Route path="/admin/datas" element={<Data/>}/>             
              </Route>
               </Routes>
            </div>
        </div>
    )
}
export default App