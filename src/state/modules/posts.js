import * as types from '../mutation-types'
import posts from '../../api/posts'
import { router } from '../../router/index'

const storage = window.localStorage
const user = storage.getItem('user_id')
const token = storage.getItem('token')

const state = {
  posts: [],
  details: {},
  success: false,
  loading: false,
  errors: ''
}

const mutations = {
  [types.GET_POSTS_REQUEST] (state) {
    state.loading = true,
    state.success = false
    state.posts = []
  },
  [types.GET_POSTS_SUCCESS] (state, posts) {
    state.posts = posts
    state.loading = false
    state.success = true
  },
  [types.GET_POSTS_FAILURE] (state, errors) {
    state.loading = false
    state.success = false
    state.errors = errors
  }
}

const actions = {
  getPosts ({commit, state}) {
    commit(types.GET_POSTS_REQUEST)
    return posts.getPosts()
      .then((posts) => {
        console.log('posts', posts)
        commit(types.GET_POSTS_SUCCESS, posts)
        return posts
      })
      .catch((err) => {
        console.log(`Error getting posts: ${err}`)
        commit(types.GET_POSTS_FAILURE, err)
        return err
      })
  }
}

export default {
  state,
  mutations,
  actions
}