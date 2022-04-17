import React, { useState, useRef, useEffect } from "react";
import { Col, Divider, Image, Row } from "antd";
import fp1 from "../assets/fp1.webp";
import fp2 from "../assets/fp2.webp";
import fp3 from "../assets/fp3.webp";
import fp4 from "../assets/fp4.webp";

import "./Scanner.less";

const Scanner = () => {
  const box0 = useRef();
  const box1 = useRef();
  const box2 = useRef();
  const box3 = useRef();
  const [active, setActive] = useState(0);
  const [isHover, setIsHover] = useState(false);
  const boxList = [box0, box1, box2, box3];

  useEffect(() => {
    for (let i = 0; i < boxList.length; i++) {
      if (active == i) {
        boxList[i].current.classList.add("active");
      } else {
        boxList[i].current.classList.remove("active");
      }
    }
  }, [active]);

  useEffect(() => {
    let timeoutId = -1
    if (!isHover) {
      timeoutId = setTimeout(() => setActive(active === 3 ? 0 : (active + 1)), 5000);
    }
    return () => clearTimeout(timeoutId);
  }, [isHover, active]);

  useEffect(() => {
    for (let i = 0; i < boxList.length; i++) {
      boxList[i].current.addEventListener("mouseover", () => {
        setActive(i);
        setIsHover(true);
      });
      boxList[i].current.addEventListener("mouseout", () => {
        setIsHover(false);
      });
    }
  }, []);

  return (
    <div className="content">
      <Row Row gutter={24}>
        <Col offset={2} span={6} className="detail-wrapper">
          <div className="fp-type">增值税专用发票</div>
          <div className="divider"></div>
          <div>
            <div className="detail-item">
              <span>发票代码</span>
              <span>30500162230</span>
            </div>
            <div className="detail-item">
              <span>发票号码</span>
              <span>246127564</span>
            </div>
            <div className="detail-item">
              <span>开票日期</span>
              <span>2020年12月30日</span>
            </div>
            <div className="detail-item">
              <span>税前金额</span>
              <span>332.15</span>
            </div>
            <div className="detail-item">
              <span>校验码</span>
              <span>1515482321845865412</span>
            </div>
            <div className="detail-item">
              <span>税后金额</span>
              <span>315.32</span>
            </div>
          </div>
        </Col>
        <Col span={16}>
          <Row gutter={[16, 24]}>
            <Col span={16}>
              <div ref={box0} className="scan-box">
                <Image src={fp1} preview={false} height="300px"></Image>
                <div className="scan"></div>
              </div>
            </Col>
            <Col span={8}>
              <div ref={box1} className="scan-box">
                <Image src={fp2} preview={false} height="300px"></Image>
                <div className="scan small"></div>
              </div>
            </Col>
            <Col span={8}>
              <div ref={box2} className="scan-box">
                <Image src={fp3} preview={false} height="300px"></Image>
                <div className="scan small"></div>
              </div>
            </Col>
            <Col span={16}>
              <div ref={box3} className="scan-box">
                <Image src={fp4} preview={false} height="300px"></Image>
                <div className="scan"></div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default Scanner;