// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from './components/LoginPage.vue';

const routes = [
  {
    name : 'Login',
    path: '/', 
    component: LoginPage },
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
