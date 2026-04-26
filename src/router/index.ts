import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import { setupGuards } from './guards';

// Importação das rotas públicas
const publicRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('../pages/public/Home.vue'),
    meta: { public: true }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../features/auth/components/Login.vue'),
    meta: { public: true, onlyUnauthenticated: true }
  }
];

// Importação das rotas privadas (Feature-based com Lazy Loading)
const privateRoutes: RouteRecordRaw[] = [
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../pages/private/Dashboard.vue'),
    meta: { requiresAuth: true }
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...publicRoutes,
    ...privateRoutes,
    // Catch-all (404)
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('../pages/public/NotFound.vue')
    }
  ],
  scrollBehavior(_to, _from, savedPosition) {
    return savedPosition || { top: 0 };
  }
});

// Inicializa os navigation guards de segurança
setupGuards(router);

export default router;
