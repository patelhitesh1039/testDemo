// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from './components/SideBar.vue';
import IndeXpage from './components/TempleIndex.vue'

const routes = [
  {
    name : 'Login',
    path: '/', 
    component: IndeXpage },
    {
      name : 'LoginPage',
      path: '/about', 
      component: LoginPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
