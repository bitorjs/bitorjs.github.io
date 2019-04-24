<template>
  <div class="container">
    <div class="logo"></div>
    <center class="top">
      <span class="btn" @click="guide">快速开始</span>
    </center>
    <div class="row">
      <div class="cell">
        <div class="title">易用</div>
        <p class="des">只需要安装 bitorjs</p>
      </div>
      <div class="cell">
        <div class="title">灵活</div>
        <p class="des">插件式开发,让模块更方便复用</p>
      </div>
      <div class="cell">
        <div class="title">高效</div>
        <p>前后端统一的开发规范,让开发更高效</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Common",
  data() {
    return {};
  },
  computed: {},
  methods: {
    guide() {
      this.ctx.app.redirect("/guide");
    }
  }
};
</script>

<style lang="less" scoped>
.container {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: auto;
  background: #f0f2f5
    url("https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg")
    no-repeat center 110px;
  background-size: 100%;

  .logo {
    background: url(/assets/logo.png) no-repeat, white;
    background-size: 400px auto;
    height: 40%;
    background-position: center bottom;
  }

  .top {
    margin-top: 50px;
    .btn {
      font-size: 1.2rem;
      color: #fff;
      background-color: #3eaf7c;
      padding: 0.8rem 1.6rem;
      border-radius: 4px;
    }
  }

  .row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    align-content: space-around;
    flex-wrap: wrap;
    padding: 50px;
    // margin-top: 100px;

    .cell {
      // background: white;
      // flex: 1;
      padding: 1rem;
      width: 28%;
      text-align: center;

      .title {
        color: #42b983;
        font-size: 1.5em;
        font-weight: 400;
        margin: 0;
        padding: 0.5em 0;
      }

      p {
        color: #7f8c8d;
      }
    }
  }
}
</style>
