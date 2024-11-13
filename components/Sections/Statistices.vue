<template>
    <section class="relative z-[4]">
        <div class="container">
            <div
                class="statistices-wrop border border-solid border-[#e6e6e64d] rounded-[30px] md:rounded-[74px] drop-shadow-[0_6px_6px_rgba(0,0,0,0.16) py-[17px] px[42px] mt-[30px] md:-mt-[137px] flex flex-col md:flex-row items-center overflow-hidden gap-[20px] md:gap-0">
                <div v-for="(statistice, i) in statistices" :key="i"
                    class="flex items-center justify-center gap-[11.6px] md:border-e-[1px] md:border-solid md:border-[#e6e6e680] last:border-e-0 flex-shrink-0 flex-grow basis-auto border-b-[1px] border-solid border-[#e6e6e64d] md:border-b-0 last:border-b-0 transition duration-[300s] pb-[15px] md:pb-0 w-full md:w-auto">
                    <div v-html="statistice.svg"></div>
                    <div class="leading-[1.2]">
                        <p class="text-[20px] md:text-[25px] text-white font-bold transition duration-[300s]">
                            {{
                                statistice.number }}</p>
                        <span class="text-[14px] lg:text-[16px] text-white transition duration-[300s] ">
                            {{ locale == 'ar' ? statistice.name_ar : statistice.name_en }}
                        </span>
                    </div>
                </div>
            </div>
        </div>

    </section>
</template>

<script setup lang="ts">

// import { useI18n } from 'vue-i18n'
const { locale } = useI18n();

