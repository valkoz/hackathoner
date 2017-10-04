import Vue from 'vue'
import Vuex from 'vuex'
import api from './api.js'

Vue.use(Vuex) 

const apiRoot = 'http://localhost:8000'

const store = new Vuex.Store({
  state: {
    hacks: []
  },
  mutations: {
    'GET_HACKS': function (state, response) {
      state.hacks = response.body
      console.log(response.body)
    },
    'ADD_HACK': function (state, hack) {
      state.hackathons.push(hack)
    },
    'CLEAR_HACKS': function (state) {
      const hacks = state.hacks
      hacks.splice(0, hacks.length)
    },
    'API_FAIL': function (state, error) {
      console.error(error)
    }
  },
  actions: {
    getHacks (store) {
      return api.get('http://localhost:8081/hacks/')
        .then((response) => store.commit('GET_HACKS', response))
        .catch((error) => store.commit('API_FAIL', error))
    },
    addHack (store, hack) {
      store.commit('ADD_HACK', hack)
    },
    clearHacks (store) {
      store.commit('CLEAR_HACKS')
    }
  }
})

export default store
