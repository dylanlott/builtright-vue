import * as types from '../mutation-types'
import api from '../../api/user'

const localStorage = window.localStorage

const state = {
  user: {
    email: '',
    username: '',
    token: '',
    id: '',
    admin: ''
  }
}

const mutations = {
  [types.SET_TOKEN] (state, token) {
    console.log('SET TOKEN MUTATION:', token);
    localStorage.setItem('token', token)
  }
}

const actions = {
 //these won't register
}

export default {
  state,
  mutations,
  actions
}
