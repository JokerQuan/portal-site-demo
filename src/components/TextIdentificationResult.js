import React from 'react';
import { List } from 'antd';

const TextIdentificationResult = ({dataSource}) => {
  return (
    <List
      size='small'
      bordered
      dataSource={dataSource}
      renderItem={(item, index) => (
        <List.Item className='list-item'>
          <span className='text-indentification-name'>{index}</span>
          <span className='value'>{item.words}</span>
        </List.Item>
      )}
    />
  )
}

export default TextIdentificationResult;