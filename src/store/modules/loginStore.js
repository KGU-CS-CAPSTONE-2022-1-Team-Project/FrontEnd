const loginStore = {
    namespaced: true,
    state: {
        isLogin: false,
        walletAddress: ""
    },
    getters: {
        isLogin: (state) => {
            return state.isLogin;
        }
    },
    mutations: {
        //로그인 성공
        loginSuccess: (state, loginObj) => {
            state.isLogin = true
            state.walletAddress = loginObj.walletAddress;
        },
        logoutSuccess: (state, loginObj) => {
            state.isLogin = false
            state.walletAddress = "";
        }
    },
    actions: {
        //로그인 시도
        loginEx: ({state, commit}, loginObj) => {
            if (loginObj.isMember === true) {
                commit('loginSuccess', loginObj);
            }
        },
        logoutEx: ({state, commit}) => {
            commit('logoutSuccess');
        }
    }
}
export default loginStore
