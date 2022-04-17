import React, { useEffect, useRef, useState } from 'react';
import { Button, Layout, Typography } from 'antd';
import TopMenu from '../components/TopMenu';
import Copyright from '../components/Copyright';
import Sample from '../components/Sample';
import './SamplePage.less';

const { Header, Content, Footer } = Layout;

const SamplePage = () => {
  const headerRef = useRef();

  const handleScroll = () => {
    if (window.scrollY > 0) {
      headerRef.current.classList.add("scroll");
    } else {
      headerRef.current.classList.remove("scroll");
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Layout>
      <Header ref={headerRef} className='header'>
        <TopMenu />
      </Header>
      <Content className='main'>
        <div className='service-description'>
          <span className='title'>通用文字识别</span>
          <span className='description'>基于业界领先的图像处理和OCR文字识别技术，可自动分析、检测各类场景或任意版面的文字信息，并进行精准识别和提取，满足用户对各类文字信息自动化采集的需求。</span>
          <div className='buttons'>
            <Button type='primary' size='large' className='btn-reg'>注册免费试用</Button>
            <Button size='large' className='btn-doc'>技术文档</Button>
          </div>
        </div>
        <div className='sample-container'>
          <Typography.Title level={2}>功能体验</Typography.Title>
          <Sample />
        </div>
      </Content>
      <Footer className='footer'>
        <Copyright />
      </Footer>
    </Layout>
  )
};

export default SamplePage;