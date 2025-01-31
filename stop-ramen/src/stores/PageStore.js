import { defineStore } from 'pinia'

export const usePageStore = defineStore('page', {
  state: () => ({
    currentPage: 'SELECT_OPTION',
    pageData: null,
    detailData: null,
    selectedRecipeName: null,
  }),
  actions: {
    setCurrentPage(page, data) {
      this.currentPage = page
      if (page == 'AI_RESULT') {
        this.pageData = data
      } else {
        this.detailData = data
      }
    },
    resetData() {
      this.pageData = null
      this.detailData = null
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
