import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import PortfolioPage from '../views/PortfolioPage.vue'
import ScssView from '../views/PortfolioPage.vue'
import JsView from '../views/PortfolioPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
    meta: {
      title: 'На главную',
      spinner: true,
      duration: 1500
    },
    children: [
      { path: 'scss', component: ScssView }, // default tab that shows on /about route
      { path: 'js', component: JsView}
    ]
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: PortfolioPage,
    meta: {
      title: 'В портфолио',
      spinner: true,
      duration: 500
    }
  },
  {
    path: '/blog',
    name: 'blog',
    component: PortfolioPage,
    meta: {
      title: 'Блог',
      spinner: true,
      duration: 500
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router
