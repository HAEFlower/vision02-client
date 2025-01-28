import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTabStore = defineStore('tab', () => {
  const currentTab = ref('refrigeratorAI')

  const updateTabName = (newTabName) => {
    currentTab.value = newTabName
  }

  return { currentTab, updateTabName }
})
