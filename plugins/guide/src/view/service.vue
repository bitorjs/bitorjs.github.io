<template>
  <div class="content-bitorjs">
    <h1>服务层</h1>
    <pre v-highlight>
      <code class="js">
      // service/login.js
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
      <strong style="color:red;">注意</strong>服务层的代码放于
      <strong>service</strong> 目录下, 自动挂载于
      <strong>ctx.$service</strong>上, 键值是 文件名
    </p>
    <p>服务层主要用于放置 真实(浏览器Network调试面板中可以查看)的 请求 或 操作数据库部分的代码</p>
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

