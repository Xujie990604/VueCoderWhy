/*
 * @Author: xujie 1607526161@qq.com
 * @Date: 2022-05-24 21:45:38
 * @LastEditors: x09898 coder_xujie@163.com
 * @LastEditTime: 2022-07-15 11:51:38
 * @FilePath: \VueCoderWhy\src\router\index.js
 * @Description: Vue的路由配置界面
 */

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../views/homePage/HomePage.vue')
  },
  {
    path: '/home',
    component: () => import('../views/homePage/HomePage.vue')
  },
  {
    path: '/category',
    component: () => import('../views/category/CateGory.vue')
  },
  {
    path: '/cart',
    component: () => import('../views/cart/MyCart.vue')
  },
  {
    path: '/profile',
    component: () => import('../views/profile/MyProfile.vue')
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('../views/TestView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL, // 应用的基路径 使用BASE_URL变量,等价配置文件中的publicPath值
  routes
})

export default router
