import { defineStore } from 'pinia'

export const usePageStore = defineStore('page', {
  state: () => ({
    currentPage: 'SELECT_OPTION',
    selectedRecipeName: '',
  }),
  actions: {
    setCurrentPage(page) {
      this.currentPage = page
    },
    getCurrentRoute() {
      switch (this.currentPage) {
        case 'AI_RESULT':
          return '/ai-result'
        case 'SELECT_OPTION':
          return '/select-option'
        case 'RECIPE_DETAIL':
          return '/recipe-detail'
        default:
          return '/select-option'
      }
    },
  },
})
