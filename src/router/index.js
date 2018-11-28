import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import post from '@/components/post'
import category from '@/components/category'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/post/:id',
      name: 'post',
      component: post
    },
    {
      path: '/category/:id/:name',
      name: 'category',
      component: category
    }
  ]
})
