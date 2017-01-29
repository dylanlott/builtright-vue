import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import {router} from './router/index.js'
import store from './state/index.js'
import user from './api/user'

Vue.use(Vuetify)

/**
 * Force Authorization
 */
router.beforeEach((to, from, next) => {
  (to.meta.auth && !user.checkAuth) ? next({path: '/login'}) : next(true)
})

/**
 * Invoke new Vue app, pass through Router and Store
 */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
