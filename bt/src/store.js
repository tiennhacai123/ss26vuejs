import { createStore } from "vuex";

const store = createStore({
  state: {
    users: [
      {
        id: 1,
        name: "Le Dien Tien 1",
        gender: "Nam",
        dateOfBirth: "28/07/2005",
        address: "HN",
      },
      {
        id: 2,
        name: "Le Dien Tien 2",
        gender: "Nam",
        dateOfBirth: "28/07/2005",
        address: "HN",
      },
      {
        id: 3,
        name: "Le Dien Tien 3",
        gender: "Nam",
        dateOfBirth: "28/07/2005",
        address: "HN",
      }
    ],
    products: [
      {
        id: 1,
        name: "product 1",
        price: 10000000,
        quantity: 10,
      },
      {
        id: 2,
        name: "product 2",
        price: 8000000,
        quantity: 5,
      },
      {
        id: 3,
        name: "product 3",
        price: 5000000,
        quantity: 15,
      }
    ],
    count: 0,
    randomNumbers: [],
    company: "Rikkei Academy",
    darkMode: false,
    language: 'vi',
    registeredUser: {
      email: '',
      password: ''
    }
  },
  getters: {
    getRegisteredUser: (state) => state.registeredUser
  },
  mutations: {
    increment(state, payload) {
      state.count += payload.amount
    },
    decrement(state, payload) {
      state.count -= payload.amount
    },
    addRandomNumber(state, payload) {
      state.randomNumbers.push(payload.amount);
    },
    updateCompany(state, payload) {
      state.company = payload.amount;
    },
    toggleDarkMode(state) {
      state.darkMode = !state.darkMode
    },
    setLocale(state, payload) {
      state.locale = payload
    },
    SET_REGISTERED_USER(state, user) {
      state.registeredUser = user;
    }
  },
  actions: {
    generateRandomNumber({ commit }) {
      const randomNumber = Math.floor(Math.random() * 100) + 1;
      commit('addRandomNumber', {
        amount: randomNumber,
      });
    },
    registerUser({ commit }, user) {
      commit('SET_REGISTERED_USER', user);
    }
  },
});

export default store;