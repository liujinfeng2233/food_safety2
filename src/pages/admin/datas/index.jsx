import React, { useState } from 'react';
import {Outlet}from 'react-router-dom'

import { Table } from 'antd';
const columns = [
  {
    title: '日期',
    dataIndex: 'data',
    width: 150,
  },
  {
    title: '通道',
    dataIndex: 'chanel',
    width: 150,
  },
  {
    title: '灰度值',
    dataIndex: 'pix',
  },
  {
    title: '结果',
    dataIndex: 'result',
  },
];
const data = [
  {key:0,data:'2022/07/2',chanel:'0',pix:'116',result:'negative'},
  {key:1,data:'2022/07/2',chanel:'1',pix:'113',result:'negative'},
  {key:2,data:'2022/07/2',chanel:'2',pix:'107',result:'negative'},
  {key:3,data:'2022/07/2',chanel:'3',pix:'194',result:'positive'},
  {key:4,data:'2022/07/2',chanel:'4',pix:'216',result:'positive'},
  {key:5,data:'2022/07/2',chanel:'5',pix:'110',result:'negative'},
  {key:6,data:'2022/07/2',chanel:'6',pix:'215',result:'positive'},
  {key:7,data:'2022/07/2',chanel:'7',pix:'234',result:'positive'},
  {key:8,data:'2022/07/9',chanel:'0',pix:'106',result:'negative'},
  {key:9,data:'2022/07/9',chanel:'1',pix:'111',result:'negative'},
  {key:10,data:'2022/07/9',chanel:'2',pix:'90',result:'negative'},
  {key:11,data:'2022/07/9',chanel:'3',pix:'194',result:'positive'},
  {key:12,data:'2022/07/9',chanel:'4',pix:'216',result:'positive'},
  {key:13,data:'2022/07/9',chanel:'5',pix:'110',result:'negative'},
  {key:14,data:'2022/07/9',chanel:'6',pix:'215',result:'positive'},
  {key:15,data:'2022/07/9',chanel:'7',pix:'234',result:'positive'},
];

//for (let i = 0; i < 100; i++) {
  //data.push({
 //   key: i,
 //   data: ` 2022/0${i}`,
 //   chanel: ` ${i}`,
 //   pix: ` ${i}`,
  //  result:`positive`
 // });
//}
console.log(data)
const Data = () => (
  <div>
  <Table
    columns={columns}
    dataSource={data}
    pagination={{
      pageSize: 50,
    }}
    scroll={{
      y: 600,
    }}
  />
  <Outlet/> 
  </div>
);

export default Data;
