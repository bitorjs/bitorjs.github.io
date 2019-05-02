var vConsolePlugin = require('vconsole-webpack-plugin');
const webpack = require('webpack');
const WebpackMerge = require('webpack-merge');
const base = require('./webpack.base');
const Jarvis = require("webpack-jarvis");


var path = require('path');
const cwd = process.cwd();

const postcss = require(path.join(cwd, 'postcss.config'));

module.exports = WebpackMerge(base, {
  mode: 'development',
  module: {
    rules: [{
      test: /\.(le|c)ss$/,
      use: [
        'vue-style-loader',
        'css-loader',
        {
          loader: 'postcss-loader',
          options: postcss
        },
        {
          loader: 'less-loader',
          query: {
            sourceMap: true,
            globalVars: {
              "boxWidth": '200px'
            },
            modifyVars: {
              "boxHeight": '200px'
            }
          }
        }
      ]
    }, {
      test: /\.s(c|a)ss$/,
      use: [
        'vue-style-loader', // creates style nodes from JS strings
        "css-loader", // translates CSS into CommonJS
        {
          loader: 'postcss-loader',
          options: postcss
        },
        {
          loader: "sass-loader",
          options: {
            data: ""
          }
        } // compiles Sass to CSS, using Node Sass by default
      ]
    }]
  },
  optimization: {
    namedModules: true,
  },
  plugins: [
    new Jarvis({
      port: 1337 // optional: set a port
    }),
    new webpack.DefinePlugin({
      'process.env': {
        IS_DEV: true,
      },
    }),
    // new vConsolePlugin({
    //   filter: [],  // 需要过滤的入口文件
    //   enable: true // 发布代码前记得改回 false
    // }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devtool: 'eval',
  devServer: {
    contentBase: path.join(cwd, 'dist'),
    open: true,
    host: '0.0.0.0',
    port: 8100,
    hot: true,
    compress: false,
    inline: true,
    proxy: {
      '/xxxx/*': {
        target: 'http://xxx.xxx.cn',
        changeOrigin: true,
        pathRewrite: {
          '^/yyyy': '/'
        }
      },
    },
    setup(app) {
      var express = require('express');

      var router = express.Router();

      router.get('/user', function (req, res, next) {
        res.send('this is bbbbbbbbbbbbbbbbbbbbbbbbbbbbb');
      });

      router.post('/user', function (req, res, next) {
        res.send('this is bbbbbbbbbbbbbbbbbbbbbbbbbbbbb');
      });

      app.use('/', router)
    }
    // https: {
    //   cert: fs.readFileSync("./localhost+4.pem"),
    //   key: fs.readFileSync("./localhost+4-key.pem"),
    //   cacert: fs.readFileSync("./localhost+4.pem")
    // }
  },
  watchOptions: {
    ignored: [path.resolve(cwd, 'dist/**/*.*'), path.resolve(cwd, 'node_modules')]
  }
});