<template>
  <div class="content-bitorjs">
    <h1>nodejs 使用 webpack 打包</h1>

    <h3>安装webpack 相关依赖</h3>
    <pre v-highlight>
      <code class="js" v-pre>
npm install --save-dev @babel/core @babel/plugin-proposal-class-properties @babel/plugin-proposal-decorators @babel/plugin-proposal-export-default-from @babel/plugin-proposal-export-namespace-from @babel/plugin-proposal-object-rest-spread @babel/plugin-syntax-dynamic-import @babel/plugin-syntax-export-namespace-from @babel/plugin-syntax-object-rest-spread @babel/plugin-transform-spread @babel/preset-env babel-loader webpack webpack-cli webpack-merge
      </code>
    </pre>
    <h3>webpack 部分配置参考</h3>
    <pre v-highlight>
      <code class="js" v-pre>
'use strict';

const webpack = require('webpack');

let externals = _externals();

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
    externals: externals,
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
                loader: 'babel',
                query: {
                    presets: ['es2015','stage-0']
                },
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        
    ]
};

function _externals() {
    let manifest = require('./package.json');
    let dependencies = manifest.dependencies;
    let externals = {};
    for (let p in dependencies) {
        externals[p] = 'commonjs ' + p;
    }
    return externals;
}

      </code>
    </pre>
  </div>
</template>
<script>
export default {};
</script>
