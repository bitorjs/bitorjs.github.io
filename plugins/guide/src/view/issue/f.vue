<template>
  <div class="content-bitorjs">
    <h1>vue 使用 bitorjs(2)</h1>
    <p>上一节我们讲到了 bitorjs 几个功能点, 这里做个小结</p>
    <ol>
      <li>让项目迅速集成开发插件的功能</li>
      <li>快速注解式路由</li>
      <li>使用中间件对数据进行拦截处理</li>
      <li>让你开发nodejs 项目与 前端项目习惯统一</li>
      <li>开发时数据模拟与真实请求快速无缝切换</li>
    </ol>
    <p>这节我们接着在 bitorjs 的应中 实现 登录过程中的数据请求,主要涉及以下几方便的内容</p>
    <ol>
      <li>如何添加页面路由</li>
      <li>如何请求数据</li>
      <li>如何添加api路由</li>
      <li>如何添加前端服务</li>
    </ol>

    <h3>如何添加页面路由</h3>
    <pre v-highlight>
      <code class="js" v-pre>
      // 页面路由必须 使用 @Get 注解, 写法上与 api 路由是一样的, 不同的是 页面路由 需要渲染 组件

      //引入 vue 组件
      import Indexpage from '../view/index.vue';
      // ...

      @Get('/url')
      async page1(ctx){
        // render 函数需要两个参数
        // 参数一: 组件
        // 参数二: 组件属性
        // 格式: cxt.render(vue-component, props)
        cxt.render(Indexpage, {
          name: 'test'
        })
      }
      </code>
    </pre>

    <h3>如何请求数据</h3>
    <pre v-highlight>
      <code class="js" v-pre>
      // view/index.vue 
      // 1. 选择合适的方法向 控制层请求数据
      // 常用的方法 $get, $post, $delete, $put

      // 2. 请求的返回值 为 Promise 对象

      methods:{
        login() {
          this.$post('/prefix/url', {
            name: 'bitor',
            passwd: 'xxxxxx'
          }).then(res=>{

          })
        }
      }
      
      </code>
    </pre>

    <h3>添加api路由</h3>
    <pre v-highlight>
      <code class="js" v-pre>
      // api 路由写法同上, 但 api 的请求方法很多,常用的 @Get, @Post, @Delete, @Put

      import {
        Post,
        Controller
      } from 'bitorjs'

      @Controller('/prefix')
      export default class {

        // ... 

        @Post('/url')
        async login(ctx){
          // ... 从前端服务层 取得数据
          // 1. 取得请求的参数, 
          //  Get 请求为 ctx.request.query
          //  其它为 ctx.request.body
          let params = ctx.request.body;

          // 2. 向服务层 请求数据
          let data  = await ctx.$service.login.loginUser(params);

          // 3. 返回结果数据
          cxt.body = {
            code: 0,
            data: data
            msg: '登录成功'
          }
        }

      }

      
      </code>
    </pre>

    <h3>如何添加前端服务</h3>
    <pre v-highlight>
      <code class="js" v-pre>
      // service/login.js 

      export default class {

        // .... 

        async loginUser(params) {
          // 1. 通过参数, 向后台 请求数据 
          //  axios

          // 返回最后结果
          return {
            name: 'bitor',
            age: '1.0.0'
          }
        }
      }
      </code>
    </pre>

    <p>至此, 一个完整的数据请求链条前端部分结束, 总的来说是, 视图层 向 控制层 发起请求, 控制层 向 服务层 发起请求, 最后 服务层 向 后台 请求数据 并返回给 控制层, 最后回到视图层</p>
  </div>
</template>
<script>
export default {};
</script>
