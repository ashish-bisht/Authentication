import axios from 'axios'

const state = {}
const getters = {}
const actions = {
    users ( {commit} ){
        axios.get(http://127.0.0.1:8000/api/users/).then((data) => {
            console.log(data)
        })
    }
}
const mutations = {}

export default {
  state,
  getters,
  actions,
  mutations
}
