<template>
  <div class="content-bitorjs">
    <h1>公共组件</h1>
    <pre v-highlight>
      <code class="html" v-html="html">
        
      </code>
    </pre>
    <p>暂时供 Vue 开发使用,无特殊处理</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      html: `

      `
    };
  }
};
</script>

