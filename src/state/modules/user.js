import * as types from '../mutation-types'
import api from '../../api/user'
import { router } from '../../router/index'
const localStorage = window.localStorage

const state = {
  token: localStorage.getItem('token') || '',
  user_id: localStorage.getItem('user_id') || '',
  user: {},
  admin: false
}

const mutations = {
  [types.SET_TOKEN] (state, token) {
    console.log('SET TOKEN MUTATION:', token);
    localStorage.setItem('token', token)
  },
  [types.SET_USER_ID] (state, id) {
    console.log('USER ID SET TO: ', id);
    localStorage.setItem('user_id', id)
  },
  [types.LOGIN_USER] (state, user) {
    state.user.email = user.email
    state.token = user.access_token
    state.user.id = user.user_id
    router.push('/dashboard')
  },
  [types.LOGOUT_USER] (state) {
    console.log('LOGGING OUT')
    localStorage.removeItem('user_id')
    localStorage.removeItem('token')
    state.token = null
    state.user = {}
  },
  //takes a boolean
  [types.SET_ADMIN] (state, admin) {
    console.log('SETTING ADMIN: ', admin)
    localStorage.setItem('admin', admin)
    state.admin = admin
  }
}

const actions = {
  loginUser ({commit, state}, user) {
    console.log('LOGGING IN USER', user)
    return api.login(user)
      .then((user) => {
        commit(types.LOGIN_USER, user)
        commit(types.SET_USER_ID, user.user_id)
        commit(types.SET_TOKEN, user.access_token)
      })
      .catch((err) => console.error(err))
  },
  getAuthToken ({commit, state}) {
    return localStorage.getItem('token')
  },
  logoutUser ({commit, state}) {
    commit(types.LOGOUT_USER)
    router.push('/')
  }
}

export default {
  state,
  mutations,
  actions
}
