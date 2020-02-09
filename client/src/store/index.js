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
    async fetchUsersFullData(state, url) {
      await fetch(url)
        .then((responce) => {
          return responce.json();
        })
        .then((data) => {
          state.commit('updateUsersData', data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },
  getters: {
    getUsersFullData(state) {
      return state.users;
    },
    getUsersSortedData(state) {
      return state.users.map((user) => {
        return {
          fio: user.fio,
          level: user.level,
          exp: getExperienceSum(user.resources),
          coins: getCoinsSum(user.resources)
        }
      }).sort(compare).reverse();
    }
  }
});


function getExperienceSum(data) {
  data = JSON.parse(data);
  let sum = 0;
  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      const element = data[key];
      if (element.resource === 'ACTIVERATE' || element.resource === 'PASSIVERATE') {
        sum += element.value;
      }
    }
  }
  return sum;
}


function getCoinsSum(data) {
  data = JSON.parse(data);
  let sum = 0;
  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      const element = data[key];
      if (element.resource === 'MONEY') {
        sum += element.value;
      }
    }
  }
  return sum;
}

function compare(a, b) {
  return a.exp - b.exp;
}
