<template>
    <div class="option-container">
        <UploadBox v-model="imageData" />
        <QuestionBox @selected="handleSelected"/>
        <div class="btn-container">
            <button class="btn" @click="postAiRecipe">추천받기</button>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { usePageStore } from '../stores/PageStore';
import UploadBox from '@/components/UploadBox.vue';
import QuestionBox from "@/components/QuestionBox.vue";
import { postIngredients, postReceipt } from "../services/apis";
import { useTabStore } from '@/stores/TabStore';

const tabStore = useTabStore();
const store = usePageStore(); 
const imageData = ref(null);
const cookingMethod = ref(null);
const cookingGoal = ref(null);


const handleSelected = ({ selectedTypeLabel, selectedPurposeLabel }) => {
    cookingMethod.value = selectedTypeLabel;
    cookingGoal.value = selectedPurposeLabel;
}

const postAiRecipe = async () => {
    try {
        const formData = new FormData();
        var response;

        formData.append("cookingGoal", cookingGoal.value);
        formData.append("cookingMethod", cookingMethod.value);
        if (imageData.value instanceof File) {
            formData.append("file", imageData.value); 
        } else {
            console.warn("image가 객체 형태가 아님");
        }

        if(tabStore.currentTab == 'refrigeratorAI') {
            response = await postIngredients(formData);
        } else {
            response = await postReceipt(formData);
        }

        if (response.status === 200) {
            console.log("response:::",response.data)
            store.setCurrentPage('AI_RESULT', response.data); 
        } else {
            alert(
                "식재료 이미지 post 실패: " +
                    (response.data.message || "알 수 없는 오류")
            );
        }
    } catch (error) {
        console.error(
            "식재료 이미지 post 실패:",
            error.response?.data || error.message
        );
        alert("식재료 이미지 post 중 문제가 발생했습니다. 다시 시도해주세요.");
    }
};



</script>

<style scoped>
.option-container {
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
    font-size: 16rem;
    width: 60%;
    height: 50px;
    font-size: 20px;
}
</style>