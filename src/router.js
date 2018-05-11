import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/main'
import Blog from '@/components/blog'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Main
    },
    {
      path: '/blog',
      component: Blog
    }
  ]
})