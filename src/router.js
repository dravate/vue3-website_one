import { createRouter, createWebHistory } from 'vue-router';
import Blog  from '@/components/Blog.vue';
import Services from '@/components/Services.vue';
import Main from '@/layouts/Main.vue';
import NotFound from '@/layouts/NotFound.vue';
import UserAuth from '@/components/auth/UserAuth.vue';
import UserRegister from '@/components/auth/UserRegister.vue';

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: 'active',
  routes: [
    { path: '/', name: 'Main', component: Main },
    { path: '/register', name: 'UserRegister', component: UserRegister},
    { path: '/auth', name: 'Auth', component: UserAuth},
    { path: '/blog', name: 'Blog', component: Blog},
    { path: '/services', name: 'Services', component: Services},
    { path: '/:notFound(.*)', name: 'Notfound', component: NotFound }
  ]
});
/*
router.beforeEach(function(to, from,  next) {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next('/auth');
  } else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
    next('/');
  } else {
    next();
  }
});

*/


export default router;

