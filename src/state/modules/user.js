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
  [types.SET_ADMIN] (state, admin) {
    console.log('admin', admin);
    localStorage.setItem('admin', admin)
    state.admin = admin
  },
  [types.SET_ACCESS_LEVEL] (state, level) {
    console.log('level', level);
    state.access = level
    localStorage.setItem('access', level)
  },
  [types.SET_MONGO_ID] (state, id) {
    state._id = id
    localStorage.setItem('_id', id)
  },
  [types.SET_TOKEN] (state, token) {
    console.log('TOKEN', token);
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
  [types.SIGNUP_USER_REQUEST] (state, user) {
    state.loading = true
    state.success = false
  },
  [types.SIGNUP_USER_SUCCESS] (state, user) {
    state.loading = false
    state.success = true
    state.user = user
  },
  [types.RECEIVE_USER_INFO] (state) {
    state.loading = true
    state.success = false
  },
  [types.RECEIVE_USER_SUCCESS] (state, user) {
    state.loading = false
    state.success = true
    state.user = user
  },
  [types.RECEIVE_USER_FAILURE] (state, user) {
   state.loading = false
   state.success = false
 }
}

const actions = {
  loginUser ({commit, state}, user) {
    return api.login(user)
      .then((user) => {
        commit(types.LOGIN_USER, user)
        commit(types.SET_USER_ID, user.data.email)
        commit(types.SET_TOKEN, user.token)
        commit(types.SET_ACCESS_LEVEL, user.data.access)
        commit(types.SET_MONGO_ID, user.data._id)
        router.push('/dashboard')
      })
      .catch((err) => {
        console.log('err logging in user:', err);
        reject(err)
      })
  },
  getAuthToken ({commit, state}) {
    return localStorage.getItem('token')
  },
  logoutUser ({commit, state}) {
    commit(types.LOGOUT_USER)
    router.push('/')
  },
  getUserInfo ({commit, state}) {
    commit(types.RECEIVE_USER_INFO)
    return api.getUser()
      .then((user) => {
        console.log('GET USER INFO: ', user)
        commit(types.RECEIVE_USER_SUCCESS, user)
        return user;
      })
      .catch((err) => {
        commit(types.RECEIVE_USER_FAILURE)
        console.error(err)
      })
  },
  signup ({commit, state}, user) {
    commit(types.SIGNUP_USER_REQUEST)
    return api.signup(user)
      .then((user) => resolve(user))
      .catch((err) => reject(err))
  }
}

export default {
  state,
  mutations,
  actions
}
