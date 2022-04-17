import React from 'react';
import { Card, Typography, Row, Col, Image } from 'antd';
import './Product.less';

const { Title } = Typography;

const Product = () => {
  
  return (
    <div className='product-container'>
      <Title level={2} className="title">识别产品</Title>
      <span className='sub-title'>多种产品形式，灵活适用各类业务场景</span>
      <div className='products'>
        <Row gutter={[14, 14]}>
          
        </Row>
      </div>
    </div>
  )
};

export default Product;