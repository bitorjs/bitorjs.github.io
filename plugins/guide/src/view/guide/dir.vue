<template>
  <div class="content-bitorjs">
    <h1>目录结构</h1>
    <!-- <img src="/assets/dir.png" alt srcset> -->
    <pre v-highlight>
      <code class="js">
      ├── README.md                   项目介绍
      ├── index.html                  入口页面
      ├── build                       wabpack构建脚本目录
      ├── config                      项目配置
      │  ├── dev.env.js               开发环境变量
      │  ├── index.env.js             项目配置文件
      │  ├── prod.env.js              生产环境变量
      │  └── plugin.env.js            测试环境变量
      ├── package.json                npm包配置文件，里面定义了项目的npm脚本，依赖包等信息
      ├── src                         源码目录  
      │  ├── main.js                  入口js文件 - 入口文件也可以放在外面
      │  ├── app.vue                  根组件 - 根组件也可以放在外面
      │  ├── components               公共组件目录
      │  │  └── title.vue
      │  ├── router                   前端路由
      │  │  └── index.js
      │  ├── filter                   过滤器
      │  │  └── index.js
      │  ├── middleware               中间件
      │  │  └── index.js
      │  ├── mock                     模拟数据
      │  │  └── index.js
      │  ├── service                  服务层
      │  │  └── index.js
      │  ├── store                    应用级数据（state）
      │  │  └── index.js
      │  └── views                    页面目录
      │    ├── hello.vue
      │    └── notfound.vue
      ├── plugins                     纯静态资源，不会被wabpack构建。
      │  ├── xxx                      某插件 xxx
      │  .   ├── index.env.js         插件入口文件
      │  .   ├── src
      │  .   └── package.json
      └── .babelrc                    babel 配置文件
      </code>
    </pre>
    <p>
      <strong style="color:red;">注意</strong> component|filter 暂时仅 VueJS 可用
    </p>
  </div>
</template>
<script>
export default {};
</script>

