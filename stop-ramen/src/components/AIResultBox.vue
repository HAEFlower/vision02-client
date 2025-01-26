<template>
    <div class="result-box-container">
        <div class="result-box-header">
            <img :src="headerIcon" class="icon" width="20px" height="20px" />
            <div class="result-title">{{ props.recipeName }}</div>
        </div>
        <div class="result-box-content">
            <div class="result-box-time">15분</div>
            <div class="recipe-btn">> 레시피 확인하기</div>
        </div>
    </div>
</template>

<script setup>
import headerIcon from '@/assets/food-icon.png'

const props = defineProps({
    recipeName: {
        type: String,
        default: ""
    }
})
</script>

<style scoped>
.result-box-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: white;
    border-radius: 10px;
    margin-bottom: 10px;
    justify-content: space-between;
    padding: 13px 14px;
}

.result-box-header {
    display: flex;
    flex-direction: row;
    margin-bottom: 15px;

}

.result-title {
    margin-top: 12px;
    margin-left: 7px;
    line-height: 0%;
    font-weight: 600;
}

.result-box-content {
    display: flex; 
    flex-direction: row;    
    justify-content: space-between;
}

.result-box-time {
    justify-content: center; 
    background-color: #FF9A77; 
    padding-inline: 12px;
    padding-block: 7px;
    border-radius: 7px;
    margin-left: 4px;
    font-size: 14px;

}

.recipe-btn {
    align-content: center;
    font-size: 12px;
    margin-right: 5px;
    color: #6B6B6C;
}
</style>