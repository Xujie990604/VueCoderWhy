import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../views/HomePage.vue')
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
