import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/home/index.vue'
import Films from './views/home/films.vue'
import Cinemas from './views/home/cinemas.vue'
import Center from './views/home/center.vue'

import City from './views/city/index.vue'
import Login from './views/login/login.vue'
import Detail from './views/film/index.vue'
import Money from './views/money/money.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: 'films',
          component: Films
        },
        {
          path: 'cinemas',
          component: Cinemas
        },
        {
          path: 'center',
          component: Center
        }
      ]
    },
    {
      path: '/city',
      component: City
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/detail/:id',
      component: Detail
    },
    {
      path: '/money',
      component: Money
    }
  ]
})
