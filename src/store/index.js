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
    },
    onDetail(state, id){
      if(state.window){
        state.window = false;
      }else if(!state.window){
        state.window = true;
      }
      var num = Number(id) - 1
      state.owork = state.works[num]
      return state.owork

    }
  },
  actions: {
    changePrograming({ commit }, programing){
      commit('changePrograming', programing)
    },
    onDetail({commit}, id){
      commit('onDetail', id)
    }
  },
  modules: {
  }
})
