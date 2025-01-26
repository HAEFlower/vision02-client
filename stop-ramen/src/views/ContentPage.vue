<template>
    <div>
        <SelectOptionPage/>
    </div>
</template>

<script setup>
import SelectOptionPage from './SelectOptionPage.vue'
import { usePageStore } from '../stores/PageStore';

const store = usePageStore();

const navigateTo = (page) => {
  store.setCurrentPage(page); 
}
</script>

<style scoped>
    
</style> 