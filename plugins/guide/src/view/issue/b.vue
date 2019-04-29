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
  </div>
</template>
<script>
export default {};
</script>
