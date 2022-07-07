module.exports = {
  root: true,
  // env: {
  //   node: true
  // },
  // // 这两条规则，每个都对应着一个Eslint的规则合集
  // extends: [
  //   'plugin:vue/essential',
  //   '@vue/standard'
  // ],
  // parserOptions: {
  //   parser: '@babel/eslint-parser'
  // },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}
