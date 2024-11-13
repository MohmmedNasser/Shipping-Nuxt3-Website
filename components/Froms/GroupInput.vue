<template>
    <div>
        <label
            class="inline-block text-[14px] font-bold mb-[10px] ps-[10px] relative after:absolute after:top-[8px] after:start-0 after:w-[5px] after:h-[5px] after:bg-[#F8A300] after:rounded-full">
            {{ labelText }}
        </label>
        <div class="input-group-box">
            <input :type="`${type}`" class="form-control" :placeholder="placeholder" v-model="modelValue">
            <span class="input-group-text">{{ groupText }}</span>
        </div>
    </div>
</template>

<script setup lang="ts">


const props = defineProps<{
    labelText?: String,
    type: String,
    placeholder?: String,
    groupText?: String,
}>();

const modelValue = defineModel();

</script>

<style scoped lang="scss">
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

/* Firefox */
input[type=number] {
    -moz-appearance: textfield;
    appearance: textfield;
}

.input-group-box {
    position: relative;

    .form-control {
        padding-inline-end: 70px;
    }

    .input-group-text {
        display: flex;
        align-items: center;
        line-height: 1.5;
        text-align: center;
        white-space: nowrap;
        position: absolute;
        inset-inline-end: 12px;
        top: 5px;
        border-inline-start: 1px solid #B4B4B4;
        color: #B4B4B4;
        font-size: 14px;
        font-weight: 500;
        padding-inline-start: 11.5px;
        height: 34px;
    }
}
</style>