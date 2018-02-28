// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';
import goods from 'components/good/good';
import ratings from 'components/rating/rating';
import seller from 'components/seller/seller';
import router from 'router';

import 'assets/style/index.styl';

Vue.use(VueRouter);
Vue.use(VueResource);
// var css = require('./assets/main.scss')
Vue.config.productionTip = false

let app = Vue.extend(App)

let router = new VueRouter({
  linkActiveClass: 'active'
});

route.map({
  '/goods': {

  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
})
