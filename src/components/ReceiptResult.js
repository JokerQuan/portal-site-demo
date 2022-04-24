import React from 'react';
import { List } from 'antd';


const ReceiptResult = ({dataSource}) => {

  return (
    <>
      <List
        size='small'
        bordered
        dataSource={dataSource}
        renderItem={(item, index) => (
          <List.Item className='list-item'>
            <span className='index'>{index}</span>
            <span className='value'>{item.words}</span>
          </List.Item>
        )}
      />
    </>
  )
}

export default ReceiptResult;