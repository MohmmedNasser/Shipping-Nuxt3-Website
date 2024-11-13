<template>

    <div class="relative" ref="dropdownRef">
        <button @click="menuActive = !menuActive"
            class="p-0 w-[31px] h-[31px] rounded-full border border-solid border-[#E6E6E6] flex flex-col justify-center items-center"
            type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <span class="text-white text-[12px] uppercase font-bold">
                {{ locale }}
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" width="7.926" height="4.454" viewBox="0 0 7.926 4.454">
                <path id="Vector" d="M0,0,3.256,3.247,6.512,0" transform="translate(0.707 0.707)" fill="none"
                    stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                    stroke-dasharray="0 0" />
            </svg>
        </button>
        <ul class="shadow-sm min-w-[150px] py-[5px] absolute top-[115%] end-0 bg-white rounded-lg"
            :class="menuActive ? 'block' : 'hidden'">
            <li v-for="(item, index) in items" :key="index">
                <a class="py-[4px] px-[16px] block w-full font-normal hover:bg-gray-100 transition duration-[300ms]"
                    href="#" @click.prevent="changeLanguage(item.val)">
                    {{ item.title }}
                </a>
            </li>
        </ul>
    </div>

</template>

<script setup>
import { onClickOutside } from '@vueuse/core';


const items = [
    { val: 'ar', title: 'AR' },
    { val: 'en', title: 'EN' },
];

const menuActive = ref(false);
const dropdownRef = ref(null);

const { locale, setLocale } = useI18n();

onClickOutside(dropdownRef, () => {
    menuActive.value = false;
});

const changeLanguage = (locale) => {
    setLocale(locale);
    menuActive.value = false;
}
</script>

<style lang="scss"></style>
