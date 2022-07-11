/*
 * @Author: xujie 1607526161@qq.com
 * @Date: 2022-05-24 21:45:38
 * @LastEditors: xujie 1607526161@qq.com
 * @LastEditTime: 2022-07-10 15:51:21
 * @FilePath: \supermarket\vue.config.js
 * @Description:Vue提供的可以接入到webpack的配置文件
 */
// 使用@vue/cli-service提供的defineConfig助手函数来获取更好的类型提示
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    devtool: 'eval-cheap-module-source-map', // 当前模式可用于在VSCode中调试Vue代码
    resolve: {
      // 配置别名，@是脚手架自动配置的src文件夹的别名
      alias: {
        assets: '@/assets',
        common: '@/common',
        components: '@/components',
        views: '@/views'
      }
    }
  }
})
