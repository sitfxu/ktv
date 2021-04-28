import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/home.vue'
import Search from '../views/home/search.vue'
import Control from '../views/home/control.vue'
import StarList from '../views/home/starList.vue'
import ListSort from '../views/home/listSort.vue'

import Already from '../components/already.vue'
import Music from '../components/music.vue'
import Star from '../components/star.vue'
import Hot from '../components/hot.vue'
import Culling from '../components/culling.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  //遥控页面
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  // 搜索框
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  // 已点歌曲
  {
    path: '/already',
    name: 'Already',
    component: Already
  },
  // 遥控
  {
    path: '/control',
    name: 'Control',
    component: Control
  },
  // 歌星
  {
    path: '/starList',
    name: 'StarList',
    component: StarList
  },
  // 榜单
  {
    path: '/listSort',
    name: 'ListSort',
    component: ListSort
  },
  // 歌曲列表
  {
    path: '/music',
    name: 'Music',
    component: Music
  },
  // 明星列表
  {
    path: '/star',
    name: 'Star',
    component: Star
  },
  // 热门
  {
    path: '/hot',
    name: 'Hot',
    component: Hot
  },
  // 精选歌单
  {
    path: '/culling',
    name: 'Culling',
    component: Culling
  }
]

const router = new VueRouter({
  routes
})

export default router
