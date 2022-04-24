import React, { useState, useRef, useEffect } from "react";
import { Col, Image, Row } from "antd";
import ScannerConfig from "../config/scannerConfig";
import "./Scanner.less";

const Scanner = () => {
  const [step, setStep] = useState(-1);
  const wrapperRef = useRef();
  const scanRef = useRef();
  const refPic0 = useRef();
  const refPic1 = useRef();
  const refPic2 = useRef();
  const refPic3 = useRef();
  
  useEffect(() => {
    setScanning(step);
    setActive(step);
    setShow(step);
    setTimeout(() => {
      setStep(step === 3 ? -1 : (step + 1));
    }, 5000);
  }, [step]);

  const setScanning = (step) => {
    if (step < 0) {
      scanRef.current.classList.add("scanning");
    } else {
      scanRef.current.classList.remove("scanning");
    }
  }

  const setActive = (step) => {
    [refPic0, refPic1, refPic2, refPic3].forEach((ref, index) => {
      if (step == index) {
        ref.current.classList.add("active");
      } else {
        ref.current.classList.remove("active");
      }
    });
  }

  const setShow = (step) => {
    if (step > -1) {
      wrapperRef.current.classList.add("show");
    } else {
      wrapperRef.current.classList.remove("show");
    }
  }

  return (
    <div className="content">
      <Row Row gutter={24}>
        <Col ref={wrapperRef} offset={2} span={6} className="detail-wrapper">
          <div className="fp-type">{ScannerConfig[step < 0 ? 0 : step].title}</div>
          <div className="divider"></div>
          <div>
            {
              ScannerConfig[step < 0 ? 0 : step].items.map((detail, index) => (
                <div className="detail-item">
                  <span>{detail.name}</span>
                  <span>{detail.value}</span>
                </div>
              ))
            }
          </div>
        </Col>
        <Col span={16}>
          <div ref={scanRef} className="scanner-outer">
            <div ref={refPic0} className="scanner-pic scanner-0"></div>
            <div ref={refPic1} className="scanner-pic scanner-1"></div>
            <div ref={refPic2} className="scanner-pic scanner-2"></div>
            <div ref={refPic3} className="scanner-pic scanner-3"></div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Scanner;