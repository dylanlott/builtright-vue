import axios from 'axios'
import * as types from '../state/mutation-types'
import config from '../config'

const storage = window.localStorage
const token = storage.getItem('token')
const URL = config.API_URL

export default {
  getPosts (options) {
    return new Promise((resolve, reject) => {
      axios.get(`${URL}/posts`, {
        params: {
          token: token,
          options
        }
      })
      .then((res) => resolve(res.data))
      .catch((err) => reject(err))
    })
  },

  createPost (post) {
    return new Promise((resolve, reject) => {
      axios.post(`${URL}/posts`, post, {
        params: {
          token: token
        }
      })
      .then((res) => resolve(res.data))
      .catch((err) => reject(err))
    })
  },

  getDetails (id) {
    return new Promise((resolve, reject) => {
      axios.get(`${URL}/posts/${id}`, {
        params: {
          token: token
        }
      })
      .then((res) => resolve(res.data))
      .catch((err) => reject(err))
    })
  }
}
