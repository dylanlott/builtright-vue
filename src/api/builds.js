import axios from 'axios'
import * as types from '../state/mutation-types'

const storage = window.localStorage
const token = storage.getItem('token')
const API_URL = 'http://localhost:3000'

export default {


  /**
   * getBuilds - Returns the user's builds
   *
   * @param  {Number} user    user_id integer
   * @param  {Object}  context vue context
   * @return {Array} Array of Build objects
   */
  getBuilds (user, context) {
    return new Promise((resolve, reject) => {
      const params = {
        user: id
      }
      axios.get(API_URL + '/builds', params)
        .then((res) => resolve(res.data))
        .catch((err) => reject(err))
    })
  },

  /**
   * getBuildDetails - Gets details for a build.
   *
   * @param  {Number} id      user's ID
   * @param  {Object} context Vue context object
   * @return {Object}         Object build details
   */
  getBuildDetails (id, context) {
    return new Promise((resolve, reject) => {
      const params = {
        access_token: token,
        user_id: id
      }

      axios.get(API_URL + '/builds', params)
      .then((res) => resolve(res.data))
      .catch((err) => reject(err))
    })
  },

  createBuild (build, user, context) {
    return new Promise((resolve, reject) => {
      return resolve(build)
    })
  },

  getAllBuilds (build, context) {
    return new Promise((resolve, reject) => {
      const params = {
        limit: 10
      }
      axios.get('/builds', params)
        .then((builds) => resolve(builds.data))
        .catch((err) => err)
    })
  }
}
