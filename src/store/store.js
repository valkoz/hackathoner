import Vue from 'vue'
import Vuex from 'vuex'
import api from './api.js'

Vue.use(Vuex) 

const store = new Vuex.Store({
  state: {
    currentHack: [],
    hacks: []    
  },
  mutations: {
    'GET_HACKS': function (state, response) {
      state.hacks = response.body
      console.log(response.body)
    },
    'GET_CURRENT_HACK': function (state, response) {
      state.currentHack = response.body
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
    getCurrentHack (store, payload) {
      //alert(payload.byId)
      return api.get('http://localhost:8081/hacks/by-id/' + payload.byId + '/')
        .then((response) => store.commit('GET_CURRENT_HACK', response))
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
