import "normalize.css";
import Vue from 'vue';
import Application from 'bitorjs';
import highlight from './src/directives/highlight';
import main from './src/view';
Vue.config.productionTip = false
Vue.use(highlight)

const client = (app) => {
  app.watch(require.context('./config', false, /\.js$/))
  app.watch(require.context('./src', true, /^((?!\/view\/).)+\.(vue|js)$/));
}

new Application({}, main).start(client)