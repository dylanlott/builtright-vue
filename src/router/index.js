import Vue from 'vue'
import VueRouter from 'vue-router'

import landing from '../views/Landing.vue'
import login from '../views/Login.vue'
import signup from '../views/SignUp.vue'
import dashboard from '../views/Dashboard.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: landing, meta: {auth: false}},
    { path: '/login', component: login, meta: {auth: false}},
    { path: '/signup', component: signup, meta: {auth: false}},
    { path: '/dashboard', component: dashboard, meta: {auth: true}}
  ]
})
