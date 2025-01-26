<template>
    <div class="result-container">
        <div class="result-header">
            <img @click="goBack" :src="backIcon" class="back-icon" width="28px" height="28px" />
            <div class="result-title">AI 추천 결과</div>
        </div>
        <div class="result-content">
            <div class="result-desc">회원님이 가지고 있는 재료로 손쉽게 만들 수 있어요</div>
            <div v-for="(recipe, index) in resultData" :key="index" class="result-item">
                <AIResultBox :recipeName="recipe.recipeTitle" />
            </div>
        </div>
    
    </div>
</template>

<script setup>
import AIResultBox from '@/components/AIResultBox.vue';
import { resultData } from '@/services/dummydata';
import backIcon from '../assets/ramen-arrow.svg';
import { useRouter } from 'vue-router'; 

const router = useRouter();

const goBack = () => {
    router.back(); 
}
</script>

<style scoped>
.result-container {
    margin: 20px 15px;
}
.result-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.result-title {
    flex-grow: 1;
    text-align: center;
    font-size: 18px;
    font-weight: 500;
}

.result-content {
    margin-top: 30px;
    margin-left: 5px;
    padding-inline: 10px;
}

.result-desc {
    color: #9A9A9A;
    margin-bottom: 30px;
    font-size: 14px;
}

</style>