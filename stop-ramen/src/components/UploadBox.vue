<template>
    <div class="upload-container">
        <!-- 이미지 업로드 버튼 -->
        <div class="uploadButton" v-if="!modelValue" @click="triggerFileInput">
            <img :src="uploadIcon" alt="이미지 업로드" class="img" />
        </div>
    
        <!-- 업로드된 이미지 미리보기 -->
        <div class="uploadImage" v-else @mouseover="hover = true" @mouseleave="hover = false">
            <img :src="thumbnailImage" alt="Uploaded Image" class="preview-img" :class="{ hovered: hover }" />
            <div class="deleteIcon">
                <img :src="deleteIcon" alt="Delete Image" class="icon" @click="deleteImage" />
            </div>
        </div>
    
        <!-- 숨겨진 파일 입력 -->
        <input ref="fileInput" type="file" @change="handleFileChange" accept="image/*" style="display: none" />
    </div>
</template>

<script setup>
import uploadIcon from '@/assets/ramen-upload-icon.svg'
import deleteIcon from "@/assets/ramen-delete.svg";
import { ref, defineProps, defineEmits } from "vue";

const props = defineProps({
    modelValue: File || null,
});
const emit = defineEmits(["update:modelValue"]);

const fileInput = ref(null);
const hover = ref(false);

const thumbnailImage = ref(null);
// 이미지 삭제 함수
const deleteImage = () => {
    emit("update:modelValue", null); // 부모 컴포넌트로 null 값 전달
    fileInput.value.value = ""; // input 초기화
    thumbnailImage.value = null; // 이미지 주소 초기화
};

// 파일 입력 트리거
const triggerFileInput = () => {
    fileInput.value.click();
};

// 파일 변경 핸들러
const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
        console.log("Selected file in UploadThumbnail:", file); // 파일 객체 확인
        emit("update:modelValue", file); // 부모 컴포넌트로 파일 객체 전달
        thumbnailImage.value = URL.createObjectURL(file);
    } else {
        alert("Please select a valid image file.");
    }
};
</script>

<style scoped>
.upload-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
}

.uploadButton {
    width: 150px;
    height: 150px;
    background-color: #FFFFFF;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.img {
    width: 50%;
    height: 50%;
    border-radius: 12px;
}

.uploadImage {
    width: 150px;
    height: 150px;
    border-radius: 12px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}

.preview-img {
    width: 100%;
    height: 100%;
    transition: opacity 0.3s;
    border-radius: 12px;
}

.preview-img.hovered {
    cursor: pointer;
}

.deleteIcon {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 40px;
    height: 40px;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: background-color 0.2s, transform 0.2s;
}

.deleteIcon:hover {
    background-color: rgba(255, 0, 0, 0.8);
    transform: scale(1.1);
}

.icon {
    width: 24px;
    height: 24px;
    cursor: pointer;
    filter: contrast(90%);
}
</style>
