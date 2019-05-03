<template>
  <div class="content-bitorjs">
    <h1>开发一个插件</h1>
    <p>案例: 创建一个 bitorjs 数据请求服务插件 axios</p>
    <!-- <h3>创建插件开发目录目录</h3> -->
    <!-- <p>本地创建插件开发目录,并添加一个 插件</p> -->
    <ol>
      <li>创建相关目录及文件</li>
      <pre v-highlight>
        <code class="bash" v-pre>
        # 创建目录 plugins: 放置开发中的插件
        $ mkdir plugins
        # 创建目录 axios: 要开发的插件
        $ cd plugins
        $ mkdir axios
        # 创建 package.json
        $ cd axios
        $ npm init

        $ npm install -S axios
        $ touch index.js 
        </code>
      </pre>
      <li>封装插件</li>
      <pre v-highlight>
        <code class="js" v-pre>
        // plugins/axios/js
        export default (app, option) => {
          const instance = axios.create({
            baseURL: option.baseURL || location.origin,
            // `timeout` 指定请求超时的毫秒数(0 表示无超时时间)
            // 如果请求话费了超过 `timeout` 的时间，请求将被中断
            timeout: option.timeout || 1000,
            // `withCredentials` 表示跨域请求时是否需要使用凭证
            withCredentials: option.withCredentials || false, // 默认的false, true:让ajax携带cookie
          });
          setHeaders(instance)
          requestIntercptor(instance);
          responceIntercptor(instance);
          // 默认导出名称为 $ajax, 并挂载到 app 和 ctx 上
          app[option.export || '$ajax'] = app.ctx[option.export || '$ajax'] = instance;
        }

        function setHeaders(axios) {
          axios.defaults.headers.post['Content-Type'] = 'application/json;utf-8';
        }
        // 添加请求拦截器
        function requestIntercptor(axios) {
          axios.interceptors.request.use(function (config) {
            return config;
          }, function (error) {
            return Promise.reject(error);
          });
        }
        // 添加响应拦截器
        function responceIntercptor(axios) {
          axios.interceptors.response.use(function (response) {
            return response.data;
          }, function (error) {
            return Promise.reject(error);
          });
        }
        </code>
      </pre>
      <li>配置插件</li>
      <p>在主项目中配置文件 plugin.env.js 中进行配置</p>
      <pre v-highlight>
        <code class="bash" v-pre>
          // config/plugin.env.js

          import axios from '../plugins/axios';

          export default [
          //...
            {
              name: 'axios',
              module: axios,
              enable: true,
              export: '$ajax',
              baseUrl: '/',
              timeout: 1000
            },
          //...
          ]
        </code>
      </pre>
    </ol>
    <p>axios 插件开发完成, 插件注入后, 可以通过以下方法进行</p>
    <pre v-highlight>
      <code class="js" v-pre>
      // ctx.$ajax.get
      // ctx.$ajax.post
      // ctx.$ajax.delete
      // ctx.$ajax.put
      </code>
    </pre>
  </div>
</template>
<script>
export default {};
</script>
