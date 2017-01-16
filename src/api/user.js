import axios from 'axios'
import * as types from '../state/mutation-types'

const storage = window.localStorage
const API_URL = 'http://localhost:3000'

export default {
  getUser (context) {
    return new Promise((resolve, reject) => {
      axios.get('API_URL' + '/user')
        .then((user) => user.data)
        .catch((err) => err)
    })
  },

  login (user, context) {
    return new Promise((resolve, reject) => {
      axios.post(API_URL + '/access_tokens', user)
        .then((res) => {
          const user = res.data.data
          commit(types.SET_TOKEN, user.access_token)
        })
        .catch((err) => err)
    })
  },

  signup (user, context) {
    return new Promise((resolve, reject) => {
      axios.post(API_URL + '/users', user)
        .then((user) => user.data)
        .catch((err) => err)
    })
  },

  logoutUser (context) {
    return new Promise((resolve, reject) => {
      return resolve(true)
    })
  },

  getAuthHeader () {
    return {
      'x-access-token': storage.getItem('token')
    }
  }
}
