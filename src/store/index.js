import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    programing: 'All',
    window: false,
    owork: '',
  },
  mutations: {
    changePrograming(state, programing){
      state.programing = programing
    }
  },
  actions: {
    changePrograming({ commit }, programing){
      commit('changePrograming', programing)
    }
  },
  modules: {
  }
})
