import React from 'react';
import { List } from 'antd';

const QuotaInvoiceResult = ({dataSource}) => {
  return (
    <List
      size='small'
      bordered
    >
      <List.Item className='list-item'>
        <span className='quota-invoice-name'>发票代码</span>
        <span className='value'>{dataSource?.invoice_code}</span>
      </List.Item>
      <List.Item className='list-item'>
        <span className='quota-invoice-name'>发票号码</span>
        <span className='value'>{dataSource?.invoice_number}</span>
      </List.Item>
      <List.Item className='list-item'>
        <span className='quota-invoice-name'>发票金额</span>
        <span className='value'>{dataSource?.invoice_rate}</span>
      </List.Item>
      <List.Item className='list-item'>
        <span className='quota-invoice-name'>发票金额小写</span>
        <span className='value'>{dataSource?.invoice_rate_lowercase}</span>
      </List.Item>
      <List.Item className='list-item'>
        <span className='quota-invoice-name'>发票所在地</span>
        <span className='value'>{dataSource?.location}</span>
      </List.Item>
      <List.Item className='list-item'>
        <span className='quota-invoice-name'>省</span>
        <span className='value'>{dataSource?.province}</span>
      </List.Item>
      <List.Item className='list-item'>
        <span className='quota-invoice-name'>市</span>
        <span className='value'>{dataSource?.city}</span>
      </List.Item>
    </List>
  )
}

export default QuotaInvoiceResult;