# ky-vant-demo

> 基于 vant 的移动端演示狂阿基

## 技术栈

- [vue](https://cn.vuejs.org/)
- [vue-router](https://router.vuejs.org/zh/)
- [vuex](https://vuex.vuejs.org/zh/)
- [axios](https://www.kancloud.cn/yunye/axios/234845)
- [mockjs](http://mockjs.com/)
- [vant](https://vant-contrib.gitee.io/vant/#/zh-CN/)
- [Iconfont](https://www.iconfont.cn/)

## 提供功能

- 环境配置：预设开发环境、生产环境、预览环境
- 开发模板：vue 组件、api 模板、路由文件、vuex 模板
- 集成 vant
  - 自适应
  - 集成基本组件：Page、StatusTip、rangeSelector
  - 按需引入
- 集成 Mock.js：提供增删改查示例
- 开发规范
  - git 提交规范
- 封装基本的 axios 请求
- 自动版本更新

## 常用命令

### 启动项目

```
npm install // 安装依赖
npm run serve // 启动服务器
```

> 如果 npm 安装依赖的速度很慢，可以将源设置为 taobao 源
>
> ```
> npm config set registry https://registry.npm.taobao.org
> ```

### 打包项目

> 除了 dist 文件外，还会生成 1 个以 dist 压缩的 zip 文件

```
npm run build
```

### 预览打包项目

```
npm run preview
```

### 生成各种模板

```bash
npm run gen
```

支持生成:

- vuex 模板
- vue 组件模板
- mock api 模板

### git 提交代码

```bash
npm run cz
```

### 生成 CHANGLOG.md 文件

```bash
npm run log
```

### 变更版本号

```bash
npm run version
```

## 项目结构说明

```bash
|-- compressHelper 压缩助手
|-- quickVueTemplate 快速生成vue项目模板
|-- versionHelper 版本号助手
|-- public 公共资源
|-- src
	|-- assets 静态资源 图片
  |-- styles 公共样式
      |-- common.scss 公共样式
      |-- reset.vant.less 重置vant样式
	|-- components 公共组件
      |-- Page 页面组件
      |-- RangeSeletor 范围选择器组件
      |-- StatusTip 状态提示组件
	|-- mock mock接口和数据
		|-- model mock的数据模型
		|-- api mock的api接口
    |-- utils mock接口时需要的一些工具
    |-- index.js 路由注册汇总文件
	|-- router 路由
	|-- store vuex数据
	|-- utils 工具
	|-- views 视图，主要文件在这里
	|-- App.vue 入口文件
	|-- main.js 入口文件
|-- .browserslistrc 支持浏览器配置
|-- .env.development 开发环境配置
|-- .env.preview 预览环境配置
|-- .env.production 生产环境配置
|-- .gitignore git忽视文件
|-- .eslintrc.js eslint配置
|--  babel.config.js babel配置
|-- CHANGELOG.md 变更记录
|-- cmmintlint.config.js git commit lint
|-- vue.config.js vue项目配置
|-- package.json 依赖包和命令行
|-- README.md
```

## 控制台调试

- 开发设备以 iphone7/8/9 为基准

## 真机调试

参考步骤： [在安卓设备上使用 Chrome 远程调试功能](https://wiki.jikexueyuan.com/project/chrome-devtools/remote-debugging-on-android.html)

> - 注意：让调试设备和笔记本处于同一网络
> - chrome://inspect 的无效可能是 USB 开发调试驱动问题，可安装相关手机助手解决

## 开发规范

### 命名规范

1. 页面与组件

- 所有的单独的页面都使用小驼峰法，如`singlePage`
- 页面的子组件同一在页面下建立`components`文件夹，子组件使用大驼峰法命名，如`SubComp`,
- 页面的命名由`名词|[属性|动作]|状态`组成，通用开头不必声明。比如一个黄金相关的项目，那么无需使用`goldxx.vue`开头的命名方式

2. 路由

- 路由的命名由`名词/[属性|动作]/状态`组成
- 路由的 name 采用大驼峰法
- 页面的跳转同一采用使用 name 的跳转方式，query 参数格式。

3. 开发

- 所有的 http 请求方法以`Request`结尾
- mock 的 api 文件以`xx.mock.js`的方式命名
- 所有的 http 请求方法与其他方法分离

4. git

- 开发请基于`master`分支新建`dev/yourname`分支进行开发，禁止直接在 master 分支上开发
- git 提交应该遵循以下规范，否则会被 git 钩子拦截，造成无法提交。

```text
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

> type 指的是提交类型，包括以下几种:
>
> - feat：新功能（feature）
> - fix：修补 bug
> - docs：文档（documentation）
> - style： 格式（不影响代码运行的变动）
> - refactor：重构（即不是新增功能，也不是修改 bug 的代码变动）
> - test：增加测试
> - chore：构建过程或辅助工具的变动
>
> scope-->影响范围; subject-->简略描述;blank line --> 空行;body --> 详细描述内容; footer --> 不兼容变动和关闭 issue

## 接口请求方法示例

```js
    /**
     * HTTP REQUEST
     * 请求列表
     */
    getAddressListRequest() {
      this.$http
        .get(`/api/address/list`, {
          params: {
            pageNum: 1,
            pageSize: 10,
            searchStr: "",
          },
        })
        .then((res) => {
          console.log("res===", res);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    /**
     * HTTP REQUEST
     * 新增地址
     */
    addAddressListRequest() {
      this.$http
        .post(`/api/address/add`, {
          phone: "13412341235",
          address: "xx地址",
          detailAddress: "xx地址",
          isDefault: 0,
          name: "张先生",
        })
        .then((res) => {
          this.getAddressListRequest();
        })
        .catch((e) => {
          console.log(e);
        });
    },
    /**
     * HTTP REQUEST
     * 删除地址
     */
    deleteAddressRequest() {
      this.$http
        .delete(`/api/address/delete`, {
          data: {
            id: "ADDRESS_2020_01",
          },
        })
        .then((res) => {
          this.getAddressListRequest();
        });
    },
    /**
     * HTTP REQUEST
     * 更新地址
     */
    updateAddressRequest() {
      this.$http
        .put(`/api/address/update`, {
          id: "ADDRESS_2020_01",
          name: "徐小姐的猫",
          address: "上海市浦东新区",
          detailAddress: "上海市浦东新区张江镇亮景路210号金仕达大厦",
          isDefault: 0,
          phone: "13412341234",
        })
        .then((res) => {
          this.getAddressListRequest();
        });
    },
```

## 开发使用工具（IDE）

- VSCODE

### 开发用扩展

![vant](http://mrrezv.coding-pages.com/vant.jpg)

![vetur](http://mrrezv.coding-pages.com/vetur.jpg)

## 图片

- 图标库优先取自[Iconfont](https://www.iconfont.cn/)
