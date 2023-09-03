// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from './components/LoginPage.vue';
import IndeXpage from './components/TempleIndex.vue'

const routes = [
  {
    name : 'Home',
    path: '/', 
    component: IndeXpage },
    {
      name : 'LoginPage',
      path: '/login', 
      component: LoginPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
