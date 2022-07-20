import React, { Component } from 'react';
import logo from '../../assets/logo.png'
import './header.less'

export default class Header extends Component {
  render() {
    return (
        <div>
                <header className='header'>
                <img src={logo} alt="logo"/>
                <h1>食品安全应急系统</h1>
                </header>
        </div>
    )}
}
