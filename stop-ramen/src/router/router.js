import { createWebHistory, createRouter } from 'vue-router'
import MainPage from '../views/MainPage.vue'
import RecommendResultPage from '@/views/AIResultPage.vue'
import SelectOptionPage from '@/views/SelectOptionPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: MainPage },
    {
      path: '/ai-result',
      component: RecommendResultPage,
      props: true,
    },
    {
      path: '/select-option',
      component: SelectOptionPage,
      props: true,
    },
    // {
    //     path: '/receipt-ai',
    //     component: ReceptPage,
    //     props: true,
    //   }
  ],
})

export default router
