<template>
    <div class="count-number">
        <h3>{{ count }}</h3>
        <button @click="useCount.countAdd">加数</button>
        <br>
        <button @click="useCount.countSub">减数</button>
    </div>
</template>

<script setup lang="ts" name="Count">
    import { useCountStore } from '@/store/useCount';
    import { storeToRefs } from 'pinia';

    const useCount = useCountStore()
    const {count} = storeToRefs(useCount)
</script>

<style scoped></style>