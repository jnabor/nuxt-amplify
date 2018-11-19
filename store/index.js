export const state = () => ({
  user: ''
})

export const getters = {
  isAuthenticated(state) {
    console.log('st:gt:isauth')
    return state.user !== ''
  }
}
export const mutations = {
  setUser(state, payload) {
    state.user = payload
    console.log('st:mt:user')
  },
  logOut(state) {
    state.user = ''
    console.log('st:mt:user')
  }
}
export const actions = {
  logOut({ commit }) {
    commit('logOut')
  },
  setUser({ commit }, payload) {
    commit('setUser', payload)
  }
}
