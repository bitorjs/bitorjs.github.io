<template>
  <div class="content-bitorjs">
    <h1>插件配置</h1>
    <pre v-highlight>
      <code class="js">
      // config/plugin.env.js
      import axios from '../plugins/axios';
      import guide from '../plugins/guide';

      export default [
        {
          name: 'axios',
          module: axios,
          enable: true,
          export: '$axios',
          baseUrl: '/',
          timeout: 1000
        },{
          name: 'guide',
          module: guide,
          enable: true,
        }
      ]
      </code>
    </pre>
    <h2>配置说明</h2>
    <h3>必要字段</h3>
    <ul>
      <li>name 插件名,其它地方暂无用到, 可自行处理</li>
      <li>module 插件实例,用于插件注入</li>
      <li>enable 启动开关, enable值为false, 插件不会注入</li>
    </ul>
    <h3>自定义字段</h3>
    <p>如上, 所有字段都会作为 options 传入对应的插件中, 插件可以获取这里的配置的参数,可以自行添加其它参数</p>
    <ul>
      <li>export</li>
      <li>baseUrl</li>
      <li>timeout</li>
    </ul>

    <h3>插件中取options方法</h3>
    <pre v-highlight>
      <code class="js">
        export default (app, options)=>{
          // options.name
          // options.module
          // options.enable
          // options.export
          // options.baseUrl
          // options.timeout
        }
      </code>
    </pre>
  </div>
</template>
<script>
export default {};
</script>

