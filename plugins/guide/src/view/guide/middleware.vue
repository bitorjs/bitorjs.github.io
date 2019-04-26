<template>
  <div class="content-bitorjs">
    <h1>中间件</h1>
    <pre v-highlight>
      <code class="js">
      // login.js
      export default async (ctx, next) => {
        // ...
        return await next();
      }
      </code>
    </pre>
  </div>
</template>
<script>
export default {};
</script>

