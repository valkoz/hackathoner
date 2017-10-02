import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex) 

const store = new Vuex.Store({
  state: {
    hacks: [
        {
          id: "1",
          someLink: "../static/img/s7.png",
          someText: "Первый хакатон, который проходит при поддержке авиакомпании. Только 50 отобранных команд смогут побороться за главный приз 600 000 рублей в 5 номинациях. ",
          someTitle: "#s7hackathon",
        },
        {
          id: "2",
          someLink: "../static/img/mABBYYlity.png",
          someText: "24-часовой Хакатон по разработке сервисов для мобильных платформ с применением технологий интеллектуальной обработки информации, организованный компанией ABBYY - мировым разработчиком решений в этой области.",
          someTitle: "mABBYYlity",
        },
        {
          id: "3",
          someLink: "../static/img/otkrutue.png",
          someText: "Банк «Открытие» проведет хакатон для разработчиков Codility​ в рамках серии хакатонов Open Fights. На хакатоне участники выберут одно из розничных банковских направлений и, используя открытый API банка, за два дня напишут мобильное или веб-приложение.",
          someTitle: "Codility",
        },
        {
          id: "4",
          someLink: "../static/img/funtech.png",
          someText: "Хакатон — это отличная возможность развить свой проект, дополнить команду разработчиками, дизайнерами, маркетологами, проконсультироваться с ведущими экспертами в области, а также получить денежные призы и возможность пройти отбор в главный FunTech-акселератор страны — FunCubator.",
          someTitle: "FunTech Hackathon",
        },
        {
          id: "5",
          someLink: "../static/img/luxoft.png",
          someText: "Не упустите уникальную возможность всего за 24 часа развить свои навыки в CV, познакомиться с ведущими специалистами в этой области, выиграть крутые призы от Luxoft и, самое главное, хакнуть поистине непростую задачу!",
          someTitle: "HackCV",
        }
      ]
  },
  mutations: {
    'ADD_HACK': function (state, hack) {
      state.hackathons.push(hack)
    },
    'CLEAR_HACKS': function (state) {
      const hacks = state.hacks
      hacks.splice(0, hacks.length)
    }
  },
  actions: {
    addHack (store, hack) {
      store.commit('ADD_HACK', hack)
    },
    clearHacks (store) {
      store.commit('CLEAR_HACKS')
    }
  }
})

export default store
