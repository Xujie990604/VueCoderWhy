/*
 * @Author: xujie 1607526161@qq.com
 * @Date: 2022-07-12 21:59:22
 * @LastEditors: xujie 1607526161@qq.com
 * @LastEditTime: 2022-07-21 21:49:09
 * @FilePath: \supermarket\src\network\test\HttpTestPage.js
 * @Description: test页面的接口使用
 */

// 导入封装过的axios实例
import http from '../http'

// 在组件中调用这些方法的时候
// 如果是get，需要getOneData({ params: {}, timeout: 1000 })这种形式
// 如果是post，需要getOneData({ data: {}, timeout: 1000 })这种形式
// 这种调用方式

/**
 * @description: 获取单条数据的方法
 * @param { Object } config 获取数据时传递的参数
 * @return { Promise } Promise类型的返回数据
 */
function getOneData(config) {
  return http({
    method: 'get',
    url: '/posts/1',
    ...config
  })
}

/**
 * @description: 上传单条数据的方法
 * @param { Object } config 上传数据时传递的参数
 * @return { Promise } Promise类型的返回数据
 */
function addOneData(config) {
  return http({
    method: 'post',
    url: '/posts',
    ...config
  })
}

export {
  getOneData,
  addOneData
}
