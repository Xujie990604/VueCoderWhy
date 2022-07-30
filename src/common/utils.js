/*
 * @Author: xujie 1607526161@qq.com
 * @Date: 2022-07-10 01:36:53
 * @LastEditors: xujie 1607526161@qq.com
 * @LastEditTime: 2022-07-30 18:37:29
 * @FilePath: \supermarket\src\common\utils.js
 * @Description: 工具函数文件
 */
import httpCode from './const'
import Vue from 'vue'
// 因为 VueI8n 实在 Vue 的组件中注册 $t()方法
// 在 js 文件中无法访问 Vue 的组件实例，所以需要重新构造一个 VueI18n 实例
import VueI18n from 'vue-i18n'
import zhLocale from '../Lang/zh'
import enLocale from '../Lang/en'
Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: 'zh', // 默认语言是中文
  messages: {
    zh: zhLocale,
    en: enLocale
  }
})

export default {
  /**
   * @description: 消息提示函数，根据传入的 code 进行对应的弹窗提示
   * @param {*} code 网络请求的状态码
   * @return { undefined }
   */
  showMessage(code) {
    switch (code) {
      case httpCode.succeed.success:
        Vue.prototype.$message({ message: i18n.tc('HttpMessage.succeed.success'), type: 'success' })
        break
      case httpCode.err.notFound:
        Vue.prototype.$message({ message: i18n.tc('HttpMessage.err.notFound'), type: 'error' })
        break
      case httpCode.err.liverErr:
        Vue.prototype.$message({ message: i18n.tc('HttpMessage.err.liverErr'), type: 'error' })
        break
      default:
        Vue.prototype.$message({ message: '未知的错误' })
    }
  }
}
