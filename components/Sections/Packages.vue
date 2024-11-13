<template>
    <section class="pt-[50px] lg:pt-[104px] mb-[50px] lg:mb-[122px] relative">
        <div class="container">

            <div class="section-title centered">
                <h5>
                    <span class="title">{{ $t("header.packages") }}</span>
                    <span class="text-pattern left-[49%] top-[-136%] translate-x-[-50%]">{{ $t("header.packages")
                        }}</span>
                </h5>

                <NuxtLink to="/pricing" class="main-btn min-w-[202px] py-[8px] px-[50px] font-bold mt-[20px]">
                    <span>{{ $t("compare_the_packages") }}</span>
                </NuxtLink>
            </div>

            <div
                class="flex items-center flex-col lg:flex-row justify-center gap-[30px] lg:gap[44px] mt-[50px] mx-auto mb-0">
                <div v-for="packageItem in packageList" :key="packageItem.id"
                    class="w-full lg:w-[459px] rounded-[30px] shadow-[0_0_30px_rgba(0,0,0,0.10)] bg-white p-[15px] md:py-[18px] md:px-[27px] relative overflow-hidden"
                    :style="[packageItem.name === 'cheapest' ? { background: 'linear-gradient(to right, #245955 0, #245955 20%, #275D59 25%, #35746E 50%, #3E827B 65%, #41877F 75%, #41877F 100%)' } : '']">

                    <div class="flex items-center justify-center">
                        <span
                            class="text-[14px] font-bold px-[23px] py-[6px] text-white rounded-[30px] drop-shadow-[0_0_30px_rgba(0,0,0,0.10)]"
                            :style="[packageItem.name === 'free' ? { background: 'transparent linear-gradient(90deg, #245955 20%, #275D59 24%, #35746E 45%, #3E827B 66%, #41877F 83%) 0% 0% no-repeat padding-box' } : { background: 'transparent linear-gradient(216deg, #F8A300 0%, #EBBB38 10%, #F8A300 22%, #EBBB38 100%) 0% 0% no-repeat padding-box', filter: 'none' }]">
                            <template v-if="packageItem.name === 'free'">
                                {{ $t("free_package") }}
                            </template>
                            <template v-else>
                                {{ $t("merchant_package") }}
                            </template>
                        </span>
                    </div>
                    <div class="mt-[20px] flex justify-center items-center"
                        :class="[packageItem.name === 'cheapest' ? 'mt-[15px]' : '']">
                        <template v-if="packageItem.name === 'free'">
                            <h6 class="text-[40px] md:text-[46px] capitalize font-semibold mb-0">
                                {{ $t("free") }}
                            </h6>
                        </template>
                        <template v-else>
                            <h6 class="text-[40px] md:text-[46px] font-semibold mb-0 text-white">
                                199
                            </h6>
                            <span class="flex flex-col items-start gap-[7px]">
                                <sup class="text-[#EBBB38]">{{ $t("monthly") }}</sup>
                                <sub class="text-white">{{ $t("currancy") }}</sub>
                            </span>
                        </template>
                    </div>

                    <div class="flex justify-center items-center mt-[6px]" v-if="packageItem.name === 'cheapest'">
                        <span
                            class="bg-[#f7f7f70d] text-white flex justify-center items-center text-[12px] font-bold rounded-[91px] px-[20px] py-[6px]">
                            {{ $t("includes_tax") }}
                        </span>
                    </div>

                    <div :class="packageItem.name === 'cheapest' ? 'mt-[0]' : 'mt-[30px]'">
                        <ul class=" m-0 p-0">
                            <li v-for="item in packageItem.items" :key="item.id"
                                class=" flex items-center justify-between px-[12px] py-[11px] rounded-[91px] mb-[5px] last:mb-[0]"
                                :class="[packageItem.name === 'free' ? 'even:bg-[#F7F7F7]' : 'even:bg-[#f7f7f70d] text-white']">
                                <span class="text-[14px] font-semibold flex items-center gap-[10px] flex-shrink-0">
                                    <NuxtImg
                                        :src="packageItem.name === 'free' ? '/img/check-main.svg' : '/img/check-second.svg'"
                                        loading="lazy" :alt="packageItem.name" :title="packageItem.name">
                                    </NuxtImg>
                                    <span>
                                        {{ locale == 'ar' ? item.name_ar : item.name_en }}
                                    </span>
                                </span>
                                <span class="text-[14px] font-semibold flex items-center text-end">
                                    {{ locale == 'ar' ? item.value_ar : item.value_en }}
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div class="mt-[21.3px]">
                        <NuxtLink to="/pricing"
                            class="second-btn w-full gap-[12px] font-bold text-[16px] p-[11px] flex items-center justify-center">
                            <span>{{ $t("subscribe_package") }}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28">
                                <g id="arrow-circle-down" transform="translate(27.5 0.5) rotate(90)">
                                    <g id="vuesax_broken_arrow-circle-down" data-name="vuesax/broken/arrow-circle-down">
                                        <g id="arrow-circle-down-2" data-name="arrow-circle-down">
                                            <path id="Vector"
                                                d="M3.229,3.364A11.249,11.249,0,1,0,11.25,0,11.7,11.7,0,0,0,8.977.225"
                                                transform="translate(2.25 2.25)" fill="none" stroke="#fff"
                                                stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"
                                                stroke-width="2" stroke-dasharray="0 0" />
                                            <path id="Vector-2" data-name="Vector" d="M0,0,3.971,3.96,7.942,0"
                                                transform="translate(9.53 12.082)" fill="none" stroke="#fff"
                                                stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                stroke-dasharray="0 0" />
                                            <path id="Vector-3" data-name="Vector" d="M27,0V27H0V0Z" fill="none"
                                                stroke="#fff" stroke-width="1" opacity="0" />
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </NuxtLink>
                    </div>
                    <div class="absolute top-0 start-0 z-[-1] select-none w-[296px] lg:w-auto">
                        <NuxtImg src="/img/package-circle.svg" alt="" loading="lazy">
                        </NuxtImg>
                    </div>

                    <div v-if="packageItem.name === 'cheapest'"
                        class="absolute top-[15px] end-[31px] w-[66.05px] h-[66.05px] text-center px-[5px] pt-[7px] leading-[1.2] bg-[url('/img/offer-bg.svg')] bg-no-repeat">
                        <span class="text-[13px] ltr:text-[9px] text-[#29615C] font-semibold">
                            {{ $t("save_more_than") }}
                            <span class="text-[15px] ltr:text-[13px] text-[#ECB933]">%50</span>
                        </span>
                    </div>

                </div>

            </div>

        </div>
        <div
            class="hidden xl:block absolute top-[22%] start-0 select-none pointer-events-none z-[-1] ltr:[transform:rotateY(-180deg)]">
            <img src="/img/packages-circle.svg" :alt="$t('header.packages')" :title="$t('header.packages')"
                class="img-fluid" loading="lazy">
        </div>

        <div
            class="hidden xl:block absolute top-[10%] end-0 select-none pointer-events-none ltr:[transform:rotateY(-180deg)]">
            <img src="/img/packages-plane.svg" :alt="$t('header.packages')" :title="$t('header.packages')"
                class="img-fluid" loading="lazy">
        </div>

    </section>
