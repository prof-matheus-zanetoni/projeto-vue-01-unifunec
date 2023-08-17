import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import("../Home.vue")
    },
    {
      path: '/soma',
      name: 'soma',
      component: () => import("../Soma.vue")
    },
    {
      path: '/subtracao',
      name: 'subtracao',
      component: () => import("../Subtracao.vue")
    },
    {
      path: '/multiplicacao',
      name: 'multiplicacao',
      component: () => import("../Multiplicacao.vue")
    },
    {
      path: '/divisao',
      name: 'divisao',
      component: () => import("../Divisao.vue")
    }
  ]
})

export default router