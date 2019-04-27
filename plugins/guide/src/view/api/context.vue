<template>
  <div class="content-bitorjs">
    <h1>context访问</h1>
    <pre v-highlight>
      <code class="js">
      context {
        app // 获取应用实例
        $store  // 获取上下文件
        $service // 服务
        $post // 虚拟请求方法
        $get // 虚拟请求方法
        $delete // 虚拟请求方法
        $put // 虚拟请求方法
        request  // 获取请求数据
        params  // 获取路由参数
      }
      </code>
    </pre>
    <h3>view</h3>
    <p>this.ctx</p>
    <h3>client入口</h3>
    <p>app=>{app.ctx}</p>
    <h3>middleware</h3>
    <p>(ctx,next)=>{}</p>
  </div>
</template>
<script>
export default {
  name: "cc"
};
</script>
