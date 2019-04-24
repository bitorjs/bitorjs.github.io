<template>
  <div class="content-bitorjs">
    <h1>路由配置</h1>
    <pre v-highlight>
      <code class="js">
      // controller/xxx.js
      import {
        Get,
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
      }
      </code>
    </pre>
    <h2>注解说明</h2>
    <h3>路由注解 - 参数 String</h3>
    <ul>
      <li>Controller 类的注解</li>
      <li>Post 方法注解</li>
      <li>Get 方法注解</li>
    </ul>
    <h3>Middleware注解</h3>
    <ul>
      <li>参数有两种: String|Function</li>
    </ul>
  </div>
</template>
<script>
export default {};
</script>

