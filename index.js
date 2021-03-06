import "normalize.css";
import Vue from 'vue';
import Application from 'bitorjs/vue';
import 'ant-design-vue/dist/antd.css'
// import Antd from 'ant-design-vue'
import highlight from './src/directives/highlight';
import main from './src/view';
Vue.config.productionTip = false
// Vue.use(Antd)
Vue.use(highlight)

const client = (app) => {
  // console.log(BITORENV)
  app.watch(require.context('./config', false, /\.js$/))
  app.watch(require.context('./src', true, /^((?!\/view\/).)+\.(vue|js)$/));
}

// setTimeout(() => {
new Application({
  // mode: 'h5'
}, main).start(client)
// }, 500)
