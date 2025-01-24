<template>
    <div class="container">
        <UploadBox v-model="imageData" />
        <QuestionBox/>
        <div class="btn-container">
            <button class="btn">추천받기</button>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import UploadBox from '@/components/UploadBox.vue';
import QuestionBox from "@/components/QuestionBox.vue";
const imageData = ref();

console.log("imageData::", imageData)
</script>

<style>
.container {
    margin-top: 30px;
    justify-content: space-around;
}

.upload-img {
    justify-content: center;
    background-color: white;
    border-radius: 24px;
    padding: 36px;
}

.btn-container {
    width: 100%;
    margin-top: 30px;
    display: flex; 
    justify-content: center;
}

.btn {
    background-color: #FA4A0C;
    color: #fff;
    border: none;
    border-radius: 15px;
    cursor: pointer;
    font-size: 16px;
    width: 60%;
    height: 50px;
    font-size: 20px;
}
</style>