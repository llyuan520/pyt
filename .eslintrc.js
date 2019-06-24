// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html',
    'react'
  ],
  // add your custom rules here
  'rules': {
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    'space-before-function-paren': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'semi': ["error", "always"], // 分号，强制要求
    'no-duplicate-imports': ["error", { "includeExports": true }],
    'no-multi-spaces': 1,
    "no-multiple-empty-lines": [1, {"max": 2}],
    "no-sequences": 0, // 禁止使用逗号运算符
    "no-var": 1, // 禁用var，用let和const代替
    "eqeqeq": 2, // 必须使用全等
    "quotes": [1, "single"], // 引号类型 `` "" ''
  }
}
