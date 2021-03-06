// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

let host = 'http://localhost:3000'
if (document.location.hostname !== 'localhost') {
  host = 'http://api-blog.haripermadi.com/'
}
Vue.prototype.$http = axios.create({
  baseURL: host
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
