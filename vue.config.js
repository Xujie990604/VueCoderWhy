// 使用@vue/cli-service提供的defineConfig助手函数来获取更好的类型提示
const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    devtool: 'source-map' 
  }
})
