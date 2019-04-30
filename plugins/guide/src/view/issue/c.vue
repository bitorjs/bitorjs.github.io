<template>
  <div class="content-bitorjs">
    <h1>vue中使用 bitorjs</h1>
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
    <ol>
      <li>
        <p>config/index.js 改为 config/index.env.js</p>
      </li>
      <li>
        <p>src/main.js</p>
      </li>
      <pre v-highlight>
        <code class="js" v-pre>
        // The Vue build version to load with the `import` command
        // (runtime-only or standalone) has been set in webpack.base.conf with an alias.
        import Vue from 'vue'
        import Application from 'bitorjs';
        import App from './App'

        Vue.config.productionTip = false

        new Application({}, App, "#app").start(app => {
          app.watch(require.context('../config', false, /\.js$/))
          app.watch(require.context('.', true, /^((?!\/view\/).)+\.(vue|js)$/));
        })
        </code>
      </pre>
      <li>
        <p>src/router/index.js</p>
      </li>
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
        </code>
      </pre>
    </ol>

    <p>到此, 改造完毕, 接下来,你就可以 开启 bitorjs 之旅</p>
  </div>
</template>
<script>
export default {};
</script>
