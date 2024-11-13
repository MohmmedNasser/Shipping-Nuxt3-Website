<template>
    <div>
        <label
            class="inline-block text-[14px] font-bold mb-[10px] ps-[10px] relative after:absolute after:top-[8px] after:start-0 after:w-[5px] after:h-[5px] after:bg-[#F8A300] after:rounded-full">
            {{ labelText }}
        </label>
        <input type="text" :disabled="disabled" class="form-control" :value="value" :placeholder="placeholder">
    </div>
</template>

<script setup lang="ts">

defineProps<{
    labelText?: string,
    disabled?: boolean,
    value?: string,
    placeholder?: string,
}>();

</script>

<style lang="scss">
.form-control,
.form-select {
    border-radius: 23px;
    border: 1px solid #E6E6E6;
    height: 45px;
    padding: 10px 16px;
    background: #F7F7F7;
    font-size: 14px;
    font-weight: 500;
    outline: none;
    display: block;
    width: 100%;
    appearance: none;
    -webkit-appearance: none;
    line-height: 1.5;

    &::placeholder {
        font-size: 14px;
        font-weight: 500;
        color: #B4B4B4;
    }

    &:disabled {
        user-select: none;
        pointer-events: none;
        color: #B4B4B4;
    }
}
</style>
