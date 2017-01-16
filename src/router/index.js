import Vue from 'vue'
import VueRouter from 'vue-router'

import landing from '../views/Landing.vue'
import login from '../views/Login.vue'
import signup from '../views/SignUp.vue'
Vue.use(VueRouter)

export const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: landing },
    { path: '/login', component: login },
    { path: '/signup', component: signup }
  ]
})
