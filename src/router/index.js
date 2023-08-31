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
    },
    {
      path: '/fatorial',
      name: 'fatorial',
      component: () => import("../Fatorial.vue")
    },
    {
      path: '/media',
      name: 'media',
      component: () => import("../Media.vue")
    },
    {
      path: '/parImpar',
      name: 'parImpar',
      component: () => import("../ParImpar.vue")
    },
    {
      path: '/potencia',
      name: 'potencia',
      component: () => import("../Potencia.vue")
    },
    {
      path: '/primo',
      name: 'primo',
      component: () => import("../Primo.vue")
    },
    {
      path: '/raizCubica',
      name: 'raizCubica',
      component: () => import("../RaizCubica.vue")
    },
    {
      path: '/raizQuadrada',
      name: 'raizQuadrada',
      component: () => import("../RaizQuadrada.vue")
    },
    {
      path: '/somaImpares',
      name: 'somaImpares',
      component: () => import("../SomaImpares.vue")
    },
    {
      path: '/somaPares',
      name: 'somaPares',
      component: () => import("../SomaPares.vue")
    },
    {
      path: '/termial',
      name: 'termial',
      component: () => import("../Termial.vue")
    },
  ]
})

export default router