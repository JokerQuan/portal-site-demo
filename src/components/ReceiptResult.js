import React from 'react';
import { List } from 'antd';


const ReceiptResult = ({dataSource}) => {

  return (
    <>
      <List
        size='small'
        bordered
      >
        {
          dataSource.map((item, index) => (
            <List.Item className='list-item'>
              <span className='index'>{index}</span>
              <span className='value'>{item.words}</span>
            </List.Item>
          ))
        }
      </List>
    </>
  )
}

export default ReceiptResult;