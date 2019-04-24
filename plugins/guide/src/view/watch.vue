<template>
  <div class="content-bitorjs">
    <h1>目录监听</h1>
    <pre v-highlight>
      <code class="js">
      // index.js
      app.watch(require.context('./config', false, /\.js$/))
      app.watch(require.context('./src', true, /^((?!\/view\/).)+\.(vue|js)$/));
      </code>
    </pre>
    <h2>注意事项</h2>
    <p>目录监听是项目开发配置中最重要一步操作, 它主要负责监听指定目录和文件变更</p>
    <h3>require.context</h3>
    <p>
      <ul>
        <li>参数一: 监听的目录</li>
        <li>参数二: 是否启用子目录递归监听</li>
        <li>参数三: 正则对文件进行过滤</li>
      </ul>
    </p>
    <h3>常用过滤配置</h3>
    <p>
      <ul>
        <li>/\.js$/ 过虑所有js</li>
        <li>/^((?!\/view\/).)+\.(vue|js)$/) 屏蔽所有view下的文件</li>
      </ul>
    </p>
  </div>
</template>
<script>
export default {};
</script>

