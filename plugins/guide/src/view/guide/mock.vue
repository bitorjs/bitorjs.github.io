<template>
  <div class="content-bitorjs">
    <h1>数据源|Mock</h1>
    <pre v-highlight>
      <code class="js">
      // mock/login.js
      export default class {
        async register(params) {
          console.log(params)
          return this.ctx.$ajax.post('/reg-user', params)
        }

        async login(params) {
          console.log(params)
          return this.ctx.$ajax.post('/login', params)
        }
      } 
      </code>
    </pre>
    <p>
      <strong style="color: red;">注意</strong> 文件名即为模块名,不可重复, 整个项目中唯一
    </p>

    <h3>启用 Mock 层, 需要在配置文件中配置mock字段为true</h3>

    <p>Mock层主要用于在开发时模拟数据提供, 写法上同 serice</p>
    <h2>访问方式</h2>
    <h3>register</h3>
    <p>this.ctx.$service.login.register(params)</p>
    <h3>login</h3>
    <p>this.ctx.$service.login.login(params)</p>
  </div>
</template>
<script>
export default {};
</script>

