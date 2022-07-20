import React, { Component } from 'react'
import { Carousel } from 'antd'
import pestcase1 from '../../../assets/pestcase1.jpg'
import pestcase2 from '../../../assets/pestcase2.png'
import pestcase3 from '../../../assets/pestcase3.png'

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
export default class Pestcase extends Component {
  render() {
    return (
      <Carousel autoplay>
      <div>
        <img src={pestcase1} alt="1"/>
        <h3 style={contentStyle}>1</h3>
      </div>
      <div>
      <img src={pestcase2} alt="2" />
        <h3 style={contentStyle}>2</h3>
      </div>
      <div>
      <img src={pestcase3} alt="3" />
        <h3 style={contentStyle}>3</h3>
      </div>
    </Carousel>    
       )}
}
