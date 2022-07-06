import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: 'ssss'
  },
  getters: {
  },
  mutations: {
    changeName (state, name) {
      state.name = name
    }
  },
  actions: {
    aChangeName ({ commit }, name) {
      setTimeout(() => {
        commit('changeName', name)
      }, 1000)
    }
  },
  modules: {
  }
})
