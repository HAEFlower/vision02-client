<template>
    <div class="detail-box-container">
        <div class="detail-header">
            <div class="detail-title">{{  selectedRecipe.recipeTitle }}</div>
            <div class="detail-desc">{{ selectedRecipe.recipeDesc }}</div>
        </div>
    
        <div class="detail-content">
            <div class="detail-subtitle">재료</div>
            <div v-for="(recipe, index) in selectedRecipe.ingredientsUsed" :key="index" class="detail-item">
                <div>⚫️ {{ recipe }}</div>
            </div>
    
            <div class="detail-subtitle">조리방법</div>
            <div v-for="(recipe, index) in selectedRecipe.steps" :key="index" class="detail-item step">
                <div>{{ recipe }}</div>
            </div>
    
        </div>
    
    </div>
</template>

<script setup>
import { usePageStore } from '../stores/PageStore';

const store = usePageStore(); 
const selectedRecipe = store.detailData;
</script>

<style scoped>
.detail-box-container {
    border-radius: 10px;
    background-color: white;
    padding: 25px 30px;
}

.detail-title {
    font-size: 25px;
    font-weight: 700;
}

.detail-desc {
    font-size: 14px;
    color: #9A9A9A;
    margin-top: 28px;
    line-height: 20px;
}

.detail-header {
    margin-bottom: 12px;
}

.detail-subtitle {
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 15px;
    margin-top: 40px;
}

.detail-item {
    font-size: 15px;
    margin-bottom: 12px;
}

.step {
    line-height: 22px;

}
</style>