const prodcutionConfig = require("./webpakc.prod.config");
const developmentConfig = require("./webpakc.dev.config");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const utils = require('./utils');
const merge = require('webpack-merge');

const generateConfig = env => {
    const scriptLoader = [
        { loader: 'babel-loader', }

    ].concat(env === "production"
        ? []
        : ['eslint-loader']
    );
    const styleLoader =  [
        { loader: 'style-loader' },
        {
            loader: 'css-loader',
            options: {
                modules: false
            }
        }
    ];

    return {
        entry: {
            app: "./src/main.js"
        },
        output: {
            path: config.build.assetsRoot,
            filename: '[name].js',
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
                    exclude: /node_modules/,

                },

                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: scriptLoader
                },
                {
                    test: /\.css$/,
                    use:styleLoader,
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
                                name: 'img/[name].[hash:7].[ext]',
                                esModule: false,

                                name: utils.assetsPath('images/[name].[hash:7].[ext]')
                            }
                        },
                    ]

                },
                {
                    test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: utils.assetsPath('media/[name].[hash:7].[ext]')
                    }
                },
                {
                    test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
                    }
                }
            ]

        },
        plugins: [
            new VueLoaderPlugin(),
            new HtmlWebpackPlugin({
                filename: "./index.html",  //html文件名
                template: path.resolve(__dirname, '../index.html'), //指定文件模板
                inject: 'body'           //是否引用打包好的js
            })
        ]


    }
}
module.exports = env => {
    let config = env === "production" ? prodcutionConfig : developmentConfig;
    return merge(generateConfig(env), config);
}