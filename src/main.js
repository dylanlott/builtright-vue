import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import {router} from './router/index.js'
import store from './state/index.js'

Vue.use(Vuetify)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
