<template>
    <v-layout class="container">    
        <v-main class="d-flex align-center justify-center" style="min-height: 120px;">
            Main Content
        </v-main>
    </v-layout>
</template>

<script setup>
import { onMounted } from 'vue'
import { useDisplay } from 'vuetify'

const { mobile } = useDisplay()

onMounted(() => {
    console.log(mobile.value) // false
})
</script>

<style>
.container {
    background-color: #F2F2F2;
}
</style>