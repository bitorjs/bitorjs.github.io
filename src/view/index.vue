<template>
  <div class="vue-app">
    <div class="app-container">
      <div class="app-header">
        <div class="app-logo"></div>
        <div class="app-header-menu"></div>
        <div class="app-header-right">
          <span
            class="menu-item"
            @click="menu.click"
            v-for="menu in ctx.$store.state.main.topMenu"
            :key="menu.name"
          >{{menu.name}}</span>
        </div>
      </div>
      <div class="app-body">
        <div class="app-body-aside" :class="{'full': full}">
          <div class="app-body-aside-menu">
            <div class="menu" v-for="menu in ctx.$store.state.main.sideMenu" :key="menu.name">
              <h3 class="menu-title">{{menu.name}}</h3>
              <div
                class="menu-item"
                v-for="child in menu.children"
                :key="child.name"
                :class="{active: ctx.$store.state.main.currentUrl==child.url}"
                @click="()=>child.click(child.url)"
              >{{child.name}}</div>
            </div>
          </div>
        </div>
        <div class="app-body-main">
          <div class="app-body-main-header"></div>
          <div class="app-body-main-content">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      full: true,
      test: []
    };
  },
  mounted() {
    console.log(this.ctx.$store.state.main);
  },
  methods: {
    toggle_aside() {
      this.full = !this.full;
    }
  }
};
</script>
<style lang="less">
body,
html {
  margin: 0;
  height: 100%;
  font-family: Arial, Microsoft YaHei, "\9ED1\4F53", "\5B8B\4F53", sans-serif;
}

body .vue-app a,
html .vue-app a {
  text-decoration: none;
}

.ant-menu {
  background: transparent;
  border: none;
  .ant-menu-root {
    background: transparent;
    border: none;
  }

  .ant-menu-sub {
    background: transparent;
    border: none;
  }

  .ant-menu-item-selected {
    background-color: transparent;
    // &::after {
    //   border: none;
    // }rgba(230, 247, 255, 0.6);
  }
}
</style>
<style lang="less">
.hljs {
  border: 0;
  font-size: 12px;
  display: block;
  padding: 1px;
  margin: 0;
  width: 100%;
  font-weight: 200;
  color: #abb2bf;
  white-space: pre-wrap;
}
.hljs ol {
  list-style: decimal;
  margin: 0px 0px 0 40px !important;
  padding: 0px;
}
.hljs ol li {
  list-style: decimal-leading-zero;
  border-left: 1px solid #464545 !important;
  padding: 5px !important;
  margin: 0 !important;
  white-space: pre;
}

