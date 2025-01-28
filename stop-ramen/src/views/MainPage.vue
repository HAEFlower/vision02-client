<template>
    <div class="main-container">
        <div class="header">
            <img :src="logo" alt="메인로고" />
            <div class="header-title">라면그만</div>
        </div>
    
        <div class="content">
            <TopBar @tabStatus="updateTabName"/>
            <SelectOptionPage />
        </div>
    </div>
</template>

<script setup>
import { useTabStore } from '@/stores/TabStore';
import TopBar from '@/components/TopBar.vue'
import logo from '@/assets/ramen-logo.svg'
import SelectOptionPage from './SelectOptionPage.vue';

const tabStore = useTabStore(); 

const updateTabName = (newTabName) => {
    tabStore.updateTabName(newTabName); 
}
</script>

<style scoped>
.main-container {
    width: 100%;
    height: 100%;
}

.header {
    padding: 15px 20px 15px 25px;
    display: flex;
    flex-direction: row;
    align-items: center;
}

.header-title {
    font-size: 23px;
    margin-left: 10px;
    font-weight: 600;
}

.content {
    padding: 5px;
}
</style>
