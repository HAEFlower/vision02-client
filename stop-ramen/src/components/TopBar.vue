<template>
    <div class="topbar-container">
        <div class="topbar">
            <div class="topbar-tabs">
                <div class="tab" :class="{ active: tabName === 'refrigeratorAI' }" @click="setTab('refrigeratorAI')">냉장고 털기</div>
                <div class="tab" :class="{ active: tabName === 'receiptAI' }" @click="setTab('receiptAI')">영수증</div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, defineEmits } from "vue";

const emit = defineEmits(["tabStatus"]);
const tabName = ref("refrigeratorAI");
const setTab = (name) => {
    tabName.value = name;
    emit("tabStatus", tabName.value);

}
</script>

<style scoped>
.topbar-container {
    display: flex;
    justify-content: center;
}

.topbar {
    display: flex;
    justify-content: space-around;
    background-color: #FFFFFF;
    border-radius: 13px;
    width: 80%;
    padding-block: 15px;
    overflow: hidden;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.06), 0 3px 6px rgba(0, 0, 0, 0.09);
}

.topbar-tabs {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-inline: 30px;
}

.tab {
    cursor: pointer;
    color: gray;
    transition: all 0.15s ease;
}

.tab.active {
    font-weight: bold;
    color: black;
}
</style>