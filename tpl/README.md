This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
``` bash
# install dependencies
yarn install

# serve with hot reload at localhost:3000
yarn start

# build for debug environment with minification
yarn run debug

# build for tester environment with minification
yarn run tester

# build for production environment with minification
yarn run prod

# build for production environment and view the bundle analyzer report at localhost:8888
yarn run prod/tester/debug report

```
##技术栈
######1、ES6
######2、React全家桶(React/React-router/React-redux/Redux-logger/Redux-saga)
######3、包管理工具Yarn
######4、自动化打包构建工具Webpack+Node server(HMR)
######5、脚本转义Babel
######6、代码检测Eslint
######7、蚂蚁金服开源UI组件Ant Design of React
######8、Chrome插件React Development Tools
##项目目录
######1、build 打包结果
######2、config webpack配置文件、jest单元测试
######3、docker docker镜像自动化部署
######4、node_modules 包依赖
######5、public 打包主入口文件
######6、scripts 配置命令
######7、src 开发目录
##开发目录
######1、router 路由
######2、components UI组件、木偶组件
######3、containers 提供数据的组件
######4、reducers 前端数据存储
######5、actions 前端行为
######6、sagas 异步中间件
######7、sagasSelector saga获取reducer的值
######8、config 项目统一配置
######9、service service如http请求等
######10、util 项目所用处理函数如处理价格等
######11、common 项目公用的图片样式等
##实例
######参考DEMO目录


