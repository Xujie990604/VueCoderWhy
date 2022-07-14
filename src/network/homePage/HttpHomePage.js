/*
 * @Author: xujie 1607526161@qq.com
 * @Date: 2022-07-12 21:59:22
 * @LastEditors: xujie 1607526161@qq.com
 * @LastEditTime: 2022-07-12 23:07:25
 * @FilePath: \supermarket\src\network\homePage\HttpHomePage.js
 * @Description: homePage页面使用到的http接口
 */

// 导入封装过的axios实例
import http from '../http';

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
