import Vue from 'vue'
import Vuex from 'vuex'
import api from './api.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    key: "",
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
    'REGISTER': function (state, response) {
      console.log(response.body)
    },
    'LOGIN': function (state, response) {
      state.key = response.body.key
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
      alert("ОШИБКА ВСЕЙ ТВОЕЙ ЖИЗНИ")
      console.error(error)
    },
    'REG_FAIL': function (state, error) {
      alert("ОШИБКА РЕГИСТРАЦИИ")
      console.error(error)
    },
    'LOGIN_FAIL': function (state, error) {
      alert("ОШИБКА АВТОРИЗАЦИИ")
      console.error(error)
    },
  },
  actions: {
    getHacks (store) {
      return api.get('http://82.199.101.40:80/hacks')
        .then((response) => store.commit('GET_HACKS', response))
        .catch((error) => store.commit('API_FAIL', error))
    },
    getCurrentHack (store, payload) {
      //alert(payload.byId)
      return api.get('http://82.199.101.40:80/hacks/by-id/' + payload.byId )
        .then((response) => store.commit('GET_CURRENT_HACK', response))
        .catch((error) => store.commit('API_FAIL', error))
    },
    register (store, payload) {
      return api.post('http://82.199.101.40:80/common/register', 'name=' + payload.name + '&pass=' + payload.pass)
        .then((response) => store.commit('REGISTER', response))
        .catch((error) => store.commit('REG_FAIL', error))
    },
    login (store, payload) {
      return api.post('http://82.199.101.40:80/common/login', 'name=' + payload.name + '&pass=' + payload.pass)
        .then((response) => store.commit('LOGIN', response))
        .catch((error) => store.commit('LOGIN_FAIL', error))
    },
    logout (store, payload) {
      return api.post('http://82.199.101.40:80/auth/logout', 'key=' + state.key)
        .then((response) => store.commit('REGISTER', response))
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
