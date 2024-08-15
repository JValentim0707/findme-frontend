const userStore = {
  state: {
    userInfo: {},
  },
  getters: {
    getUserInfo (state) {
      return state.userInfo
    }
  },
  mutations: {
    setUserValue(state, payload) {
      state.userInfo = payload
    }
  },
  actions: {
    setUserValue(state, payload) {
      console.log('tamo aq', payload)
      const { userInfo } = payload
      state.commit('setUserValue', userInfo)
    }
  },
  plugins: []
}

export default userStore