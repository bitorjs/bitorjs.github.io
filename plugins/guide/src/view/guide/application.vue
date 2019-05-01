<template>
  <div class="content-bitorjs">
    <h1>应用实例</h1>
    <pre v-highlight>
      <code class="js">
      // index.js
      import Application from 'bitorjs';

      // 新建一个应用实例
      new Application([options, rootVue, htmlId]).start((app[, port=1030])=>{
        app.on('ready',async()=>{

        })
      })
      </code>
    </pre>
    <h2>VueJS 项目</h2>
    <pre v-highlight>
      <code class="js">
      // index.js
      import Application from 'bitorjs';
      import main from 'index.vue';

      let client = (app)=>{
        app.on('ready',async()=>{

        })
      }
      // 新建一个应用实例
      new Application({
        // mode: 'hash' 默认为 hash , [hash|history]
      }, main).start(client)
      </code>
    </pre>

    <h2>NodeJS 项目</h2>
    <pre v-highlight>
      <code class="js">
      // index.js
      import Application from 'bitorjs';
      let client = (app)=>{
        app.on('ready',async()=>{

        })
      }
      // 新建一个应用实例
      new Application().start(client, 8080)
      </code>
    </pre>
  </div>
</template>
<script>
export default {};
</script>

