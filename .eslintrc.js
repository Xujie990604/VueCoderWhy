/*
 * @Author: your Name
 * @Date: 2022-07-06 17:22:35
 * @LastEditors: xujie 1607526161@qq.com
 * @LastEditTime: 2022-07-12 20:30:42
 * @Description: Eslint插件的配置文件
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
    semi: 'off', // 不检查分号
    'space-before-function-paren': ['error', 'never'], // 函数名和（）之间有空格会报错
    'no-tabs': 'off', // 不检查制表符
    quotes: 'off', // 不检查单,双引号
    indent: 'off', // 不检查缩进
    'comma-dangle': 'off', // 不检查是否尾随逗号
  }
}
