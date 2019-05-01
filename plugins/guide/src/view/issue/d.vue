<template>
  <div class="content-bitorjs">
    <h1>nodejs 使用 webpack 打包</h1>

    <h3>安装webpack 相关依赖</h3>
    <ol>
      <li>webpack</li>
      <li>webpack-cli</li>
      <li>webpack-merge</li>
      <li>webpack-node-externals</li>
    </ol>
    <h3>webpack 部分配置参考</h3>
    <pre v-highlight>
      <code class="js" v-pre>
'use strict';

const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const pkg = require('../package.json');


module.exports = {
    entry: {
        app: './app.js',
    },
    target: 'node',
    output: {
        path: './dist',
        filename: '[name].js'
    },
    resolve: {
        extensions: ['', '.js']
    },
    externals: [nodeExternals({
        whitelist: Object.keys(pkg['dependencies']),
    })],
    node: {
        console: true,
        global: true,
        process: true,
        Buffer: true,
        __filename: true,
        __dirname: true,
        setImmediate: true
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        
    ]
};
      </code>
    </pre>
  </div>
</template>
<script>
export default {};
</script>
