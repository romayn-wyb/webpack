const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const config = require('../config');

// const utils = require("./utils");
module.exports = {
    mode: "development",
    entry: {
        app: "./src/main.js"
    },
    output: {
        path: config.build.assetsRoot,
        filename: '[name].js',
        // publicPath: process.env.NODE_ENV === 'production'
        // ? config.build.assetsPublicPath
        // : config.dev.assetsPublicPath
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',  //设置别名，不然使用 import  识别不了 vue
            '@': path.resolve(__dirname, '../src')
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                exclude: /node_modules/
            },

            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
             {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: false
                        }
                    }
                ],
                exclude: [/node_modules/, /ui/], //排除 node_modules文件夹

            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
                exclude: [/node_modules/, /ui/],
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use: [
                  
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            name:'img/[name].[hash:7].[ext]',
                            esModule:false,
                            name: 'images/[name].[hash:7].[ext]'
                            // name: utils.assetsPath('images/[name].[hash:7].[ext]')
                        }
                    },
                ]

            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    //  name: utils.assetsPath('media/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    //  name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
                }
            }
        ]
    },
    
    devServer: config.dev.server,
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            filename: "./index.html",  //html文件名
            template: path.resolve(__dirname, '../index.html'), //指定文件模板
            inject: 'body'           //是否引用打包好的js
        })
    ]
}