import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/home.vue'
import ListView from '@/pages/ListView.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/list',
      name: 'ListView',
      component: ListView
    }

  ]
})