</template>

<script setup lang="ts">
// import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n();

const packageList = ref([
    {
        id: 1,
        name: 'free',
        items: [
            { id: 1, name_ar: 'المستودعات', name_en: 'Warehouses', value_ar: 'الصين', value_en: 'China Warehouse' },
            { id: 2, name_ar: 'عدد عناوين الشحن', name_en: 'Shipping Address Count', value_ar: 'محدود', value_en: 'Limited' },
            { id: 3, name_ar: 'خدمة الشراء من الصين', name_en: 'Purchase service from China', value_ar: 'متوفر', value_en: 'Available' },
            { id: 4, name_ar: 'عمولة الشراء من الصين', name_en: 'Purchase commission from China', value_ar: '20%', value_en: '20%' },
            { id: 5, name_ar: 'خدمة الارجاع', name_en: 'return service', value_ar: 'غير متاح', value_en: 'Not available' },
            { id: 6, name_ar: 'نوع الشحن', name_en: 'Shipping type', value_ar: 'شحن جوي', value_en: 'Aerial' },
            { id: 7, name_ar: 'التخليص الجمركي', name_en: 'Customs clearance', value_ar: 'غير متاح', value_en: 'Not available' },
            { id: 8, name_ar: 'مدة التخزين', name_en: 'Storage period', value_ar: '10 ايام', value_en: '10 days' },
        ]
    },
    {
        id: 2,
        name: 'cheapest',
        items: [

            { id: 1, name_ar: 'المستودعات', name_en: 'Warehouses', value_ar: 'مستودع الصين', value_en: 'China Warehouse' },
            { id: 2, name_ar: 'عدد عناوين الشحن', name_en: 'Shipping Address Count', value_ar: 'غير محدود', value_en: 'Unlimited' },
            { id: 3, name_ar: 'خدمة الشراء من الصين', name_en: 'Purchase service from China', value_ar: 'متوفر', value_en: 'Available' },
            { id: 4, name_ar: 'عمولة الشراء من الصين', name_en: 'Purchase commission from China', value_ar: '5 %', value_en: '5%' },
            { id: 5, name_ar: 'خدمة الارجاع', name_en: 'return service', value_ar: 'متوفر', value_en: 'Available' },
            { id: 6, name_ar: 'نوع الشحن', name_en: 'Shipping type', value_ar: 'شحن جوي، شحن بحري', value_en: 'All companies' },
            { id: 7, name_ar: 'التخليص الجمركي', name_en: 'Customs clearance', value_ar: 'متوفر', value_en: 'Available' },
            { id: 8, name_ar: 'مدة التخزين', name_en: 'Storage period', value_ar: 'غير محدود', value_en: 'Unlimited' },
        ]
    }
]);

</script>

<style scoped></style>