import axios from 'axios'
import * as types from '../state/mutation-types'

const storage = window.localStorage
const token = storage.getItem('token')
const API_URL = 'http://localhost:3000'

export default {
  addPartToBuild (part, context) {
    return new Promise((resolve, reject) => {
      const url = API_URL + '/parts'
      const params = {
        access_token: token
      }
      axios.post(url, part, params)
        .then((res) => resolve(res))
        .catch((err) => reject(err))
    })
  },

  getPartsForBuild (id, context) {
    return new Promise((resolve, reject) => {
      const url = API_URL + '/parts'
      const params = {
        access_token: token,
        build_id: id
      }
      axios.get(url, params)
        .then((res) => resolve(res))
        .catch((err) => reject(err))
    })
  }
}
