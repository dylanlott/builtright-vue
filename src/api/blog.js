import axios from 'axios'
import * as types from '../state/mutation-types'
import config from '../config'

export default {
  getBlogPosts () {
    return axios.get('/posts', {
        type: 'blog'
      })
      .then((res) => res.data)
      .catch((err) => err)
  },

  createBlogPost (blog) {
    return axios.post('/posts', blog, {
        type: 'blog'
      })
      .then((res) => res.data)
      .catch((err) => err)
  }
}
