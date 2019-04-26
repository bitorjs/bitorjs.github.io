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
    <p>
      <strong>Vue中访问方式</strong> ctx.$store.state.模块名.key
    </p>
    <p>
      <strong>Node中访问方式</strong> ctx.$store.模块名.key
    </p>

    <h2>VueJS</h2>
    <pre v-highlight>
      <code class="js">
      // 使用vuex
      let test = this.ctx.$store.state.main.test; // 取值
      this.ctx.$store.state.main.test = 2; // 存值
      </code>
    </pre>
    <h2>NodeJS</h2>
    <pre v-highlight>
      <code class="js">
      // 使用redis , Nodejs中如启用存储, 要在配置文件中配置 redis.enable 字段 为 true
      let test = await this.ctx.$store.main.test; // 取值
      this.ctx.$store.main.test = 2; // 存值
      </code>
    </pre>
  </div>
</template>
<script>
export default {};
</script>

