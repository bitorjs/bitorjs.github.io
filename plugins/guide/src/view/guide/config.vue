<template>
  <div class="content-bitorjs">
    <h1>项目配置</h1>
    <pre v-highlight>
      <code class="js">
      // config/index.env.js
      export default {
        title: 'xxx System',
        author: 'xxx',
        db:{

        },
        redis:{

        }
        //...
      }
      </code>
    </pre>
    <h2>配置说明</h2>
    <h3>配置文件</h3>
    <ul>
      <li>index.env.js 通用配置</li>
      <li>dev.env.js 开发环境启用</li>
      <li>plugin.env.js 插件配置</li>
      <li>prod.env.js 生产环境启用</li>
    </ul>
    <h3>如何取得配置</h3>
    <ul>
      <li>app.$config</li>
      <li>this.ctx.$config</li>
    </ul>
  </div>
</template>
<script>
export default {};
</script>

