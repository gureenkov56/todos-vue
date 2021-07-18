import Vue from 'vue'
import Router from 'vue-router'
import Home from './vuews/Home'
import Todos from '@/vuews/Todos'

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/todos",
      component: Todos,
    },
  ],
});