import { createRouter, createWebHistory } from '@ionic/vue-router';
import HomePage from '../pages/HomePage.vue';
import NoticiasPage from '../pages/NoticiasPage.vue';
import EventosPage from '../pages/EventosPage.vue';
import GaleriaPage from '../pages/GaleriaPage.vue';
import LoginPage from '../pages/LoginPage.vue';
import RegistroPage from '../pages/RegistroPage.vue';
import ComentarioPage from '../pages/ComentarioPage.vue';

const routes = [
  {
    path: '/',
    redirect: '/inicio'
  },
  {
    path: '/inicio',
    component:  HomePage
  },
  {
    path: '/noticias',
    component:  NoticiasPage
  },
  {
    path: '/eventos',
    component:  EventosPage
  },
  {
    path: '/galeria',
    component:  GaleriaPage
  },
  {
    path: '/login',
    component:  LoginPage
  },
  {
    path: '/registro',
    component:  RegistroPage
  },
  {
    path: '/comentario',
    component:  ComentarioPage
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
