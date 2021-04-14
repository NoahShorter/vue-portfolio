import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import SvgFiller from 'vue-svg-filler'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

Vue.config.productionTip = false

Vue.component('svg-filler', SvgFiller)

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
