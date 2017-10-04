// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import store from './store/store.js'


Vue.use(BootstrapVue);
Vue.config.productionTip = false

const v = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  store: store,
  components: { App }
})

v.$store.dispatch('getHacks')

//v.$store.dispatch('getFirstHack')