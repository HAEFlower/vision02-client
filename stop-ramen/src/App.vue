<template>
    <div>
        <RouterView :key="currentRoute" />
    </div>
</template>

<script setup>
import { computed, watch } from 'vue';
import { usePageStore } from './stores/PageStore';
import { useRouter } from 'vue-router';

const store = usePageStore();
const router = useRouter();

const currentRoute = computed(() => store.getCurrentRoute());

watch(currentRoute, (newRoute) => {
    router.push(newRoute);
});
</script>

<style>
#app {
    background-color: #F2F2F2;
    width: 100vw;
    height: 100vh;
}
</style>