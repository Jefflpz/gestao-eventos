import type { Router } from 'vue-router';
import { isAuthenticated } from '../core/auth';

export function setupGuards(router: Router) {
  router.beforeEach((to, _from, next) => {
    const isAuth = isAuthenticated();

    // 1. Rota requer autenticação mas usuário não está logado
    if (to.meta.requiresAuth && !isAuth) {
      // Salva a rota de destino para redirecionar após login bem-sucedido
      return next({ name: 'login', query: { redirect: to.fullPath } });
    }

    // 2. Rota é apenas para deslogados (ex: Login, Register) e usuário já está logado
    if (to.meta.onlyUnauthenticated && isAuth) {
      return next({ name: 'dashboard' });
    }

    // 3. Tudo certo, permite a navegação
    return next();
  });
}
