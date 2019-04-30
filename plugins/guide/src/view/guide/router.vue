<template>
  <div class="content-bitorjs">
    <h1>路由|控制层</h1>
    <pre v-highlight>
      <code class="js">
      // controller/xxx.js 或 router/xxx.js
      import {
        Get,
        Post,
        Controller,
        Middleware
      } from 'bitorjs';
      import Menu from '../menu/guide';
      import Index from '../view/index';

      @Controller('/guide')
      @Middleware(Menu)
      export default class {
        @Get('/')
        async index(ctx) {
          ctx.render(Index)
        }

        @Get('/:name')
        async install(ctx) {
          import(`../view/${ctx.params.name}`).then(res => {
            ctx.render(res.default)
          })
        }

        @Post('/users')
        async getUsers(ctx) {
          return ctx.$service.main.post('/users', ctx.body);
        }
      }
      </code>
    </pre>

    <h2>说明</h2>
    <h3>组件渲染</h3>
    <p>ctx.render(VueComponent[, props])</p>

    <h3>路由参数获取</h3>
    <p>ctx.params</p>
    <p>如上图 :name 值的获取 ctx.params.name</p>

    <h3>请求参数获取</h3>
    <p>post请求: ctx.request.body</p>
    <p>get请求: ctx.request.query</p>

    <h2>注解说明</h2>
    <h3>路由注解 - 参数 String</h3>
    <ul>
      <li>Controller(String)</li>
      <li>Post(String)</li>
      <li>Get(String)</li>
      <li>Delete(String)</li>
      <li>Put(String)</li>
    </ul>
    <h3>中间件注解</h3>
    <p>Middleware(String|Function)</p>

    <p>个人不喜欢 标签式 router 操作 及 json 式路由 配置, 自从发现如Java中注解式控制器后, 所以果断使用注解方式来完成路由功能</p>

    <h3></h3>
  </div>
</template>
<script>
export default {};
</script>

