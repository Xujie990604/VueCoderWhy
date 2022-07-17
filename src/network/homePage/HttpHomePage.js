/*
 * @Author: xujie 1607526161@qq.com
 * @Date: 2022-07-17 17:31:15
 * @LastEditors: xujie 1607526161@qq.com
 * @LastEditTime: 2022-07-17 17:33:24
 * @FilePath: \supermarket\src\network\homePage\HttpHomePage.js
 * @Description: homePage页面使用到的http接口
 */

// 导入封装过的 http 实例
import http from "../http";
// p115 12分钟
export function getHomeMultidata() {
  return http({
    url: '/home/multidata'
  })
}
