<template>
  <div class="content-bitorjs">
    <h1>安装</h1>
    <p></p>
    <pre v-highlight>
      <code class="bash">
      $ npm install -S bitorjs
      </code>
    </pre>
    <p>在 VueJS 和 NodeJS 项目开发时都可以以这种方式安装</p>

    <h2>
      配置参考 -
      <a target="_blank" href="https://github.com/bitorjs/sass-site">[案例]</a>
    </h2>
    <h3>开发依赖</h3>
    <pre v-highlight>
      <code class="json">
      {
        "@babel/core": "^7.4.0",
        "@babel/plugin-proposal-class-properties": "^7.4.0",
        "@babel/plugin-proposal-decorators": "^7.4.0",
        "@babel/plugin-proposal-export-default-from": "^7.2.0",
        "@babel/plugin-proposal-export-namespace-from": "^7.2.0",
        "@babel/plugin-proposal-object-rest-spread": "^7.4.0",
        "@babel/plugin-syntax-dynamic-import": "^7.2.0",
        "@babel/plugin-syntax-export-namespace-from": "^7.2.0",
        "@babel/plugin-syntax-object-rest-spread": "^7.2.0",
        "@babel/plugin-transform-spread": "^7.2.2",
        "@babel/preset-env": "^7.4.2",
        "babel-loader": "^8.0.5",
        "webpack": "^4.29.6",
        "webpack-cli": "^3.3.0",
        "webpack-dev-server": "^3.2.1", // for vue
        "webpack-merge": "^4.2.1",
        "webpack-shell-plugin": "^0.5.0" // for node
      }
      </code>
    </pre>

    <h3>babelrc</h3>
    <pre v-highlight>
      <code class="js">
      module.exports = {
        "presets": [
          [
            "@babel/preset-env",
            {
              "targets": {
                // for node
                "node": "current",
                // for vue
                "browsers": [
                  'last 2 Chrome versions', 'last 2 Safari versions', 'last 2 Firefox versions',
                ]
              },

              "modules": 'commonjs',
              "debug": true,
              "useBuiltIns": false
            }
          ]
        ],
        "plugins": [
          [
            "@babel/plugin-proposal-decorators",
            {
              "legacy": true
            }
          ],
          "@babel/plugin-proposal-export-default-from",
          "@babel/plugin-proposal-export-namespace-from",
          "@babel/plugin-syntax-export-namespace-from",
          "@babel/plugin-syntax-dynamic-import",
          "@babel/plugin-transform-spread",
          "@babel/plugin-syntax-object-rest-spread",
          ["@babel/plugin-proposal-object-rest-spread", {
            "loose": true,
            "useBuiltIns": true
          }],
          [
            "@babel/plugin-proposal-class-properties",
            {
              "loose": true
            }
          ]
        ]
      }
      </code>
    </pre>
    <h3>webpack 部分配置 for node</h3>
    <pre v-highlight>
      <code class="js">
        const nodeModules = {
          // "sequelize": "sequelize"
        };

        fs.readdirSync('node_modules')
        .filter((catalogue) => {
          return ['.bin', ...Object.keys(pkg['dependencies'])].indexOf(catalogue) === -1;
        })
        .forEach((mod) => {
          nodeModules[mod] = 'commonjs ' + mod;
        });

        // ...
        
        {
          externals: nodeModules,
          target: 'node',
          node: {
            console: true,
            global: true,
            process: true,
            Buffer: true,
            filename: true,
            dirname: true,
            setImmediate: true,
            __filename: false,
            __dirname: false
          },
        }

        // ... 

        // webpack plugin
        new WebpackShellPlugin({
          onBuildEnd: [
            `npm run dev`
          ]
        })
        
      </code>
    </pre>
  </div>
</template>
<script>
export default {
  name: ""
};
</script>
