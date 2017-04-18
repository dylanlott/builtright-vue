import axios from 'axios'
import * as types from '../state/mutation-types'

const storage = window.localStorage
const API_URL = process.env.NODE_ENV==='production'
  ? 'http://localhost:3030'
  : 'http://localhost:3030'

export default {
  getUser (context) {
    return new Promise((resolve, reject) => {
      axios.get(API_URL + '/users/' + this.getUserId(), {
        params: {
          token: this.checkAuth()
        }
      })
        .then((user) => resolve(user.data.data[0]))
        .catch((err) => reject(err))
    })
  },

  login (user, context) {
    return new Promise((resolve, reject) => {
      axios.post(API_URL + '/auth/local/', user)
        .then((res) => {
          const user = res.data.data[0]
          return resolve(user)
        })
        .catch((err) => reject(err))
    })
  },

  signup (user, context) {
    return new Promise((resolve, reject) => {
      axios.post(API_URL + '/users', user)
        .then((user) => resolve(user.data.data[0]))
        .catch((err) => reject(err))
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
  },

  checkAuth () {
    return storage.getItem('token') ? true : false
  },

  getUserId () {
    return storage.getItem('user_id')
  }
}
