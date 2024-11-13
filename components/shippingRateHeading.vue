<template>
    <div class="mb-[15px] md:mb-[20px] flex items-center gap-[6.4px]">
        <slot name="icon" />
        <h5 class="mb-0 text-[#3D8D89] font-bold text-base">{{ title }}</h5>
        <span class="text-[14px] font-semibold text-[#B4B4B4]" v-if="spanText">
            {{ spanText }}
        </span>
    </div>
</template>

<script setup lang="ts">

defineProps<{
    title: string,
    spanText?: string
}>()

</script>

<style scoped></style>