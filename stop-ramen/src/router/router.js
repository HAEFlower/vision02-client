import { createWebHistory, createRouter } from 'vue-router'
import MainPage from '../views/MainPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: MainPage },
    // {
    //   path: '/refrigeratorAI',
    //   component: RefrigeratorPage,
    //   props: true,
    // },
    // {
    //     path: '/receiptAI',
    //     component: ReceptPage,
    //     props: true,
    //   }
  ],
})

export default router
