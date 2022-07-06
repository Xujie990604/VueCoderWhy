import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';

// 引入vuei18n国际化插件 和 自定义的中文，英文变量信息
import vueI18n from 'vue-i18n';
import zhLocale from './Lang/zh';
import enLocale from './Lang/en';

Vue.use(vueI18n);

const i18n = new vueI18n({
  locale: 'zh', // 默认语言是中文
  messages: {
    'zh': zhLocale,
    'en': enLocale
  }
})

Vue.use(ElementUI);


Vue.prototype.$axios = axios;


Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
