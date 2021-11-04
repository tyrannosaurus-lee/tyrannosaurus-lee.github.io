import { createRouter, createWebHistory } from 'vue-router'
import Works from '../views/Works.vue'

const About = () => {
  return import(/* webpackChunkName: "about" */ '../views/About.vue')
  // webpackChunkName : 링크값이 입력됐을 때 이 값에 해당하는 컴포넌트 내용만을 불러오겠다.
}

const routes = [
  {
    path: '/',
    name: 'Works',
    component: Works
  },
  {
    path: '/About',
    name: 'About',
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    component: About
  },
  {
    path: '/Careers',
    name: 'Careers',
    component: () => import(/* webpackChunkName: "Careers" */ '../views/Careers.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
