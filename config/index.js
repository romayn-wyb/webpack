'use strict'
const path = require('path');
module.exports={

    base: {
        rootPath: 'dist_engineering', // 打包路径
        assetsPath: 'static/', // 资源相对路径
      },

    dev:{
        host:"localhost",
        prot:'8006',
        proxy:{
            '/api': {
                target: 'xxxx',
                crossOrigin: true,
              },
              '/pi': {
                target: 'xxxx',
                crossOrigin: true,
              },
        },
         // 环境变量，会全局替换js中的process.env对象
         assetsPublicPath: './',
         assetsSubDirectory:'static',
        env:{
            NODE_ENV:'"development"',
            PACKAGE_ENV: '"dev"',
        }
    },
    build:{
        assetsPublicPath: './',
        assetsSubDirectory:'static',
        assetsRoot: path.resolve(__dirname, '../dist'),
        env: {
          NODE_ENV: '"production"',
          PACKAGE_ENV: '"prod"',
        },
    }
}