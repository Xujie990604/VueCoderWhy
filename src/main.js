/*
 * @Author: xujie 1607526161@qq.com
 * @Date: 2022-05-24 21:45:38
 * @LastEditors: xujie 1607526161@qq.com
 * @FilePath: \supermarket\src\main.js
 * @Description: 入口文件
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'

// 引入Vue-i18n国际化插件 和 自定义的中文，英文变量信息
import VueI18n from 'vue-i18n'
import zhLocale from './Lang/zh'
import enLocale from './Lang/en'

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'zh', // 默认语言是中文
  messages: {
    zh: zhLocale,
    en: enLocale
  }
})

Vue.use(ElementUI)

Vue.prototype.$axios = axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
