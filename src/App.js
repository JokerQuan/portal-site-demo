import React, { useEffect, useRef, useState } from 'react';
import { Layout, Menu } from 'antd';
import { useTitle } from 'ahooks';
import './App.less';
import Scanner from './components/Scanner';
import Feature from './components/Feature';
import TopMenu from './components/TopMenu';
import Copyright from './components/Copyright';

const { Header, Content, Footer } = Layout;

const App = () => {
  const headerRef = useRef();
  useTitle("智能 AI");

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
        <div className='banner'>
          <Scanner />
        </div>
        <div className='feature'>
          <Feature />
        </div>
      </Content>
      <Footer className='footer'>
        <Copyright />
      </Footer>
    </Layout>
  )
};

export default App;