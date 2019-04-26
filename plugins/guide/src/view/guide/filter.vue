<template>
  <div class="content-bitorjs">
    <h1>过滤器</h1>
    <pre v-highlight>
      <code class="js">
      // capitalize.js
      export default function (value) {
        if (!value) return ''
        value = value.toString()
        return value.charAt(0).toUpperCase() + value.slice(1)
      }
      </code>
    </pre>
    <p>暂时供 Vue 开发使用,无特殊处理</p>
  </div>
</template>
<script>
export default {};
</script>

