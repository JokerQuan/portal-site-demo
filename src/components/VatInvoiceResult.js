import React from 'react';
import { List, Table } from 'antd';

const resultConfig = [
  {key: "InvoiceType", name: "发票种类"},
  {key: "InvoiceTypeOrg", name: "发票名称"},
  {key: "InvoiceCode", name: "发票代码"},
  {key: "InvoiceNum", name: "发票号码"},
  {key: "InvoiceDate", name: "开票日期"},
  {key: "PurchaserName", name: "购方名称"},
  {key: "PurchaserRegisterNum", name: "购方纳税人识别号"},
  {key: "PurchaserAddress", name: "购方地址及电话"},
  {key: "PurchaserBank", name: "购方开户行及账号"},
  {key: "Password", name: "密码区"},
  {key: "Province", name: "省"},
  {key: "City", name: "市"},
  {key: "SheetNum", name: "联次信息"},
  {key: "Agent", name: "是否代开"},
  {key: "SellerName", name: "销售方名称"},
  {key: "SellerRegisterNum", name: "销售方纳税人识别号"},
  {key: "SellerAddress", name: "销售方地址及电话"},
  {key: "SellerBank", name: "销售方开户行及账号"},
  {key: "TotalAmount", name: "合计金额"},
  {key: "TotalTax", name: "合计税额"},
  {key: "AmountInWords", name: "价税合计(大写)"},
  {key: "AmountInFiguers", name: "价税合计(小写)"},
  {key: "Payee", name: "收款人"},
  {key: "Checker", name: "复核"},
  {key: "NoteDrawer", name: "开票人"},
  {key: "Remarks", name: "备注"},
]

const CommodityKeys = [
  'CommodityName',
  'CommodityType',
  'CommodityUnit',
  'CommodityNum',
  'CommodityPrice',
  'CommodityAmount',
  'CommodityTaxRate',
  'CommodityTax'
]

const columns = [{
  title: "货物名称",
  dataIndex: 'CommodityName'
},{
  title: "规格型号",
  dataIndex: 'CommodityType'
},{
  title: "单位",
  dataIndex: 'CommodityUnit'
},{
  title: "数量",
  dataIndex: 'CommodityNum'
},{
  title: "单价",
  dataIndex: 'CommodityPrice'
},{
  title: "金额",
  dataIndex: 'CommodityAmount'
},{
  title: "税率",
  dataIndex: 'CommodityTaxRate'
},{
  title: "税额",
  dataIndex: 'CommodityTax'
}]

const VatInvoiceResult = ({dataSource}) => {

  const getCommodityData = () => {
    if (!dataSource) return [];
    const data = [];
    const length = dataSource['CommodityName'].length;
    const commodityKeyNums = CommodityKeys.length;
    for(let i = 1; i <= length; i++) {
      let column = {key: i + ""};
      let rowAndWord = {};
      for(let j = 0; j < commodityKeyNums; j++) {
        rowAndWord = dataSource[CommodityKeys[j]].find(row => row.row == i);
        if (!rowAndWord) continue;
        column[CommodityKeys[j]] = rowAndWord.word;
      }
      data.push(column);
    }
    return data;
  }

  return (
    <>
      <List
        size='small'
        bordered
      >
        {
          resultConfig.map(config => (
            <List.Item key={config.key} className='list-item'>
              <span className='vat-invoice-name'>{config.name}</span>
              <span className='value'>{dataSource?.[config.key]}</span>
            </List.Item>
          ))
        }
      </List>
      <Table 
        bordered
        pagination={false}
        size="small"
        columns={columns}
        dataSource={getCommodityData()}
      />
    </>
  )
}

export default VatInvoiceResult;