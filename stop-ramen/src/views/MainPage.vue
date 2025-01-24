<template>
    <div class="container">
        <div class="header">
            <img :src="logo" alt="메인로고" />
            <div class="header-title">라면그만</div>
        </div>
        
        <div class="content">
            <TopBar/>
            <SelectOptionPage />
        </div>
    </div>
</template>

<script setup>
import TopBar from '@/components/TopBar.vue';
import logo from '@/assets/ramen-logo.svg';
import SelectOptionPage from './SelectOptionPage.vue';
</script>

<style>
.header {
    padding: 20px 20px 15px 25px;
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
    padding: 16px;
}
</style>