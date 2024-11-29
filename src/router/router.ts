import { createRouter, createWebHistory } from 'vue-router';
import ProductPage from '../pages/ProductPage.vue';

const routes = [
  { path: '/', name: 'Products', component: ProductPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
