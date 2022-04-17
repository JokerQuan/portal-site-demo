import axios from "axios";
import qs from "querystringify";

const tokenUrl = "/oauth/2.0/token";
const GRANT_TYPE = "client_credentials";
const API_KEY = "NBASrkzWbaKutbjs81y6pDBS";
const SECRET_KEY = "S8XTn95DEWKpTYdAyuASyZOFCFfeTQ2W";
const baseURL = "https://aip.baidubce.com/rest/2.0/ocr/v1/";


export const getAccessToken = () => {
  return axios.post(`${tokenUrl}?grant_type=${GRANT_TYPE}&client_id=${API_KEY}&client_secret=${SECRET_KEY}`);
}

//高精度含位置通用文字识别
export const accurate = (access_token, image) => {
  return axios.post(`accurate?access_token=${access_token}`, 
  qs.stringify({image}),
  {
    baseURL,
    headers: {"Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"}
  });
}