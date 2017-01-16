import Vue from 'vue'
import VueRouter from 'vue-router'

import landing from '../views/Landing.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: landing }
  ]
})
