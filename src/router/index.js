import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Index.vue'
import Album from '../pages/Album.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/albums/:albumId',
    name: 'album',
    component: Album,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
