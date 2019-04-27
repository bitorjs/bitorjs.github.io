<template>
  <div class="content-bitorjs">
    <h1>安装</h1>
    <p></p>
    <pre v-highlight>
      <code class="bash">
      $ npm install -S bitorjs
      </code>
    </pre>
    <p>在 VueJS 和 NodeJS 项目开发时都可以以这种方式安装</p>

    <h2>如何在 vue 中使用</h2>
    <h3>创建 项目</h3>
    <p>使用 vue 官方脚手架 vue-cli</p>
    <pre v-highlight>
      <code class="bash">
      $ vue init webpack xxx
      </code>
    </pre>
    <h3>安装依赖</h3>
    <pre v-highlight>
      <code class="bash">
      $ npm install -S bitorjs
      $ npm install -S vuex vuex-persist
      $ npm install -D babel-plugin-transform-decorators-legacy


      and add the following line to your .babelrc file:
      {
        "plugins": ["transform-decorators-legacy"]
      }
      </code>
    </pre>
    <h3>修改</h3>
    <p>src/main.js</p>
    <pre v-highlight>
      <code class="js">
      // The Vue build version to load with the `import` command
      // (runtime-only or standalone) has been set in webpack.base.conf with an alias.
      import Vue from 'vue'
      import Application from 'bitorjs';
      import App from './App'
      import router from './router'

      Vue.config.productionTip = false

      /* eslint-disable no-new */
      // new Vue({
      //   el: '#app',
      //   router,
      //   components: { App },
      //   template: '<App/>'
      // })
      new Application({}, App, "#app").start(app => {
        app.watch(require.context('../config', false, /\.js$/))
        app.watch(require.context('.', true, /^((?!\/view\/).)+\.(vue|js)$/));
      })
      </code>
    </pre>

    <p>router/index.js</p>
    <pre v-highlight>
      <code class="bash">
      import {
        Get,
        Controller
      } from 'bitorjs'

      import HelloWorld from '@/components/HelloWorld'

      @Controller('/')
      export default class {
        @Get('/')
        async index(ctx){
          ctx.render(HelloWorld)
        }
      }

      // import Vue from 'vue'
      // import Router from 'vue-router'


      // Vue.use(Router)

      // export default new Router({
      //   routes: [
      //     {
      //       path: '/',
      //       name: 'HelloWorld',
      //       component: HelloWorld
      //     }
      //   ]
      // })


    </code>
    </pre>

    <p>到此, 改造完毕, 接下来,你就可以 开启 bitorjs 之旅</p>
  </div>
</template>
<script>
export default {
  name: ""
};
</script>
