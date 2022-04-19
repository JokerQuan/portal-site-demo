import samplePicText from '../assets/sample-pic-text.jpg';
import samplePicQuotaInvoice from '../assets/sample-pic-quota-invoice.png';
import samplePicVatInvoice from '../assets/sample-pic-vat-invoice.png';
import { accurate, quotaInvoice, vatInvoice } from '../service/api';
import TextIdentificationResult from '../components/TextIdentificationResult.js';
import QuotaInvoiceResult from '../components/QuotaInvoiceResult.js';
import VatInvoiceResult from '../components/VatInvoiceResult';



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

export default {
  text_identification,
  quota_invoice,
  vat_invoice
}