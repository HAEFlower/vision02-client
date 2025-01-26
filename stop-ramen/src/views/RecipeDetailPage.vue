<template>
    <div class="detail-container">
        <div class="detail-header">
            <img @click="goBack" :src="backIcon" class="back-icon" width="28px" height="28px" />
            <div class="detail-title">레시피 정보</div>
        </div>
        <div class="detail-content">
            <RecipeDetailBox />
        </div>
    
    </div>
</template>

<script setup>
import backIcon from '../assets/ramen-arrow.svg';
import RecipeDetailBox from '@/components/RecipeDetailBox.vue';
import { useRouter } from 'vue-router'; 

const router = useRouter();

const goBack = () => {
    router.back(); 
}
</script>

<style scoped>
.detail-container {
    margin: 20px 15px;
}
.detail-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.detail-title {
    flex-grow: 1;
    text-align: center;
    font-size: 18px;
    font-weight: 500;
}

.detail-content {
    padding-inline: 25px;
    margin-top: 30px;
}
</style>