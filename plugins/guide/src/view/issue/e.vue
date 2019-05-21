<template>
  <div class="content-bitorjs">
    <h1>nodejs 使用 bitorjs</h1>
    <pre v-highlight>
      <code class="js" v-pre>
npm install -S bitorjs
npm install -S koa
      </code>
    </pre>
    <ol>
      <li>
        <p>搭建 nodejs 的 webpack 环境</p>
      </li>
      <li>
        <p>入口文件 index.js</p>
      </li>
      <pre v-highlight>
        <code class="js" v-pre>
import Application from 'bitorjs';
import App from './App'

new Application().start(app => {
  // app.on('error', (err, ctx) => {
  //   console.log('.....error...', err)
  // });

  // app.use(function (ctx, next) {
  //  return next().catch((err) => {
  //    if (401 == err.status) {
  //      ctx.status = 401;
  //      ctx.body = err;
  //    } else {
  //      throw err;
  //    }
  //  });
  // }); 
  // 添加 koa 相关中间件
  app.watch(require.context('../config', false, /\.js$/))
  app.watch(require.context('.', true, /^((?!\/view\/).)+\.(vue|js)$/));
},1030)//  端口号,设置为1030
        </code>
      </pre>
      <p>程序中可以使用 koa 中各种中间件</p>
      <li>
        <p>src/router/index.js</p>
      </li>
      <pre v-highlight>
        <code class="bash">
import {
  Get,
  Controller
} from 'bitorjs'

@Controller('/')
export default class {
  @Get('/')
  async index(ctx){
    return ctx.body = {}
  }
}
        </code>
      </pre>
    </ol>
  </div>
</template>
<script>
export default {};
</script>
