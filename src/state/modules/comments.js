import axios from 'axios'
import * as types from '../mutation-types'
import comments from '../../api/comments'

const state = {
  comments: [],
  loading: false
}

const mutations = {
  [types.GET_POST_COMMENTS_REQUEST] (state) {
    state.loading = true
    state.success = false
    state.errors = null
  },
  [types.GET_POST_COMMENTS_SUCCESS] (state, comments) {
    state.loading = false
    state.success = true
    state.errors = null
    state.comments = comments
  },
  [types.GET_POST_COMMENTS_FAILURE] (state, errors) {
    state.loading = false
    state.success = false
    state.errors = errors
    state.comments = []
  },
  [types.ADD_COMMENT_REQUEST] (state) {
    state.loading = true
    state.success = false
    state.errors = null
  },
  [types.ADD_COMMENT_SUCCESS] (state, comment) {
    state.loading = false
    state.success = true
    state.comments.push(comment)
  },
  [types.ADD_COMMENT_FAILURE] (state, errors) {
    state.loading = false
    state.success = false
    state.errors = errors
  }
}

const actions = {
  getComments ({commit, state}, id) {
    commit(types.GET_POST_COMMENTS_REQUEST)
    return comments.getComments(id)
      .then((comments) => {
        console.log('Post comments: ', comments)
        commit(types.GET_POST_COMMENTS_SUCCESS, comments)
      })
      .catch((err) => commit(types.GET_POST_COMMENTS_FAILURE, err))
  },

  addComment ({commit, state}, comment) {
    commit(types.ADD_COMMENT_REQUEST)
    return comments.createComment(comment)
      .then((res) => {
        console.log('add comment response: ', res)
        commit(types.ADD_COMMENT_SUCCESS, comment)
      })
      .catch((err) => commit(types.ADD_COMMENT_FAILURE, err))
  }
}

export default {
  state,
  mutations,
  actions
}
