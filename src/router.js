import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/main'
import Blog from '@/components/blog'
import BlogComent from '@/components/blogComent'

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
      redirect: 'blog/hobby/life',
      component: Blog
    },
    {
      path: '/blog/:id',
      component: BlogComent
    },
    {
      path: '/blog/hobby/:id',
      component: BlogComent
    },
  ]
})