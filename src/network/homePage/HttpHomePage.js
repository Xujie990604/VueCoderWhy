/*
 * @Author: xujie 1607526161@qq.com
 * @Date: 2022-07-17 17:31:15
 * @LastEditors: xujie 1607526161@qq.com
 * @LastEditTime: 2022-07-30 17:29:30
 * @FilePath: \supermarket\src\network\homePage\HttpHomePage.js
 * @Description: homePage页面使用到的http接口
 */

// 导入封装过的 http 实例
import http from '../http'

// URL列表
const URL = {
  getMultidata: '/home/multidata' // 获取多条网络数据
}

/**
 * @description: 获取多条网络数据
 * @return { Promise } 返回值是经过 Promise 包装过的数据
 */
export function getHomeMultidata() {
  return http({
    url: URL.getMultidata,
    method: 'get'
  })
}

/**
 * @description: 请求 Home 页面中的商品数据
 * @param { String } type 请求商品数据的类型
 * @param { Number } page 请求商品数据的页码
 * @return { Promise } 经过 Promise 包装过的数据
 */
export function getHomeGoods(type, page) {
  return http({
    url: '/home/data',
    method: 'get',
    params: {
      type,
      page
    }
  })
}
