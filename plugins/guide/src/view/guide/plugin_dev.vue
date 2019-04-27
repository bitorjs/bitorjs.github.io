<template>
  <div class="content-bitorjs">
    <h1>插件开发</h1>
    <pre v-highlight>
      <code class="js">
      // index.js
      
      export default (app, options) => {
        // app 应用实例
        // options 从主项目中传入的配置项目
      }
      </code>
    </pre>
    <p>插件中不需要实例化应用, 其它写法上与主项目写法一致</p>
    <h2>开发步骤</h2>
    <p>为了开发插件方便, 在主项目下创建一个目录, 如 plugins</p>
    <p>创建插件如 xxx</p>
    <ul>
      <li>进入目录 plugins/xxx/</li>
      <li>touch index.js 创建插件入口文件</li>
      <li>npm init 创建 package.json</li>
      <li>在入口文件 index.js 中添加上述代码</li>
      <pre v-highlight>
        <code class="js">
        // index.js
        export default (app, options) => {}
        </code>
      </pre>
      <li>如需进行目录监听,可添加监听代码</li>
      <pre v-highlight>
        <code class="js">
        // index.js
        export default (app, options) => {
          // 监听参数可自行修改
          app.watch(require.context('./src', true, /^((?!\/view\/).)+\.(vue|js)$/));
        }
        </code>
      </pre>
    </ul>
  </div>
</template>
<script>
export default {};
</script>

