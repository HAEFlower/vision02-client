<template>
    <div class="question-container">
        <div class="first-question">
            <div class="title">원하는 요리의 형태를 선택하세요</div>
            <div class="option-container">
                <div v-for="(label, index) in data.cookingTypes" :key="index" class="option-item">
                    <OptionLabel :labelName="label.typeName" @click="clickTypeLabel(label.typeName)" :isSelected="selectedTypeLabel == label.typeName" />
                </div>
            </div>
        </div>
    
        <div class="second-question">
            <div class="title">요리의 목적이 무엇인가요?</div>
            <div class="option-container">
                <div v-for="(label, index) in data.cookingPurposes" :key="index" class="option-item">
                    <OptionLabel :labelName="label.purposeName" @click="clickPurposeLabel(label.purposeName)" :isSelected="selectedPurposeLabel == label.purposeName" />
                </div>
            </div>
        </div>
    
    
    </div>
</template>

<script setup>
import { ref } from "vue";
import data from '@/services/dummydata.js';
import OptionLabel from './OptionLabel.vue';

const selectedTypeLabel = ref(null);
const selectedPurposeLabel = ref(null);

const clickTypeLabel = (label) => {
    selectedTypeLabel.value = label;
    console.log(selectedTypeLabel.value);
}

const clickPurposeLabel = (label) => {
    selectedPurposeLabel.value = label;
    console.log(selectedPurposeLabel.value);
}
</script>

<style scoped>
.question-container {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    padding-inline: 40px;
}

.title {
    font-weight: 600;
}

.option-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 15px;
}

.option-item {
    margin: 5px;
}

.first-question {
    margin-top: 30px;
}
.second-question {
    margin-top: 50px;
}
</style>