import React from 'react';
import { Card, Typography, Row, Col, Image } from 'antd';
import './Feature.less';

import idCard from "../assets/id-card.png";
import bankCard from "../assets/bank-card.png";
import invoice from "../assets/invoice.png";
import driverCard from "../assets/driver-card.png";
import idVer from "../assets/id-ver.png";
import table from "../assets/table.png";
import seal from "../assets/seal.png";
import report from "../assets/report.png";
import { Link } from 'react-router-dom';

const { Title } = Typography;

const featureConfig = [{
  title: "身份证识别",
  description: "可自动校正透视变形图像，支持任意方向、正反图像自动识别，可区分复印件、屏幕翻拍、合成图片等，支持全部少数民族身份证识别，速度快，精准度高。",
  icon: idCard,
}, {
  title: "银行卡识别",
  description: "领先的OCR识别技术，支持多种异形银行卡卡号识别，识别准确率高，速度快。",
  icon: bankCard
}, {
  title: "财物发票混合识别",
  description: "支持批量通用发票识别，自动分割、分类和识别录入多张贴票的票面要素，大大提升票据录入效率。",
  icon: invoice
}, {
  title: "驾驶证识别",
  description: "支持对机动车驾驶证和驾驶证副页的关键字段识别，识别效果更精准，最大程度的优化使用体验。",
  icon: driverCard
}, {
  title: "身份验证",
  description: "对身份证进行实名认证，验证二要素信息（身份证号、姓名）的一致性，通过接入权威库实时接口，确保用户身份真实，可有效提升风控安全。",
  icon: idVer
}, {
  title: "通用表格识别",
  description: "高精度OCR表格识别，精准检测不同场景实现快速定位，支持定制化。",
  icon: table
}, {
  title: "印章识别",
  description: "准确定位印章，识别有无印章，并对印章内的文字进行有效提取识别。",
  icon: seal
}, {
  title: "财务报表识别",
  description: "自动提取财报信息并转化为结构化的数据，算法领先、精准可靠、快速响应。",
  icon: report
}]

const Feature = () => {
  
  return (
    <div className='container'>
      <Title level={2}>多重领先AI开放能力 打造优势产品</Title>
      <span className='sub-title'>多种产品形式，灵活适用各类业务场景</span>
      <div className='feature-container'>
        <Row gutter={[28, 28]}>
          {
            featureConfig.map((feature, index) => (
              <Col span={6} key={index}>
                {/* <Link to='/sample'> */}
                  <Card title={(
                    <div className='title'>
                      <span>{feature.title}</span>
                      <Image src={feature.icon} height="40px" preview={false}></Image>
                    </div>
                  )} className="feature-card">
                    <p className='description'>{feature.description}</p>
                    <span className='go-detail'>了解详情→</span>
                  </Card>
                {/* </Link> */}
              </Col>
            ))
          }
        </Row>
      </div>
    </div>
  )
};

export default Feature;