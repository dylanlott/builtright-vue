import * as types from '../mutation-types'
import api from '../../api/builds'
import { router } from '../../router/index'

const localStorage = window.localStorage
const user = localStorage.getItem('user_id')
const token = localStorage.getItem('token')

const state = {
  builds: [],
  details: {},
  success: false,
  loading: false,
  errors: ''
}

const mutations = {
  [types.GET_BUILDS_REQUEST] (state) {
    state.loading = true
    state.success = false
  },
  [types.GET_BUILDS_SUCCESS] (state, builds) {
    state.builds = builds
    state.loading = false
    state.success = true
  },
  [types.GET_BUILDS_FAILURE] (state, err) {
    state.errors = err
    state.loading = false
    state.success = false
  },
  [types.GET_BUILD_DETAILS_REQUEST] (state) {
    state.loading = true
    state.success = false
  },
  [types.GET_BUILD_DETAILS_SUCCESS] (state, details) {
    state.details = details
    state.loading = false
    state.success = true
  },
  [types.GET_BUILD_DETAILS_FAILURE] (state, errors) {
    state.loading = false
    state.success = false
    state.errors = errors
  }
}

const actions = {
  getBuildsForUser ({commit, state}, user) {
    console.log('GET BUILDS FOR USER FIRED')
    commit(types.GET_BUILDS_REQUEST)
    return api.getBuilds(user)
      .then((builds) => {
        console.log('BUILDS: ', builds)
        commit(types.GET_BUILDS_SUCCESS, builds)
      })
      .catch((err) => {
        commit(types.GET_BUILDS_FAILURE, err)
      })
  },
  getBuildDetails ({commit, state}, id) {
    commit(types.GET_BUILD_DETAILS_REQUEST)
    return api.getBuildDetails(id)
      .then((details) => {
        commit(types.GET_BUILD_DETAILS_SUCCESS, details)
      })
      .catch((err) => {
        commit(types.GET_BUILD_DETAILS_FAILURE, err)
      })
  },
  createNewBuild ({commit, state}, build) {
    // commit(types.CREATE_BUILD_REQUEST)
    return api.createBuild()
      .then((build) => build)
  },
  testAction ({commit, state}, testData) {
    console.log(commit, state, testData)
  }
}

export default {
  state,
  mutations,
  actions
}
