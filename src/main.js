// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import reset from "reset-css";
import https from "./axios/https";

Vue.prototype.$https = https;

Vue.config.productionTip = false

Vue.use(reset);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
