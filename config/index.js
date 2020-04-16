'use strict'
const path = require('path');
module.exports = {

  base: {
    rootPath: 'dist_engineering', // 打包路径
    assetsPath: 'static/', // 资源相对路径
  },

  dev: {
    server:{
      allowedHosts: [
        '10.11.0.193',
      ],
      host: '10.11.0.193',
      port: 9000,
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      proxy: {
        '/api': {
          target: 'http://129.211.120.209:8080/yyesweb/',
          crossOrigin: true,
          pathRewrite:{
            '^/comments':'/api/comments'
          }
        },
        '/pi': {
          target: 'xxxx',
          crossOrigin: true,
        },
      },
    },
    // 环境变量，会全局替换js中的process.env对象
    assetsPublicPath: './',
    assetsSubDirectory: 'static',
    env: {
      NODE_ENV: '"development"',
      PACKAGE_ENV: '"dev"',
    }
  },
  build: {
    assetsPublicPath: './',
    assetsSubDirectory: 'static',
    assetsRoot: path.resolve(__dirname, '../dist'),
    env: {
      NODE_ENV: '"production"',
      PACKAGE_ENV: '"prod"',
    },
  }
}