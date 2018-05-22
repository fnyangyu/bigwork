import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/main'
import MyNote from '@/components/myNote'
import BlogComent from '@/components/blogComent'
import MyAlbum from "@/components/myAlbum"

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
      redirect: 'blog/life',
      component: BlogComent
    },
    {
      path: '/blog/:id',
      component: BlogComent
    },
    {
      path: '/mynote',
      component: MyNote
    },
    {
      path: '/myalbum',
      component: MyAlbum
    },
  ]
})