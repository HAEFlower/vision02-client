<template>
    <div class="option-label" :style="labelStyle">
        {{ labelName }}
    </div>
</template>

<script setup>
import { computed } from 'vue';
const props = defineProps({
    labelName: {
        type: String,
        default: ""
    },
    isSelected: { 
        type: Boolean,
        default: false
    }
})

const labelStyle = computed(() => ({
    backgroundColor: props.isSelected ? '#000000' : '#FFFFFF',
    color: props.isSelected ? '#FFFFFF' : '#000000',
    borderRadius: '8px',
    padding: '15px 18px',
    marginRight: '10px',
}))

</script>

<style scoped>
.option-label {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    font-weight: bold;
    white-space: nowrap;
    height: 24px;
    width: auto;
    overflow: hidden;
    cursor: pointer;
}
</style>