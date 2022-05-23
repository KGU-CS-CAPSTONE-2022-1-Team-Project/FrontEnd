import Vue from 'vue'
import Vuex from 'vuex'
import loginStore from './modules/loginStore'
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex)

export default new Vuex.Store({
    plugins: [
        createPersistedState({
            storage: window.localStorage,
            paths: ['loginStore']
        })
    ],
    modules: {
        loginStore: loginStore
    }
})
