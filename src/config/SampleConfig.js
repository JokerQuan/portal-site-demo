import samplePicText from '../assets/sample-pic-text.jpg';
import samplePicQuotaInvoice from '../assets/sample-pic-quota-invoice.png';
import samplePicVatInvoice from '../assets/sample-pic-vat-invoice.png';
import samplePicReceipt from '../assets/sample-pic-receipt.png';
import { accurate, quotaInvoice, receiptReq, vatInvoice } from '../service/api';
import TextIdentificationResult from '../components/TextIdentificationResult.js';
import QuotaInvoiceResult from '../components/QuotaInvoiceResult.js';
import VatInvoiceResult from '../components/VatInvoiceResult';
import ReceiptResult from '../components/ReceiptResult';



const text_identification = {
  defaultPicUrl : samplePicText,
  orcReq : accurate,
  resultKeys : 'words_result',
  component : TextIdentificationResult,
  title: "通用文字识别",
  description: "基于业界领先的图像处理和OCR文字识别技术，可自动分析、检测各类场景或任意版面的文字信息，并进行精准识别和提取，满足用户对各类文字信息自动化采集的需求。"
}

const quota_invoice = {
  defaultPicUrl : samplePicQuotaInvoice,
  orcReq : quotaInvoice,
  resultKeys : 'words_result',
  component : QuotaInvoiceResult,
  title: "定额发票识别",
  description: "业内领先的OCR识别技术，自动识别发票上的信息要素，对票据建立索引并归档，大大提升工作效率。"
}

const vat_invoice = {
  defaultPicUrl : samplePicVatInvoice,
  orcReq : vatInvoice,
  resultKeys : 'words_result',
  component : VatInvoiceResult,
  title: "增值税发票识别",
  description: "业内领先的OCR识别技术，自动识别发票上的信息要素，对票据建立索引并归档，大大提升工作效率。"
}

const receipt = {
  defaultPicUrl : samplePicReceipt,
  orcReq : receiptReq,
  resultKeys : 'words_result',
  component : ReceiptResult,
  title: "通用票据识别",
  description: "业内领先的OCR识别技术，针对票据字体做了专项优化的通用文字识别版本，支持对医疗票据、银行兑票、购物小票等各类票据的票面内容进行识别。"
}

const SampleConfig = {
  text_identification,
  quota_invoice,
  vat_invoice,
  receipt
}

export default SampleConfig;