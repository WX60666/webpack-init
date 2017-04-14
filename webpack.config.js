/**
 * Created by Administrator on 2017/4/13.
 */


let path = require('path');
let HtmlwebpackPlugin = require('html-webpack-plugin');
let webpack = require('webpack');
//定义了一些文件夹的路径
let ROOT_PATH = path.resolve(__dirname);
let APP_PATH = path.resolve(ROOT_PATH, 'app');
let BUILD_PATH = path.resolve(ROOT_PATH, 'build');
let TEM_PATH = path.resolve(ROOT_PATH, 'templates');

module.exports = {
    devtool: 'eval-source-map',
    //项目的文件夹 可以直接用文件夹名称 默认会找index.js 也可以确定是哪个文件名字
    entry:  {
        index: path.resolve(APP_PATH, 'index.js'),
        mobile: path.resolve(APP_PATH, 'mobile.js'),
        //添加要打包在vendors里面的库
        vendors: ['jquery', 'moment']
    },
    //输出的文件名 合并以后的js会命名为bundle.js
    output: {
        path: BUILD_PATH,
        //生成Hash名称的script来防止缓存
        filename: '[name].[hash].js'
    },
    //添加我们的插件 会自动生成一个html文件
    plugins: [
        //创建了两个HtmlWebpackPlugin的实例，生成两个页面
        new HtmlwebpackPlugin({
            title: 'Hello World app',
            //模板文件路径
            template: path.resolve(TEM_PATH, 'index.html'),
            filename: 'index.html',
            //chunks这个参数告诉插件要引用entry里面的哪几个入口
            chunks: ['index', 'vendors'],
            //要把script插入到标签里
            inject: 'body'
        }),
        new HtmlwebpackPlugin({
            title: 'Hello Mobile app',
            template: path.resolve(TEM_PATH, 'mobile.html'),
            filename: 'mobile.html',
            chunks: ['mobile', 'vendors'],
            inject: 'body'
        }),
        //provide $, jQuery and window.jQuery to every script 其他地方均不用做任何配置
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),
        //这个使用uglifyJs压缩你的js代码
        new webpack.optimize.UglifyJsPlugin({minimize: true}),
        //把入口文件里面的数组打包成verdors.js
        new webpack.optimize.CommonsChunkPlugin({name:'vendors',filename:'vendors.js'}),
    ],
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        contentBase: "./build"//本地服务器所加载的页面所在的目录
    },
    module:{
        loaders:[
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader?sourceMap', 'sass-loader?sourceMap'],
                include: APP_PATH
            },
            {
                test: /\.(jpg|jpeg|png|gif|ttf)$/,
                // include: APP_PATH,
                loader: 'url-loader?limit=8192'
            },
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                include: APP_PATH
            }
        ]
    }

};