import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import {router} from './router/index.js'
import state from './state/index.js'

Vue.use(Vuetify)

new Vue({
  el: '#app',
  router,
  state,
  render: h => h(App)
})
