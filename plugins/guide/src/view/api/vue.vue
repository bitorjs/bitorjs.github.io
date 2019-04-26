<template>
  <div class="content-bitorjs">
    <h1>vue中数据请求</h1>
    <pre v-highlight>
      <code class="js">
      vue {
        // $post 获取应用实例
        // $get  获取上下文件
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
