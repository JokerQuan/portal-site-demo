import React, { useEffect, useRef, useState } from 'react';
import { List, Image, Upload, Collapse, message, Spin } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { useLocalStorageState, useRequest } from 'ahooks';
import ReactJson from 'react-json-view';
import test from '../assets/sample-pic.jpg';
import './Sample.less';
import { getAccessToken, accurate } from '../service/api';
import { convertImgToBase64, convertLocalimgToBase64 } from '../utils/imageUtils';

const { Panel } = Collapse;

const Sample = () => {
  const [activeKey, setActiveKey] = useState("0");
  const [uploadLoading, setUploadLoading] = useState(false);
  const [ocrResult, setOcrResult] = useState({});
  const [uploadedList, setUploadedList] = useState([{
    key: "0",
    url: test,
    type: "static"
  }]);
  const [accessToken, setAccessToken] = useLocalStorageState("baidu-ocr-access-token");

  const accessTokenReq = useRequest(getAccessToken, {
    manual: true,
    onSuccess: (result) => {
      setAccessToken(result.data.access_token);
    },
    onError: (error) => {
      message.error(error.message);
    }
  });

  const accurateReq = useRequest(accurate, {
    manual: true
  });

  useEffect(() => {
    if (!accessToken) {
      accessTokenReq.run();
    } else {
      handleStaticImg(test, "0", true);
    }
  }, [accessToken]);

  const handleStaticImg = (url, key, isFirst) => {
    setUploadLoading(true);
    convertImgToBase64(url, (dataURL) => {
      accurateReq.runAsync(accessToken, dataURL).then(data => {
        setOcrResult(data.data);
        if (!isFirst) {
          message.success("识别成功");
        }
        if (uploadedList.findIndex(upload => upload.key == key) > -1) {
          setUploadLoading(false);
          setActiveKey(key);
          return;
        }
      }).catch(error => {
        setUploadLoading(false);
        if (!isFirst) {
          message.error(error);
        }
      });
    });
  }

  const handleLocalImg = (file, key) => {
    const isUploaded = uploadedList.findIndex(upload => upload.key == key) > -1;
    setUploadLoading(true);
    convertLocalimgToBase64(file, (dataURL) => {
      accurateReq.runAsync(accessToken, dataURL).then(data => {
        setOcrResult(data.data);
        message.success("识别成功");
        if (isUploaded) {
          setUploadLoading(false);
          setActiveKey(key);
          return;
        }
        setUploadedList([...uploadedList, {
          key: uploadedList.length + "",
          file,
          url: URL.createObjectURL(file),
          type: "local"
        }]);
        setUploadLoading(false);
        setActiveKey(uploadedList.length + "");
      }).catch(error => {
        setUploadLoading(false);
        message.error(error);
      });
    })
  }

  const uploadProps = {
    fileList: [],
    beforeUpload: file => {
      const isImg = file.type === 'image/png' || file.type === 'image/jpeg';
      if (!isImg) {
        message.error(`只能选择png、jpg图片文件`);
        return false;
      }

      handleLocalImg(file, uploadedList.length + "");

      return false;
    }
  }

  const columns = [];

  return (
    <>
      <div className='sample'>
        <div className='pic-container'>
          <div className='pic-bg'>
            <Image className='pic' src={uploadedList[+activeKey].url} preview={false} />
          </div>
          <Spin 
            size='large'
            indicator={<LoadingOutlined />}
            spinning={uploadLoading}
            tip="识别中，请稍候"
          >
            <div className='pic-list'>
              {
                uploadedList.map(pic => (
                  <div 
                    className={`pic-outter ${activeKey == pic.key ? "active" : ""}`}
                    onClick={() => pic.type == "static" ? handleStaticImg(pic.url, pic.key) : handleLocalImg(pic.file, pic.key)}
                  >
                    <Image className='pic-thum' src={pic.url} preview={false} />
                  </div>
                ))
              }
              <Upload {...uploadProps}>
                <div className='upload'>
                  <PlusOutlined />
                  <div style={{ marginTop: 8 }}>上传图片</div>
                </div>
              </Upload>
            </div>
          </Spin>
        </div>
        <div className='result'>
          <Collapse accordion defaultActiveKey="1">
            <Panel header="识别结果" key="1">
              <div className='result-container'>
                <List
                size='small'
                  bordered
                  dataSource={ocrResult.words_result}
                  renderItem={(item, index) => (
                    <List.Item className='list-item'>
                      <span className='name'>{index}</span>
                      <span className='value'>{item.words}</span>
                    </List.Item>
                  )}
                />
              </div>
            </Panel>
            <Panel header="Response" key="2">
              <div className='response-container'>
                <ReactJson src={ocrResult} 
                  name={false} 
                  displayDataTypes={false} 
                  enableClipboard={false}/>
              </div>
            </Panel>
          </Collapse>
        </div>
      </div>
    </>
  )
};

export default Sample;