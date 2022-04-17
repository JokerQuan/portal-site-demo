import React from 'react';
import { Image } from 'antd';
import logo from "../assets/logo192.png";
import swuQrCode from "../assets/qrcode_swu.edu.cn.png"

const Copyright = () => {
  return (
    <>
      <div className='links'>
        <div className='address'>
          <div className='logo-name'>
            <Image preview={false} src={logo} width={60}/>
            <span className='company-name'>西南大学</span>
          </div>
          <span className='title'>国内统一咨询服务热线</span>
          <span className='phone'>400-123-45678</span>
          <span className='title'>重庆市北碚区西南大学</span>
          <span className='footer-item'>重庆市北碚区天生路2号</span>
        </div>
        <div className='divider'></div>
        <div className='business'>
          <span className='title'>商务合作</span>
          <div className='divider-red'></div>
          <span className='footer-item'>电话：010-82176659</span>
          <span className='footer-item'>邮箱：Service@exocr.com</span>
        </div>
        <div className='help'>
          <span className='title'>帮助中心</span>
          <div className='divider-red'></div>
          <a className='footer-item link'>技术文档</a>
          <a className='footer-item link'>常见问题</a>
          <a className='footer-item link'>白皮书</a>
        </div>
        <div className='divider'></div>
        <div className='share'>
          <span className='title'>关注</span>
          <div className='divider-red'></div>
          <div className='qr-container'>
            <Image preview={false} src={swuQrCode} width={90}></Image>
            <div className='text'>
              <span className='title'>关注西南大学</span>
              <span className='footer-item'>微信公众号</span>
            </div>
          </div>
        </div>
      </div>
      <div className='copyright'>
        <span>Copyright © 2022 西南大学</span>
        <span>丨</span>
        <span>京ICP备1658435号-1</span>
        <span>丨</span>
        <span>京公网安备11010801920998号</span>
      </div>
    </>
  )
};

export default Copyright;