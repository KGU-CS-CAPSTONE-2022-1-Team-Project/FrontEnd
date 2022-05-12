import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    walletAddress: ""
  },
  getters: {
  },
  mutations: {
    //로그인 성공
    loginSuccess(state){
      state.isLogin = true
    }
  },
  actions: {
    //로그인 시도
    loginEx({state, commit}, loginobj){
      if(loginobj.isMember === true){
        state.isLogin = true;
        state.walletAddress = loginobj.walletAddress;
      }
    },
    logoutEx({state, commit}){
      state.isLogin = false;
      state.walletAddress = "";
    }
  },
  modules: {
  }
})
