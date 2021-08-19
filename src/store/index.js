import Vue from 'vue'
import Vuex from 'vuex'
import service from '../services/personnel'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    personnel: [],
    fruits: [
      {
        label: "pommes",
        prix: 1.20,
        stock: true
      },
      {
        label: "poires",
        prix: 1.30,
        stock: false
      },
      {
        label: "abrictos",
        prix: 2.10,
        stock: true
      }
    ],
    connected: false
  },
  getters: {
    allFruits(state) {
      return state.fruits
    },
    stockFruits (state) {
      return state.fruits.filter(fruit => fruit.stock)
    },
    testConnect(state) {
      return state.connected
    },
    listePersonnel(state) {
      return state.personnel
    }
  },
  mutations: {
    connexion(state, etat) {
      state.connected = etat
    },
    personnelList(state, listing) {
      state.personnel = listing
    },
    updateFruit(state, newValue) {
      //console.log({ ... newValue })
      state.fruits[newValue.index].label = newValue.label
      state.fruits[newValue.index].prix = newValue.prix
      state.fruits[newValue.index].stock = newValue.stock
    }
  },
  actions: {
    getPersonnel(context) {
      service.listing()
      .then(response => {
        console.log(response)
        context.commit("personnelList", response)
      })
    }
  },
  modules: {
  }
})
