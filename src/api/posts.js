import axios from 'axios'
import * as types from '../state/mutation-types'
import config from '../config'

const storage = window.localStorage
const token = storage.getItem('token')
const URL = config.API_URL

export default {
  getPosts () {
    return new Promise((resolve, reject) => {
      axios.get(`${URL}/posts`, {
        params: {
          token: token
        }
      })
      .then((res) => {
        console.log('posts: ', res)
        return resolve(res)
      })
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

  getDetails () {
    return new Promise((resolve, reject) => {
      axios.get(`${URL}/${id}`, {
        params: {
          token: token
        }
      })
      .then((res) => resolve(res))
      .catch((err) => reject(err))
    })
  }
}
