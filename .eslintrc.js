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
