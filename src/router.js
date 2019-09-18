import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Skill from './views/Skill.vue'
import School from './views/School.vue'
import Development from './views/Development.vue'
import Experience from './views/Experience.vue'
import Contact from './views/Contact.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/skill',
      name: 'skill',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "skill" */ './views/Skill.vue')
    },
    {
      path: '/school',
      name: 'school',
      component: () => import(/* webpackChunkName: "school" */ './views/School.vue')
    },
    {
      path: '/course',
      name: 'course',
      component: () => import(/* webpackChunkName: "course" */ './views/Course.vue')
    },
    {
      path: '/development',
      name: 'development',
      component: () => import(/* webpackChunkName: "development" */ './views/Development.vue')
    },
    {
      path: '/experience',
      name: 'experience',
      component: () => import(/* webpackChunkName: "experience" */ './views/Experience.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import(/* webpackChunkName: "contact" */ './views/Contact.vue')
    },
  ]
})
