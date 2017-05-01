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
import buildDetails from '../views/BuildDetails.vue'
import addPart from '../views/AddPart.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {
            name: 'landing',
            path: '/',
            component: landing,
            meta: {
                auth: false
            }
        }, {
            name: 'login',
            path: '/login',
            component: login,
            meta: {
                auth: false
            }
        }, {
            name: 'signup',
            path: '/signup',
            component: signup,
            meta: {
                auth: false
            }
        }, {
            name: 'forgot',
            path: '/forgot',
            component: forgotpassword,
            meta: {
                auth: false
            }
        }, {
            name: 'profile',
            path: '/profile',
            component: profile,
            meta: {
                auth: true
            }
        }, {
            name: 'dashboard',
            path: '/dashboard',
            component: dashboard,
            meta: {
                auth: true
            }
        }, {
            path: '/builds',
            name: 'builds',
            component: builds,
            meta: {
                auth: true
            }
        }, {
            path: '/builds/create',
            name: 'addBuild',
            component: addbuild,
            meta: {
                auth: true
            }
        }, {
            path: '/builds/:id',
            name: 'buildDetails',
            component: buildDetails,
            meta: {
                auth: true
            }
        }, {
            path: '/builds/:id/add',
            name: 'addPart',
            component: addPart,
            meta: {
                auth: true
            }
        }, {
            path: '*',
            component: notfound
        }
    ]
})
