## Quick Start

* 安装

```bash
npm install
```
or
```bash
yarn install
```

* 运行

```
npm run dev
```

## 目录结构

`src` 目录下

```bash
├── assets                      // 静态资源
│   └── scss
│       ├── index.scss
│       ├── mixins.scss
│       └── resets.scss
├── components                  // 组件
│   └── delayLoading
│       └── index.jsx
├── index.html                  // 入口 html
├── index.jsx                   // 入口
├── language                    // 语言包
│   ├── en-US                   // 英文
│   │   ├── index.js
│   │   ├── label.js
│   │   └── status.js
│   └── zh-CN                   // 中文
│       ├── index.js
│       ├── label.js
│       └── status.js
├── pages                       // 功能模块
│   ├── index.jsx
│   └── test
│       ├── index.jsx
│       ├── index.scss          // 样式
│       ├──components           // 当前模块 组件
│       └── module              // 当前模块 redux
│           ├── action.js
│           └── reducer.js
├── routes                      // 路由
│   └── index.js
├── store                       // redux 配置
│   ├── configureStore.js
│   └── reducers.js             // redux 入口文件
└── utils                       // 公用方法
    ├── HttpRequest.js
    ├── Middleware.js
    ├── cache.js
    ├── createContext.js        // 全局context 语言包入口
    ├── init.js
    └── utils.js
```

> **注意** `pages` 目录下文件夹对应的是功能模块

## 新增语言包

在 `src/language/` 复制 `zh-CN `文件夹并修改文件夹名为 'new language'，然后里面对应的翻译即可。

> 注意：要把新建的语言包资源参照格式添加到 `src/utils/createContext.js` 内

## 使用语言包

模块开发时引入资源，并且要包一层

```js

import { LanguagePackage } from '@/utils/createContext';
...

class App extends Component {
  ...
  render() {
    return (
      <LanguagePackage.Consumer>
        {({LABEL_TEXT}) => ( // 引入对应的类型，参照 `language/zh-CN/index.js` 对象
          <div>{LABEL_TEXT['INVOICE_TYPE']}</div>
          ...
        )}
      </LanguagePackage.Consumer>
    );
  }
};
```

## 新增模块

* 比如新增**列表管理模块**：

在 `src/pages` 目录下新建文件夹，且命名未 `List`

```js
|-- List
|---- module // 当前模块 redux
|---- components // 当前模块公用组件
|---- index.jsx // 当前模块入口
|---- index.scss // 当前模块样式
```

* 添加路由

打开 `src/routes/workAsset.js` 文件，添加对应模块的路由即可

打开 `src/common/menus.js` 文件，添加对应模块的菜单入口

打开 `src/store/reducers.js` 文件，添加对应模块的 `redux`

