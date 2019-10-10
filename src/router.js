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

let router = new Router({
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
        },
        {
          path: '',
          redirect: 'films'
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
      component: Money,
      meta: {
        needLogin: true
      }
    }
  ]
})
//实现登录拦截
router.beforeEach((to, from, next) => {
  let userInfo = window.localStorage.getItem('userInfo')
  if (to.meta.needLogin && !userInfo) {
    // next('/login')
    //登录后想去你之前想去的页面
    console.log(to)
    next({
      path: '/login',
      query: {
        redirect: to.fullPath
      }
    })
  } else {
    next()
  }
})

export default router
