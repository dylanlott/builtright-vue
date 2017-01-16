import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import {router} from './router/index.js'
import store from './state/index.js'
import user from './api/user'

Vue.use(Vuetify)

router.beforeEach((to, from, next) => {
  const auth = user.checkAuth()
  console.log('user auth: ', auth)
  console.log('meta auth: ', to.meta.auth);
  if(to.meta.auth && !auth){
    next({ path: '/login' })
  } else {
    next(true)
  }
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
