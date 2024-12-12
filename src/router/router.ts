import { createRouter, createWebHistory } from 'vue-router';
import DefaultLayout from '../layouts/DefaultLayout.vue';
import MainPage from '../pages/MainPage.vue';

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '',
        name: 'Products',
        component: MainPage,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
