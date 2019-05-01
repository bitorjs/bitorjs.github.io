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
    <h2>使用方法</h2>
    <ol>
      <li>从上下文件中取得</li>
      <pre v-highlight>
        <code class="js">
       this.ctx.$filter.[name] // 从上下文中取得
        </code>
      </pre>
      <li>从app实例中取得</li>
      <pre v-highlight>
        <code class="js">
       this.$filter.[name] // 从app实例中取得
        </code>
      </pre>
      <li>从vue实例中取得</li>
      <pre v-highlight>
        <code class="js">
       this.$filter.[name] // 从Vue实例中取得
        </code>
      </pre>
    </ol>
  </div>
</template>
<script>
export default {};
</script>

