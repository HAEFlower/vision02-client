import { defineStore } from 'pinia'

export const usePageStore = defineStore('page', {
  state: () => ({
    currentPage: 'SELECT_OPTION',
    pageData: null,
    selectedRecipeName: null,
  }),
  actions: {
    setCurrentPage(page, data) {
      this.currentPage = page
      this.pageData = data
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
