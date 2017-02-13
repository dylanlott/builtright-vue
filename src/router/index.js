import Vue from 'vue'
import VueRouter from 'vue-router'

import notfound from '../views/PageNotFound.vue'
import landing from '../views/Landing.vue'
import login from '../views/Login.vue'
import signup from '../views/SignUp.vue'
import dashboard from '../views/Dashboard.vue'
import builds from '../views/Builds.vue'
import addbuild from '../views/AddBuild.vue'
import profile from '../views/UserProfile.vue'
import forgotpassword from '../views/ForgotPassword.vue'
import buildDetails from '../views/buildDetails.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: landing, meta: {auth: false}},
    { path: '/login', component: login, meta: {auth: false}},
    { path: '/signup', component: signup, meta: {auth: false}},
    { path: '/forgot', component: forgotpassword, meta: {auth: false}},
    { path: '/profile', component: profile, meta: {auth: true}},
    { path: '/dashboard', component: dashboard, meta: {auth: true}},
    { path: '/builds', name: 'builds', component: builds, meta: {auth: true}},
    { path: '/builds/create',
      name: 'addBuild',
      component: addbuild,
      meta: {auth: true}},
    { path: '/builds/:id',
      name: 'buildDetails',
      component: buildDetails,
      meta: { auth: true}},
    { path: '*', component: notfound }
  ]
})
