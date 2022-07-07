/*
 * @Author: your Name
 * @Date: 2022-07-06 17:22:35
 * @LastEditors: your Name
 * @LastEditTime: 2022-07-07 19:41:20
 * @Description: 
 */
module.exports = {
  root: true,
  env: {
    node: true
  },
  // 这两条规则，每个都对应着一个Eslint的规则合集
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser' // 指定哪个插件作为Eslint的解析器
  },
  // error: 报错 warn: 警告 off: 关闭
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    semi: ['warn', 'never'], // 句尾使用分号会警告
    'space-before-function-paren': ['error', 'never'] // 函数名和（）之间有空格会报错
  }
}
/