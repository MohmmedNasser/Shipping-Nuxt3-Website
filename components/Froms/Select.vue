<template>
    <div>
        <label
            class="inline-block text-[14px] font-bold mb-[10px] ps-[10px] relative after:absolute after:top-[8px] after:start-0 after:w-[5px] after:h-[5px] after:bg-[#F8A300] after:rounded-full">
            {{ labelText }}
        </label>
        <select class="form-select" v-model="modelValue">
            <option selected>{{ placeholder }}</option>
            <option v-for="(option, index) in selectOption" :key="index" :value="option.value">
                {{ locale == 'ar' ? option.text_ar : option.text_en }}
            </option>
        </select>
    </div>
</template>

<script setup lang="ts">

defineProps<{
    labelText: string,
    placeholder: string,
    selectOption: Object,
}>();

const modelValue = defineModel();
const { locale } = useI18n();

</script>

<style scoped lang="scss">
.form-select {
    position: relative;
    background-image: url('/img/arrow-down.svg');
    background-repeat: no-repeat;
    background-size: 18px 18px;
    background-position: 15px;
}

[dir=ltr] .form-select {
    background-position: 95%;
}
</style>
