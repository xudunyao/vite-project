import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', component: () => import('@/views/home/index') },
  { path: '/login', component: () => import('@/views/login/index') },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// 添加导航守卫
router.beforeEach((to, from, next) => {
  if (to.path !== '/login' && !isUserLoggedIn()) {
    next('/login');
  } else {
    next(); // 继续导航
  }
});

export default router;

// 模拟用户是否登录的函数，根据实际情况替换为真实逻辑
function isUserLoggedIn() {
  // 从 localStorage 中获取登录标识
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  // 返回登录状态
  return isLoggedIn === 'true';
}
