import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import FullScreenCard from '@/components/FullScreenCard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/:id',
      name: 'FullScreenCard',
      component: FullScreenCard,
      props: true
    }
  ]
})
