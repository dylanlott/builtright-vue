import axios from 'axios'
import * as types from '../state/mutation-types'
import user from './user'

const storage = window.localStorage
const token = storage.getItem('token')
const API_URL = 'http://localhost:3000'

export default {

  /**
   * addPartToBuild - associate a part to a build
   *
   * @param  {type} part    a `part` object
   * @param  {type} build   ID of the build
   * @param  {type} context context
   * @return {type}         returns resolve if successful, reject if failure
   */
  addPartToBuild (part, build, id, context) {
    return new Promise((resolve, reject) => {
      const params = {
        token
      }
      console.log('Part to add: ', part)
      console.log('BUILD PRE: ', build)
      build.parts.push(part)
      console.log('BUILD POST: ', build)
      // part.user = user.getUserId()
      // axios.post(`${API_URL}/parts`, part, params)
      //   .then((res) => {
      //     console.log('part to add: ', part)
      //     build.parts.push(part)
      //     console.log('build object: ', build)
      //     builds.updateBuild(build, id)
      //       .then((res) => {
      //         console.log('build updated: ', res)
      //       })
      //   })
      //   .catch((err) => reject(err))
    })
  },

  /**
   * getPartsForBuild - get the list of parts for a build
   *
   * @param  {type} id      the ID of the build
   * @param  {type} context context
   * @return {type}         returns array of parts for the build if successful
   */
  getPartsForBuild (id, context) {
    return new Promise((resolve, reject) => {
      const params = {
        token
      }
      axios.get(`${API_URL}/parts`, params)
        .then((res) => resolve(res.data.parts))
        .catch((err) => reject(err))
    })
  }
}
