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
    localStorage.setItem('token', token)
  },
  [types.SET_USER_ID] (state, id) {
    localStorage.setItem('user_id', id)
  },
  [types.LOGIN_USER] (state, user) {
    state.user.email = user.email
    state.token = user.access_token
    state.user.id = user.user_id
  },
  [types.LOGOUT_USER] (state) {
    localStorage.removeItem('user_id')
    localStorage.removeItem('token')
    state.token = null
    state.user = {}
  },
  //takes a boolean
  [types.SET_ADMIN] (state, admin) {
    localStorage.setItem('admin', admin)
    state.admin = admin
  },
  [types.SIGNUP_USER_REQUEST] (state, user) {
    state.loading = true
    state.success = false
  },
  [types.SIGNUP_USER_SUCCESS] (state, user) {
    state.loading = false
    state.success = true
    state.user = user
  }
}

const actions = {
  loginUser ({commit, state}, user) {
    return api.login(user)
      .then((user) => {
        commit(types.LOGIN_USER, user)
        commit(types.SET_USER_ID, user.user_id)
        commit(types.SET_TOKEN, user.access_token)
        router.push('/dashboard')
      })
      .catch((err) => e.error(err))
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
