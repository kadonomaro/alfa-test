import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [],
  },
  mutations: {
    updateUsersData(state, users) {
      state.users = users;
    }
  },
  actions: {
    async getUsersFullData(state, url) {
      await fetch(url)
        .then((responce) => {
          return responce.json();
        })
        .then((data) => {
          state.commit('updateUsersData', data);
        })
        .catch((error) => {
          console.log(error);
        })
    }
  }
})
