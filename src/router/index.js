import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index.vue'
import movie from '@/pages/movie.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/movie/:title',
      name: 'movie',
      component: movie
    }
  ]
})
