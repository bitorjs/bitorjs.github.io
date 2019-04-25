<template>
  <div class="content-bitorjs">
    <h1>公共组件</h1>
    <pre v-highlight>
      <code class="html">
        // component/xxx.vue
        &lt;template&gt;
          &lt;div&gt;
          &lt;/div&gt;
        &lt;/template&gt;
        &lt;script&gt;
        export default {
          name: 'xxx';
        };
        &lt;/script&gt;
      </code>
    </pre>
    <h3>公共组件的取名来自, 组件 name 字段, 如若没有 name 字段则取 文件名</h3>
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

