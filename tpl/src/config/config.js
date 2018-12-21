/** 2018/12/5 10:24
 *作者: Yudong.Chen
 *文件: config.js
 *功能: 说明
 */
let loginDataJson = sessionStorage.getItem('loginData')
let loginData = loginDataJson ? JSON.parse(loginDataJson) : null
const Config = {
  baseUrl: process.env.BASE_URL,
  isProduction: process.env.NODE_ENV === 'production',
  pageSize: 20,
  loginData: loginData
}
export default Config
