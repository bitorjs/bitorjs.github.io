<template>
  <div class="content-bitorjs">
    <h1>数据存储访问</h1>
    <pre v-highlight>
      <code class="js">
      // store/main.js
      export default {
        state:{
          test: 1
        }
      }
      </code>
    </pre>
    <p>
      <strong style="color: red;">注意</strong> 文件名即为模块名,不可重复, 整个项目中唯一
    </p>

    <div class="api">
      <ul>
        <li>$store 挂载到 ctx 上的</li>
        <li>ctx.$store.state.模块名.key</li>
      </ul>
    </div>

    <h2>访问方法</h2>
    <pre v-highlight>
      <code class="js">
      let test = this.ctx.$store.state.main.test;
      </code>
    </pre>
    <h2>存储方法</h2>
    <pre v-highlight>
      <code class="js">
      this.ctx.$store.state.main.test = 2;
      </code>
    </pre>
  </div>
</template>
<script>
export default {};
</script>

