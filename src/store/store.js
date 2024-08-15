import { createStore } from 'vuex'
import VuexPersistence from 'vuex-persist'

import userStore from './user'

// const vuexLocal = new VuexPersistence<any>({
//   storage: window.localStorage
// })

export default createStore({
  plugins: [new VuexPersistence().plugin],
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    user: {
      namespaced: true,
      ...userStore
    }
  },
})