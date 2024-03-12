import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/cadastro',
    name: 'cadastro',
    component: () => import('../views/CadastroResponsavel.vue')
  },
  {
    path: '/home',
    name: 'home-login',
    component: () => import('../views/HomeLogin.vue')
  },
  {
    path: '/login-dependente',
    name: 'login-dependente',
    component: () => import('../views/LoginDependente.vue')
  },
  {
    path: '/conta',
    name: 'conta',
    component: () => import('../views/Conta.vue')
  }, 
  {
    path: '/cadastro-dependente',
    name: 'cadastro-dependente',
    component: () => import('../views/CadastroDependente.vue')
  },
  {
    path: '/cadastro-atividade',
    name: 'cadastro-atividade',
    component: () => import('../views/CadastroAtividade.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
