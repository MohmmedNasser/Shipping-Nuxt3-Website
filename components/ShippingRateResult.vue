<template>
    <div
        class="mt-[30px] md:mt-[50px] flex flex-col items-start justify-between gap-[15px] md:flex-row md:items-center bg-[#F7F7F7] rounded-[28px] px-[23px] py-[12.5px]">
        <div class="flex items-center gap-[6.4px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25">
                <g id="buildings-2" transform="translate(0.5 0.5)">
                    <g id="vuesax_broken_buildings-2" data-name="vuesax/broken/buildings-2">
                        <g id="buildings-2-2" data-name="buildings-2">
                            <path id="Vector" d="M0,2.15A1.9,1.9,0,0,1,2.15,0h4.3A1.9,1.9,0,0,1,8.6,2.15V4"
                                transform="translate(2 2)" fill="none" stroke="#f8a300" stroke-linecap="round"
                                stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5"
                                stroke-dasharray="0 0" />
                            <path id="Vector-2" data-name="Vector" d="M4.7,9.96H2.15A1.9,1.9,0,0,1,0,7.81V0"
                                transform="translate(2 8.04)" fill="none" stroke="#f8a300" stroke-linecap="round"
                                stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5"
                                stroke-dasharray="0 0" />
                            <path id="Vector-3" data-name="Vector"
                                d="M10.67,13.58A2.135,2.135,0,0,1,8.26,16H2.42A2.142,2.142,0,0,1,0,13.58V2.42A2.142,2.142,0,0,1,2.42,0H8.26a2.135,2.135,0,0,1,2.41,2.42Z"
                                transform="translate(6.699 6)" fill="none" stroke="#f8a300" stroke-linecap="round"
                                stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5"
                                stroke-dasharray="0 0" />
                            <path id="Vector-4" data-name="Vector"
                                d="M0,4V2.15A1.9,1.9,0,0,1,2.15,0h4.3A1.9,1.9,0,0,1,8.6,2.15v11.7A1.9,1.9,0,0,1,6.45,16H3.97"
                                transform="translate(13.4 2)" fill="none" stroke="#f8a300" stroke-linecap="round"
                                stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5"
                                stroke-dasharray="0 0" />
                            <path id="Vector-5" data-name="Vector" d="M0,0H4" transform="translate(10 11)" fill="none"
                                stroke="#f8a300" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"
                                stroke-width="1.5" stroke-dasharray="0 0" />
                            <path id="Vector-6" data-name="Vector" d="M0,0H4" transform="translate(10 14)" fill="none"
                                stroke="#f8a300" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"
                                stroke-width="1.5" stroke-dasharray="0 0" />
                            <path id="Vector-7" data-name="Vector" d="M0,3V0" transform="translate(12 19)" fill="none"
                                stroke="#f8a300" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"
                                stroke-width="1.5" stroke-dasharray="0 0" />
                            <path id="Vector-8" data-name="Vector" d="M24,0V24H0V0Z" fill="none" stroke="#f8a300"
                                stroke-width="1" opacity="0" />
                        </g>
                    </g>
                </g>
            </svg>
            <span class="text-base font-bold text-[#3D8D89] mb-0">{{ $t('shipping_companies_prices') }}</span>
        </div>
        <div class="flex flex-wrap gap-[15px] md:flex-nowrap items-center md:gap-[27px]">
            <div class="flex items-center gap-[5px]">
                <label class="flex items-center gap-[5px]">
                    <img src="/img/kg.svg" alt="" class="img-fluid" loading="lazy">
                    <span class="text-[14px] font-bold text-[#3D8D89]"> {{ $t('actual_weight') }} :</span>
                </label>
                <p class="text-[14px] font-semibold">{{ $t('kg') }}</p>
            </div>
            <div class="flex items-center gap-[5px]">
                <label class="flex items-center gap-[5px]">
                    <img src="/img/kg.svg" alt="" class="img-fluid" loading="lazy">
                    <span class="text-[14px] font-bold text-[#3D8D89]"> {{ $t('volumetric_weight') }} :</span>
                </label>
                <p class="text-[14px] font-semibold">0.4692</p>
            </div>
        </div>
    </div>

    <div
        class="grid md:grid-cols-none lg:grid-cols-[repeat(auto-fit,_minmax(469px,_1fr))] gap-[20.6px] mt-[30px] md:mt-[40px]">
        <div
            class="bg-[#F7F7F7] leading-[23px] border border-solid border-[#E6E6E6] p-[15px] sm:pt-[12px] sm:pb-[16.6px] ms:ps-[21px] ms:pe-[19.5px] relative overflow-hidden weight w-full lg:w-auto">
            <div class="top flex items-center justify-between gap-[5px] mb-[13px] relative z-[2] flex-wrap">
                <h6 class="text-base md:text-[18px] font-bold text-[#3D8D89] mb-0" v-if="shipping == 'weight'">
                    {{ $t('weight_not_supported') }}
                </h6>
                <h6 v-else class="text-base md:text-[18px] font-bold text-[#3D8D89] mb-0">{{ $t('shipping_cost') }}</h6>
                <span
                    class="gradient text-white text-[12px] font-semibold flex justify-center items-center px-[12px] py-[3px] rounded-[20px] h-[29px]">
                    VILOX LINE AIR
                </span>
            </div>
            <div class="middle mb-[22px] flex justify-between items-center gap-[5px] relative z-[2] flex-wrap">

                <!-- weight -->
                <template v-if="shipping == 'weight'">
                    <span class="text-[#F65E3F] text-[12px] font-bold">
                        {{ $t('minimum_shipping_weight_kg') }}
                    </span>
                </template>
                <!-- cost -->
                <template v-else>
                    <span class="text-[27px] font-bold text-[#3D8D89] pe-8px flex items-center gap-[4px] leading-[0]">
                        42.4 <sub class="text-[17px] font-bold">{{ $t('currancy') }}</sub>
                        <img src="/img/calculator.svg" alt="" class="img-fluid">
                    </span>
                </template>

                <p class="text-[12px] font-bold">{{ $t('including_customs_clearance') }}</p>

            </div>
            <div
                class="shipping-table border border-solid border-[#E6E6E6] rounded-[15px] bg-white mb-[14px] relative z-[2]">
                <div
                    class="border-b border-sold border-[rgba(112,_112,_112,_0.10)] py-[10px] px-[16px] flex justify-between items-center gap-[5px] font-bold text-[13px] flex-wrap">
                    <span>{{ $t('shipping_type2') }}</span>
                    <span>{{ $t('air') }}</span>
                </div>
                <div
                    class="border-b border-sold border-[rgba(112, 112, 112, 0.10)] py-[10px] px-[16px] flex justify-between items-center gap-[5px] font-bold text-[13px] flex-wrap">
                    <span>
                        {{ $t('actual_weight2') }}
                    </span>
                    <span>{{ $t('volumetric_weight') }}</span>
                </div>
                <div
                    class="border-b border-sold border-[rgba(112, 112, 112, 0.10)] py-[10px] px-[16px] flex justify-between items-center gap-[5px] font-bold text-[13px] flex-wrap">
                    <span class="">{{ $t('estimated_shipping_duration') }}</span>
                    <span>{{ $t('from_7_12_days') }}</span>
                </div>
            </div>
            <div class="flex justify-between relative z-[2]">

                <!-- cost -->
                <div class="flex items-center gap-[5px] flex-wrap" v-if="shipping != 'weight'">
                    <span
                        class="gradient-green min-w-[98px] text-[12px] font-semibold text-white rounded-[23px] flex justify-center items-center py-[5px] px-[20px]">{{
                        $t('the_free') }}</span>
                    <span
                        class="gradient-green min-w-[98px] text-[12px] font-semibold text-white rounded-[23px] flex justify-center items-center py-[5px] px-[20px] ">{{
                            $t('most_affordable') }}</span>
                </div>
            </div>

            <div class="absolute top-0 start-0 select-none pointer-events-none">

                <NuxtImg src="/img/circle-shape1.svg" alt="" densities="x1" format="webp" loading="lazy"></NuxtImg>

            </div>
            <div class="hidden xl:block absolute top-0 end-0 select-none pointer-events-none h-full">

                <NuxtImg src="/img/circle-shape1.svg" alt="" class="w-full h-full" densities="x1" format="webp"
                    loading="lazy">
                </NuxtImg>

            </div>
        </div>

    </div>
</template>

<script setup lang="ts">

type shippingType = 'cost' | 'weight'

const shipping = ref<shippingType>("cost");

</script>

<style scoped lang="scss">
.gradient {
    background: transparent linear-gradient(-257deg, #E0980D 0%, #F2C030 100%) 0% 0% no-repeat padding-box;
}

.gradient-green {
    background: transparent linear-gradient(90deg, #3D8D89 0, #3D8D89 50%, #3D8D89 100%) 0% 0% no-repeat padding-box;
}
</style>