import React, { useEffect, useRef } from 'react';
import { Button, Layout, Typography } from 'antd';
import TopMenu from '../components/TopMenu';
import Copyright from '../components/Copyright';
import Sample from '../components/Sample';
import './SamplePage.less';
import { useParams } from 'react-router-dom';
import SampleConfig from '../config/SampleConfig';

const { Header, Content, Footer } = Layout;

const SamplePage = () => {
  const headerRef = useRef();
  const params = useParams();

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
          <span className='title'>{SampleConfig[params.type].title}</span>
          <span className='description'>{SampleConfig[params.type].description}</span>
          <div className='buttons'>
            <Button type='primary' size='large' className='btn-reg'>注册免费试用</Button>
            <Button size='large' className='btn-doc'>技术文档</Button>
          </div>
        </div>
        <div className='sample-container'>
          <Typography.Title level={2}>功能体验</Typography.Title>
          <Sample type={params.type} />
        </div>
      </Content>
      <Footer className='footer'>
        <Copyright />
      </Footer>
    </Layout>
  )
};

export default SamplePage;