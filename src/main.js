import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import store from './store/store.js'
import 'vue-awesome/icons'
import YmapPlugin from 'vue-yandex-maps'
import Icon from 'vue-awesome/components/Icon'
Vue.component('icon', Icon)
Vue.use(YmapPlugin)

var SocialSharing = require('vue-social-sharing');

Vue.use(SocialSharing);

Vue.use(BootstrapVue);
Vue.config.productionTip = false

const v = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  store: store,
  components: { App }
})

//get all hacks before render
v.$store.dispatch('getHacks')
