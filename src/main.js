import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import {router} from './router/index.js'
import store from './state/index.js'
import user from './api/user'
import BootstrapVue from 'bootstrap-vue'
import axios from 'axios'
import VueSweetAlert from 'vue-sweetalert'
import config from './config'

const storage = window.localStorage

// axios.interceptors.response.use(undefined, function (err) {
//   if (err.message === 'Request failed with status code 401') {
//     router.push({ name: 'login' })
//   }
// })

Vue.use(Vuetify)
Vue.use(BootstrapVue)
Vue.use(VueSweetAlert)

axios.defaults.baseURL = config.API_URL
axios.defaults.params = {
  token: storage.getItem('token')
}

console.log('token: ', storage.getItem('token'))

router.beforeEach((to, from, next) => {
  (to.meta.auth && !user.checkAuth() && user.checkAuth() !== undefined)
    ? next({path: '/login'})
    : next(true)
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
