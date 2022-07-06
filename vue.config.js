const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    devtool: 'eval-cheap-module-source-map' // 当前模式可用于在VSCode中调试Vue代码
  }
})
