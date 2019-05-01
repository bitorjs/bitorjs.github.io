<template>
  <div class="content-bitorjs">
    <h1>视图层</h1>
    <pre v-highlight>
      <code class="html">
        // view/xxx.vue
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

    <p>
      同vue, 组件渲染入口
      <strong>&lt;router-view&gt;&lt;/router-view&gt;</strong>
    </p>
    <p>暂时供 Vue 开发使用,全名无特殊要求</p>

    <h2>视图层 与 存储层 | 控制层 交互</h2>
    <ol>
      <li>取 store</li>
      <pre v-highlight>
        <code class="html">
        this.$store
        </code>
      </pre>
      <li>请求数据</li>
      <pre v-highlight>
        <code class="html">
        // 格式: this.$[方法名](url, data) : Promise
        this.$get
        this.$post
        this.$delete
        this.$put
        </code>
      </pre>
    </ol>
  </div>
</template>
<script>
export default {};
</script>

