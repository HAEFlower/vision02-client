import { createWebHistory, createRouter } from 'vue-router'
import MainPage from '../views/MainPage.vue'
import AIResultPage from '@/views/AIResultPage.vue'
import SelectOptionPage from '@/views/SelectOptionPage.vue'
import RecipeDetailPage from '@/views/RecipeDetailPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: MainPage },
    {
      path: '/ai-result',
      component: AIResultPage,
      props: true,
    },
    {
      path: '/select-option',
      component: SelectOptionPage,
      props: true,
    },
    {
      path: '/recipe-detail',
      component: RecipeDetailPage,
      props: true,
    },
  ],
})

export default router
