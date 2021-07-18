import Vue from 'vue';
import Router from 'vue-router';
import Home from './vuews/Home';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/Todos",
      component: () => import('./vuews/Todos'),
    },
  ],
});