<template>
  <div class="content-bitorjs">
    <h1>babel 相关配置</h1>
    <p>因为使用 bitorjs 时要使用 注解的功能, 所以要安装 decorators 相关依赖</p>
    <pre v-highlight>
      <code class="js">
      // babel 6
      $ npm install -D babel-plugin-transform-decorators-legacy

      and add the following line to your .babelrc file:
      {
        "plugins": ["transform-decorators-legacy"]
      }

      // babel 7
      $ npm install -D @babel/plugin-proposal-decorators

      and add the following line to your .babelrc file:
      {
        "plugins": ["@babel/plugin-proposal-decorators"]
      }
      </code>
    </pre>

    <h3>参考配置</h3>
    <pre v-highlight>
      <code class="js">
module.exports = {
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "node": "current",
        },
        "modules": 'commonjs',
        debug: true,      
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

    <h3>其它依赖</h3>
    <p></p>
    <ol>
      <li>@babel/core</li>
      <li>@babel/plugin-proposal-class-properties</li>
      <li>@babel/plugin-proposal-decorators</li>
      <li>@babel/plugin-proposal-export-default-from</li>
      <li>@babel/plugin-proposal-export-namespace-from</li>
      <li>@babel/plugin-proposal-object-rest-spread</li>
      <li>@babel/plugin-syntax-dynamic-import</li>
      <li>@babel/plugin-syntax-export-namespace-from</li>
      <li>@babel/plugin-syntax-object-rest-spread</li>
      <li>@babel/plugin-transform-spread</li>
      <li>@babel/preset-env</li>
      <li>babel-loader</li>
    </ol>
  </div>
</template>
<script>
export default {};
</script>
