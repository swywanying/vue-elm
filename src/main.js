// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import seller from '@/components/seller/seller'
import router from '@/router'

// var css = require('./assets/main.scss')
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { seller },
  template: '<seller/>'
})
