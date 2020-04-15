import axios from 'axios'

const state = {
  user: null,
  token: null
}
const getters = {
  user: state => {
    return state.user
  }
}
const mutations = {
  SET_USER_DATA (state, userData) {
    console.log('user data', userData)
    state.user = userData.user
    state.token = userData.token.access
    localStorage.setItem('token', JSON.stringify(userData.token.access))
  }
}
const actions = {
  login ({ commit }, credentials) {
    console.log(credentials)
    return axios
      .post('http://127.0.0.1:8000/api/token/', credentials)
      .then(({ data }) => {
        console.log(data)
        commit('SET_USER_DATA', {
          token: data,
          user: credentials.email
        })
      })
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
