/*
 * @Author: xujie 1607526161@qq.com
 * @Date: 2022-07-12 21:08:50
 * @LastEditors: xujie 1607526161@qq.com
 * @LastEditTime: 2022-07-21 21:49:13
 * @FilePath: \supermarket\src\network\http.js
 * @Description: 封装axios的文件
 */
import axios from 'axios'

export default function(config) {
  // 1.创建axios的实例
  const http = axios.create({
    baseURL: 'http://152.136.185.210:8000/api/w6',
    timeout: 5000
  })

  // 请求拦截器
  http.interceptors.request.use(res => {
    // 请求成功时，执行代码
    return res
  }, err => {
    // 请求出现错误时，执行代码
    console.log(err)
    return Promise.reject(err)
  })

  // 响应拦截器
  http.interceptors.response.use(res => {
    // 响应成功时，执行代码
    return res.data
  }, err => {
    // 响应失败时，执行代码
    console.log(err)
    return Promise.reject(err)
  })

  // 返回axios实例的执行结果
  return http(config)
}