const statistices = ref([
    {
        name_ar: 'التجار',
        name_en: 'Traders',
        number: '15,7609',
        svg: ` <svg xmlns="http://www.w3.org/2000/svg" class="w-[40px] lg:w-auto" width="49.609" height="49.609" viewBox="0 0 49.609 49.609">
        <g id="profile-2user" transform="translate(1.25 1.25)">
            <g id="vuesax_broken_profile-2user" data-name="vuesax/broken/profile-2user">
            <g id="profile-2user-2" data-name="profile-2user">
                <path id="Vector" d="M15.938,3.847A8.7,8.7,0,0,1,9.029,17.411a3.568,3.568,0,0,0-.648,0A8.708,8.708,0,0,1,8.715,0" transform="translate(8.952 3.926)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" stroke-dasharray="0 0"/>
                <path id="Vector-2" data-name="Vector" d="M.255,0a6.865,6.865,0,0,1,6.87,6.87A6.88,6.88,0,0,1,.51,13.74a2.217,2.217,0,0,0-.51,0" transform="translate(31.954 7.851)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" stroke-dasharray="0 0"/>
                <path id="Vector-3" data-name="Vector" d="M3.563,14.216c5.4,3.612,14.25,3.612,19.648,0,4.75-3.18,4.75-8.362,0-11.522C17.833-.9,8.98-.9,3.563,2.694-1.188,5.874-1.188,11.056,3.563,14.216Z" transform="translate(4.604 25.885)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" stroke-dasharray="0 0"/>
                <path id="Vector-4" data-name="Vector" d="M0,11.777a9.495,9.495,0,0,0,3.847-1.708,4.972,4.972,0,0,0,0-8.381A9.762,9.762,0,0,0,.059,0" transform="translate(35.999 27.48)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" stroke-dasharray="0 0"/>
                <path id="Vector-5" data-name="Vector" d="M47.109,0V47.109H0V0Z" fill="none" stroke="#fff" stroke-width="2.5" opacity="0"/>
            </g>
            </g>
        </g>
        </svg>`
    },
    {
        name_ar: 'الشحنات',
        name_en: 'Shipments',
        number: '12,652',
        svg: `<svg id="vuesax_broken_truck-tick" data-name="vuesax/broken/truck-tick" xmlns="http://www.w3.org/2000/svg" class="w-[40px] lg:w-auto" width="46.749" height="46.749" viewBox="0 0 46.749 46.749">
        <g id="truck-tick">
            <path id="Vector" d="M25.322,19.479a3.907,3.907,0,0,1-3.9,3.9H0V10.947a7.6,7.6,0,0,0,6.019,2.688,7.486,7.486,0,0,0,5.064-2.065,6.6,6.6,0,0,0,1.5-1.85,7.6,7.6,0,0,0,1.052-4.052A7.758,7.758,0,0,0,10.986,0H25.322Z" transform="translate(3.896 3.896)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" stroke-dasharray="0 0"/>
            <path id="Vector-2" data-name="Vector" d="M34.692,0H32.179a1.948,1.948,0,0,0-1.948,1.948V7.791a1.948,1.948,0,0,0,1.948,1.948h5.844v5.844a5.844,5.844,0,0,1-5.844,5.844H30.231a3.9,3.9,0,1,0-7.791,0H14.648a3.9,3.9,0,1,0-7.791,0H4.909A5.844,5.844,0,0,1,0,18.758" transform="translate(4.831 17.531)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" stroke-dasharray="0 0"/>
            <path id="Vector-3" data-name="Vector" d="M0,17.531H21.427a3.907,3.907,0,0,0,3.9-3.9V0h3.584a4.013,4.013,0,0,1,1.967.526" transform="translate(3.896 9.739)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" stroke-dasharray="0 0"/>
            <path id="Vector-4" data-name="Vector" d="M3.9,7.791a3.9,3.9,0,1,1,3.9-3.9,3.9,3.9,0,0,1-3.9,3.9Z" transform="translate(11.687 35.062)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" stroke-dasharray="0 0"/>
            <path id="Vector-5" data-name="Vector" d="M3.9,7.791a3.9,3.9,0,1,1,3.9-3.9,3.9,3.9,0,0,1-3.9,3.9Z" transform="translate(27.27 35.062)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" stroke-dasharray="0 0"/>
            <path id="Vector-6" data-name="Vector" d="M7.791,9.739H1.948A1.948,1.948,0,0,1,0,7.791V1.948A1.948,1.948,0,0,1,1.948,0H4.461L7.791,5.844Z" transform="translate(35.062 17.531)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" stroke-dasharray="0 0"/>
            <g id="Group" transform="translate(1.942 1.946)">
            <path id="Vector-7" data-name="Vector" d="M14.534,11.67a6.6,6.6,0,0,1-1.5,1.85A7.486,7.486,0,0,1,7.97,15.583,7.6,7.6,0,0,1,1.949,12.9a6.818,6.818,0,0,1-.721-.954A7.53,7.53,0,0,1,0,7.969a7.793,7.793,0,1,1,15.583-.351,7.6,7.6,0,0,1-1.05,4.052Z" transform="translate(0.001 0)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3" stroke-dasharray="0 0"/>
            <path id="Vector-8" data-name="Vector" d="M0,2.065l1.967,1.87L6.038,0" transform="translate(4.757 5.787)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" stroke-dasharray="0 0"/>
            </g>
            <path id="Vector-9" data-name="Vector" d="M46.749,0V46.749H0V0Z" fill="none" opacity="0"/>
        </g>
        </svg>`
    },
    {
        name_ar: 'الطرود',
        name_en: 'Parcels',
        number: '10,956',
        svg: ` <svg xmlns="http://www.w3.org/2000/svg" class="w-[40px] lg:w-auto" width="53.922" height="53.922" viewBox="0 0 53.922 53.922">
        <g id="_3d-square" data-name="3d-square" transform="translate(1.25 1.25)">
            <path id="Vector" d="M0,25.711v2.143c0,10.713,4.285,15,15,15H27.853c10.713,0,15-4.285,15-15V15c0-10.713-4.285-15-15-15H15C4.285,0,0,4.285,0,15" transform="translate(4.285 4.285)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" stroke-dasharray="0 0"/>
            <g id="Group" transform="translate(13.37 12.848)">
            <g id="Group-2" data-name="Group" transform="translate(0.988 6.993)">
                <path id="Vector-2" data-name="Vector" d="M0,0,11.356,6.578,22.625.043" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" stroke-dasharray="0 0"/>
                <path id="Vector-3" data-name="Vector" d="M0,11.677V0" transform="translate(11.357 6.556)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" stroke-dasharray="0 0"/>
            </g>
            <path id="Vector-4" data-name="Vector" d="M2.828,4.443A6.094,6.094,0,0,0,0,9.243v7.263a6.039,6.039,0,0,0,2.828,4.8l6.856,3.814a6.132,6.132,0,0,0,5.335,0l6.856-3.814a6.094,6.094,0,0,0,2.828-4.8V9.221a6.039,6.039,0,0,0-2.828-4.8L15.019.608A6.06,6.06,0,0,0,9.684.629Z" transform="translate(0 0)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" stroke-dasharray="0 0"/>
            </g>
            <path id="Vector-5" data-name="Vector" d="M51.422,0V51.422H0V0Z" fill="none" stroke="#fff" stroke-width="2.5" opacity="0"/>
        </g>
        </svg>`
    },
    {
        name_ar: 'طلبات الشراء',
        name_en: 'Shopper Orders',
        number: '10,956',
        svg: `  <svg xmlns="http://www.w3.org/2000/svg" class="w-[40px] lg:w-auto" width="46.46" height="46.459" viewBox="0 0 46.46 46.459">
        <g id="bag-tick" transform="translate(1.5 1.5)">
            <g id="vuesax_broken_bag-tick" data-name="vuesax/broken/bag-tick">
            <g id="bag-tick-2" data-name="bag-tick">
                <path id="Vector" d="M0,2.716,2.716,5.432,8.6,0" transform="translate(17.418 26.257)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" stroke-dasharray="0 0"/>
                <path id="Vector-2" data-name="Vector" d="M6.555,0,0,6.573" transform="translate(9.397 3.622)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3" stroke-dasharray="0 0"/>
                <path id="Vector-3" data-name="Vector" d="M0,0,6.555,6.573" transform="translate(27.505 3.622)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3" stroke-dasharray="0 0"/>
                <path id="Vector-4" data-name="Vector" d="M4.02,0H32.2c2.227,0,4.02.272,4.02,3.622,0,3.893-1.793,3.622-4.02,3.622H4.02C1.793,7.243,0,7.515,0,3.622,0,.272,1.793,0,4.02,0Z" transform="translate(3.622 10.593)" fill="none" stroke="#fff" stroke-width="3" stroke-dasharray="0 0"/>
                <path id="Vector-5" data-name="Vector" d="M0,15.645c.579,3.513,1.974,6.084,7.153,6.084H18.072c5.632,0,6.465-2.463,7.116-5.867L28.231,0" transform="translate(8.891 18.108)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="3" stroke-dasharray="0 0"/>
                <path id="Vector-6" data-name="Vector" d="M0,0,1.249,7.7" transform="translate(6.338 18.108)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="3" stroke-dasharray="0 0"/>
                <path id="Vector-7" data-name="Vector" d="M43.459,0V43.459H0V0Z" fill="none" stroke="#fff" stroke-width="3" opacity="0"/>
            </g>
            </g>
        </g>
    </svg>`
    },
])
</script>

<style scoped lang="scss">
.statistices-wrop {
    background: linear-gradient(to top, rgba(255, 255, 255, 0.1), rgba(249, 249, 249, 0.1));
    backdrop-filter: opacity(1) brightness(1.1) blur(30px);

    @media (max-width: 767px) {
        background: transparent linear-gradient(45deg, #245955 20%, #275D59 24%, #35746E 45%, #3E827B 66%, #41877F 83%) 0% 0% no-repeat padding-box;
        backdrop-filter: none;
    }

}
</style>