.content-bitorjs {
  position: relative;
  padding: 2.2em 0;
  width: 80%;
  height: 100%;
  min-width: 600px;
  margin: 0 auto;
  padding-left: 50px;
  overflow: auto;

  h1 {
    font-weight: 600;
    color: #2c3e50;
  }

  h2 {
    margin: 45px 0 0.8em;
    padding-bottom: 0.7em;
    border-bottom: 1px solid #ddd;
  }

  .api > a:first-of-type > h2 {
    margin-top: 0;
    padding-top: 0;
  }
  .api ul {
    padding-left: 1.25em;
    line-height: 1.4em;
  }
  .api ul ul,
  .api ul p:not(.tip) {
    padding-bottom: 0;
    margin: 1.2em 0;
  }
  a.button {
    font-size: 0.9em;
    color: #fff;
    margin: 0.2em 0;
    width: 200px;
    text-align: center;
    padding: 12px 24px;
    display: inline-block;
    vertical-align: middle;
  }
  img {
    max-width: 100%;
  }
  span.light {
    color: #7f8c8d;
  }
  span.info {
    font-size: 0.85em;
    display: inline-block;
    vertical-align: middle;
    width: 280px;
    margin-left: 20px;
  }
  h1 {
    margin: 0 0 1em;
  }
  h2,
  h3 {
    pointer-events: none;
  }
  h2 a,
  h3 a,
  h2 button,
  h3 button {
    pointer-events: auto;
    color: #2c3e50;
  }
  h2:before,
  h3:before {
    content: "";
    display: block;
    margin-top: -91px;
    height: 91px;
    visibility: hidden;
  }
  h2 {
    margin: 45px 0 0.8em;
    padding-bottom: 0.7em;
    border-bottom: 1px solid #ddd;
  }
  h3 {
    margin: 52px 0 1.2em;
    line-height: 1.2;
    position: relative;
  }
  h3 > a:before {
    content: "#";
    color: #42b983;
    position: absolute;
    left: -0.7em;
    margin-top: -0.05em;
    padding-right: 0.5em;
    font-size: 1.2em;
    line-height: 1;
    font-weight: bold;
  }
  figure {
    margin: 1.2em 0;
  }
  p,
  ul,
  ol {
    line-height: 1.6em;
    margin: 1.2em 0 -1.2em;
    padding-bottom: 1.2em;
    position: relative;
    z-index: 1;
  }
  ul,
  ol {
    padding-left: 1.5em;
    position: inherit;
  }
  ul ul,
  ol ul,
  ul ol,
  ol ol {
    margin: 0;
  }
  a {
    color: #42b983;
    font-weight: 600;
  }
  blockquote {
    margin: 2em 0;
    padding-left: 20px;
    border-left: 4px solid #42b983;
  }
  blockquote p {
    font-weight: 600;
    margin-left: 0;
    margin-bottom: 0;
    padding-bottom: 0;
  }
  iframe {
    margin: 1em 0;
  }
  > table {
    border-spacing: 0;
    border-collapse: collapse;
    margin: 1.2em auto;
    padding: 0;
    display: block;
    overflow-x: auto;
  }
  > table td,
  > table th {
    line-height: 1.5em;
    padding: 0.4em 0.8em;
    border: none;
    border: 1px solid #ddd;
  }
  > table th {
    font-weight: bold;
    text-align: left;
  }
  > table th,
  > table tr:nth-child(2n) {
    background-color: #f8f8f8;
  }
  > table th code,
  > table tr:nth-child(2n) code {
    background-color: #efefef;
  }
  p.tip,
  p.success {
    padding: 12px 24px 12px 30px;
    margin: 2em 0;
    border-left-width: 4px;
    border-left-style: solid;
    background-color: #f8f8f8;
    position: relative;
    border-bottom-right-radius: 2px;
    border-top-right-radius: 2px;
  }
  p.tip:before,
  p.success:before {
    position: absolute;
    top: 14px;
    left: -12px;
    color: #fff;
    width: 20px;
    height: 20px;
    border-radius: 100%;
    text-align: center;
    line-height: 20px;
    font-weight: bold;
    font-family: "Dosis", "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
    font-size: 14px;
  }
  p.tip code,
  p.success code {
    background-color: #efefef;
  }
  p.tip em,
  p.success em {
    color: #34495e;
  }
  p.tip {
    border-left-color: #f66;
  }
  p.tip:before {
    content: "!";
    background-color: #f66;
  }
  p.success {
    border-left-color: #42b983;
  }
  p.success:before {
    content: "\f00c";
    font-family: FontAwesome;
    background-color: #42b983;
  }
}
</style>


<style lang="less" scoped>
.position_full() {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.vue-app {
  .position_full();
  background-color: #f8f8f9;
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: 50%;
  overflow: hidden;
  position: relative;
  .app-container {
    .position_full();
    display: flex;
    flex-direction: column;

    .app-header {
      height: 60px;
      display: flex;
      .app-logo {
        width: 200px;
        background: url(/assets/logo.png) no-repeat center center;
        background-size: auto 100%;
      }

      .app-toggle-aside-btn {
        display: flex;
        flex-shrink: 0;
        flex-grow: 0;
        align-items: center;
        cursor: pointer;
        float: left;
        height: 60px;
        width: 60px;
      }

      &-menu {
        display: flex;
        flex-shrink: 1;
        flex-grow: 1;
        align-items: center;
        overflow-y: hidden;
        overflow-x: auto;
        float: right;

        span {
          display: inline-block;
          width: 100%;
          height: 100%;
        }
      }

      &-right {
        flex-grow: 0;
        float: right;
        height: 100%;
        display: flex;
        align-items: center;
        padding: 0 10px;
        .menu-item {
          display: inline-block;
          height: 100%;
          line-height: 48px;
          padding: 0 10px;
          cursor: pointer;
        }
      }
    }

    .app-body {
      display: flex;
      flex-grow: 1;
      flex-shrink: 1;

      &-aside {
        width: 65px;
        opacity: 1;
        flex-shrink: 0;
        flex-grow: 0;
        transition: width 0.3s;
        position: relative;

        &-menu {
          .position_full();
          overflow: auto;

          .menu {
            margin-top: 10px;
            width: 100%;
            padding: 10px 10px 10px 30px;
            .menu-item {
              margin-top: 10px;
              color: #7f8c8d;
              cursor: pointer;
              &.active {
                font-weight: 600;
                color: #42b983;
              }
            }
          }

          .ant-menu-item-selected {
            background-color: rgba(230, 247, 255, 0.6);
            // &::after {
            //   border: none;
            // }rgba(230, 247, 255, 0.6);
          }

          ul ul li {
            padding-left: 24px !important;
          }
        }
        &.full {
          width: 200px; //65px;
        }
      }

      &-main {
        padding: 0;
        position: relative;
        overflow: hidden;
        display: flex;
        flex-shrink: 1;
        flex-grow: 1;

        &-content {
          .position_full();
          overflow: hidden;
        }
      }
    }
  }
}
</style>



