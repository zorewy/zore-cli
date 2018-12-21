'use strict'
const errorOverlayMiddleware = require('react-dev-utils/errorOverlayMiddleware')
const noopServiceWorkerMiddleware = require('react-dev-utils/noopServiceWorkerMiddleware')
const config = require('./webpack.config.dev')
const paths = require('./paths')
const protocol = process.env.HTTPS === 'true' ? 'https' : 'http'
const host = process.env.HOST || '0.0.0.0'
module.exports = function (proxy, allowedHost) {
  return {
    disableHostCheck:
    !proxy || process.env.DANGEROUSLY_DISABLE_HOST_CHECK === 'true',
    compress: true,
    clientLogLevel: 'none',
    contentBase: paths.appPublic,
    watchContentBase: true,
    hot: true,
    publicPath: config.output.publicPath,
    quiet: true,
    watchOptions: {
      ignored: /node_modules/,
    },
    https: protocol === 'https',
    host: host,
    overlay: false,
    historyApiFallback: {
      disableDotRule: true,
    },
    public: allowedHost,
    // proxy,
    proxy: {
      '/api': {
        // target: 'https://eshopdev.cplotus-gz.com:9008', // 联调环境(本地开发环境)
        target: 'https://eshop-test.cplotus-gz.com:9008', //测试环境
        // target: 'https://lotusadmin.cplotus-gz.com', //生产环境
        secure: false,
        changeOrigin: true,
        pathRewrite: {'^/api': ''}
      }
    },
    setup (app) {
      app.use(errorOverlayMiddleware())
      app.use(noopServiceWorkerMiddleware())
    },
  }
}
