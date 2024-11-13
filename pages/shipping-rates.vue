<template>
    <PageHeading :pageDataHeading="pageDataHeading" />

    <section class="my-[30px] lg:mt-[50px] lg:mb-[95px] relative">
        <div class="container">

            <PageCard class="p-[25px] lg:pt-[45px] lg:pb-[50px] lg:px-[63px]">
                <form @submit.prevent="handleShippingRate">
                    <div class="mb-[25px] md:mb-[40px]">

                        <ShippingRateHeading :title="$t('shipment_title')">
                            <template #icon>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25">
                                    <g id="truck-fast" transform="translate(0.5 0.5)">
                                        <g id="vuesax_broken_truck-fast" data-name="vuesax/broken/truck-fast">
                                            <g id="truck-fast-2" data-name="truck-fast">
                                                <path id="Vector"
                                                    d="M9.49,12h1a2.006,2.006,0,0,0,2-2V0h-9A4,4,0,0,0,0,2.05"
                                                    transform="translate(2.51 2)" fill="none" stroke="#f8a300"
                                                    stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                                    stroke-dasharray="0 0" />
                                                <path id="Vector-2" data-name="Vector"
                                                    d="M0,12a3,3,0,0,0,3,3H4a2,2,0,0,1,4,0h4a2,2,0,0,1,4,0h1a3,3,0,0,0,3-3V9H17a1,1,0,0,1-1-1V5a1,1,0,0,1,1-1h1.29L16.58,1.01A2.016,2.016,0,0,0,14.84,0H13V7a2.006,2.006,0,0,1-2,2H10"
                                                    transform="translate(2 5)" fill="none" stroke="#f8a300"
                                                    stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                                    stroke-dasharray="0 0" />
                                                <path id="Vector-3" data-name="Vector"
                                                    d="M2,4A2,2,0,1,1,4,2,2,2,0,0,1,2,4Z" transform="translate(6 18)"
                                                    fill="none" stroke="#f8a300" stroke-linecap="round"
                                                    stroke-linejoin="round" stroke-width="1.5" stroke-dasharray="0 0" />
                                                <path id="Vector-4" data-name="Vector"
                                                    d="M2,4A2,2,0,1,1,4,2,2,2,0,0,1,2,4Z" transform="translate(14 18)"
                                                    fill="none" stroke="#f8a300" stroke-linecap="round"
                                                    stroke-linejoin="round" stroke-width="1.5" stroke-dasharray="0 0" />
                                                <path id="Vector-5" data-name="Vector"
                                                    d="M4,5H1A1,1,0,0,1,0,4V1A1,1,0,0,1,1,0H2.29L4,3Z"
                                                    transform="translate(18 9)" fill="none" stroke="#f8a300"
                                                    stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                                    stroke-dasharray="0 0" />
                                                <path id="Vector-6" data-name="Vector" d="M0,0H6"
                                                    transform="translate(2 8)" fill="none" stroke="#f8a300"
                                                    stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                                    stroke-dasharray="0 0" />
                                                <path id="Vector-7" data-name="Vector" d="M0,0H4"
                                                    transform="translate(2 11)" fill="none" stroke="#f8a300"
                                                    stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                                    stroke-dasharray="0 0" />
                                                <path id="Vector-8" data-name="Vector" d="M0,0H2"
                                                    transform="translate(2 14)" fill="none" stroke="#f8a300"
                                                    stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                                    stroke-dasharray="0 0" />
                                                <path id="Vector-9" data-name="Vector" d="M24,0V24H0V0Z" fill="none"
                                                    stroke="#f8a300" stroke-width="1" opacity="0" />
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </template>
                        </ShippingRateHeading>

                        <div class="grid grid-cols-2 gap-[16px]">

                            <FromsInputText :labelText="$t('shipping_from')" disabled :value="$t('china')"
                                :placeholder="$t('china')" />

                            <FromsInputText :labelText="$t('to')" disabled :value="$t('saudi_arabia')"
                                :placeholder="$t('saudi_arabia')" />

                        </div>
                    </div>

                    <div class="mb-[25px] md:mb-[40px]">

                        <ShippingRateHeading :title="$t('shipment_information')">
                            <template #icon>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25">
                                    <g id="information" transform="translate(0.5 0.5)">
                                        <g id="vuesax_broken_information" data-name="vuesax/broken/information">
                                            <g id="information-2" data-name="information">
                                                <path id="Vector" d="M0,0V4.83" transform="translate(12 8.13)"
                                                    fill="none" stroke="#f8a300" stroke-linecap="round"
                                                    stroke-linejoin="round" stroke-width="1.5" stroke-dasharray="0 0" />
                                                <path id="Vector-2" data-name="Vector"
                                                    d="M2.235,4.182a1.938,1.938,0,0,1,1.93-1.93h1.73a2.279,2.279,0,0,0,1.26-.46L8.735.442a2,2,0,0,1,2.51,0l1.58,1.35a2.31,2.31,0,0,0,1.27.46h1.7a1.938,1.938,0,0,1,1.93,1.93v1.7a2.279,2.279,0,0,0,.46,1.26l1.35,1.58a2,2,0,0,1,0,2.51l-1.35,1.58a2.279,2.279,0,0,0-.46,1.26v1.7a1.938,1.938,0,0,1-1.93,1.93H14.1a2.279,2.279,0,0,0-1.26.46l-1.58,1.35a2,2,0,0,1-2.51,0l-1.58-1.35A2.307,2.307,0,0,0,5.9,17.7H4.165a1.938,1.938,0,0,1-1.93-1.93v-1.71a2.237,2.237,0,0,0-.45-1.25l-1.35-1.59a2.013,2.013,0,0,1,0-2.5l.56-.66"
                                                    transform="translate(2.006 2.018)" fill="none" stroke="#f8a300"
                                                    stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                                    stroke-dasharray="0 0" />
                                                <path id="Vector-3" data-name="Vector" d="M0,0H.009"
                                                    transform="translate(11.994 16)" fill="none" stroke="#f8a300"
                                                    stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    stroke-dasharray="0 0" />
                                                <path id="Vector-4" data-name="Vector" d="M24,0V24H0V0Z" fill="none"
                                                    stroke="#f8a300" stroke-width="1" opacity="0" />
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </template>
                        </ShippingRateHeading>

                        <div class="grid grid-cols-3 gap-[16px]">

                            <FromsSelect :labelText="$t('shipping_type2')" :placeholder="$t('select_type')"
                                :selectOption="shippingType" v-model="shippingTypeSelect" />

                            <FromsSelect :labelText="$t('shipment_type')" :placeholder="$t('select_type')"
                                :selectOption="shipmentType" v-model="shipmentTypeSelect" />

                            <FromsGroupInput :labelText="$t('shipment_weight')" group type="number"
                                :placeholder="$t('estimated_weight')" :group-text="$t('kg')" v-model="shippingWeight" />

                        </div>
                    </div>

                    <div class="mb-[25px] md:mb-[40px]">

                        <ShippingRateHeading :title="$t('shipment_dimensions')" :spanText="$t('optional')">
                            <template #icon>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25">
                                    <g id="_3d-cube-scan" data-name="3d-cube-scan" transform="translate(0.5 0.5)">
                                        <g id="vuesax_broken_3d-cube-scan" data-name="vuesax/broken/3d-cube-scan">
                                            <g id="_3d-cube-scan-2" data-name="3d-cube-scan">
                                                <path id="Vector" d="M0,0A4.724,4.724,0,0,1,5,5V7"
                                                    transform="translate(17 2)" fill="none" stroke="#f8a300"
                                                    stroke-linecap="round" stroke-linejoin="round"
                                                    stroke-miterlimit="10" stroke-width="1.5" stroke-dasharray="0 0" />
                                                <path id="Vector-2" data-name="Vector"
                                                    d="M0,7V5A4.724,4.724,0,0,1,5,0h5.77" transform="translate(2 2)"
                                                    fill="none" stroke="#f8a300" stroke-linecap="round"
                                                    stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5"
                                                    stroke-dasharray="0 0" />
                                                <path id="Vector-3" data-name="Vector"
                                                    d="M10.53,0V2a4.724,4.724,0,0,1-5,5H0"
                                                    transform="translate(11.471 15)" fill="none" stroke="#f8a300"
                                                    stroke-linecap="round" stroke-linejoin="round"
                                                    stroke-miterlimit="10" stroke-width="1.5" stroke-dasharray="0 0" />
                                                <path id="Vector-4" data-name="Vector" d="M0,0V2A4.724,4.724,0,0,0,5,7"
                                                    transform="translate(2 15)" fill="none" stroke="#f8a300"
                                                    stroke-linecap="round" stroke-linejoin="round"
                                                    stroke-miterlimit="10" stroke-width="1.5" stroke-dasharray="0 0" />
                                                <g id="Group" transform="translate(6.699 9.26)">
                                                    <path id="Vector-5" data-name="Vector" d="M0,0,5.3,3.07,10.56.02"
                                                        fill="none" stroke="#f8a300" stroke-linecap="round"
                                                        stroke-linejoin="round" stroke-width="1.5"
                                                        stroke-dasharray="0 0" />
                                                    <path id="Vector-6" data-name="Vector" d="M0,5.45V0"
                                                        transform="translate(5.301 3.06)" fill="none" stroke="#f8a300"
                                                        stroke-linecap="round" stroke-linejoin="round"
                                                        stroke-width="1.5" stroke-dasharray="0 0" />
                                                </g>
                                                <path id="Vector-7" data-name="Vector"
                                                    d="M1.32,2.073A2.844,2.844,0,0,0,0,4.313V7.7a2.818,2.818,0,0,0,1.32,2.24l3.2,1.78a2.862,2.862,0,0,0,2.49,0l3.2-1.78A2.844,2.844,0,0,0,11.53,7.7V4.313a2.818,2.818,0,0,0-1.32-2.24L7.01.292a2.8,2.8,0,0,0-2.49,0Z"
                                                    transform="translate(6.24 5.998)" fill="none" stroke="#f8a300"
                                                    stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                                    stroke-dasharray="0 0" />
                                                <path id="Vector-8" data-name="Vector" d="M24,0V24H0V0Z" fill="none"
                                                    stroke="#f8a300" stroke-width="1" opacity="0" />
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </template>
                        </ShippingRateHeading>

                        <div class="grid grid-cols-3 gap-[16px]">

                            <FromsGroupInput :labelText="$t('length')" type="number" group :placeholder="$t('length')"
                                :group-text="$t('cm')" v-model="lengthInput" />

                            <FromsGroupInput :labelText="$t('width')" type="number" group :placeholder="$t('width')"
                                :group-text="$t('cm')" v-model="width" />

                            <FromsGroupInput :labelText="$t('height')" type="number" group :placeholder="$t('height')"
                                :group-text="$t('cm')" v-model="height" />

                        </div>
                    </div>

                    <div class="flex justify-center items-center">
                        <button class="main-btn min-w-[296.27px] p-[9px] gap-[8.8px]" type="submit">
                            <span class="font-bold">{{ $t('calculate_now') }}</span>
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
                        </button>
                    </div>

                </form>

                <ShippingRateResult v-if="showResult" />

            </PageCard>

        </div>

        <div
            class="hidden xl:block absolute top-[95px] start-[82px] select-none pointer-events-none z-[-1] ltr:[transform:rotateY(-180deg)]">
            <img src="/img/services-box.svg" :alt="$t('header.shipping_fees')" :title="$t('header.shipping_fees')"
                class="img-fluid" loading="lazy">
        </div>

        <div
            class="hidden xl:block absolute top-[110px] end-[73px] select-none pointer-events-none z-[-1] ltr:[transform:rotateY(-180deg)]">
            <img src="/img/our-services-plane2.svg" :alt="$t('header.shipping_fees')"
                :title="$t('header.shipping_fees')" class="img-fluid" loading="lazy">
        </div>

        <div
            class="absolute top-[216px] start-0 select-none pointer-events-none z-[-1] ltr:[transform:rotateY(-180deg)]">
            <img src="/img/services-circle.svg" :alt="$t('header.shipping_fees')" :title="$t('header.shipping_fees')"
                class="img-fluid" loading="lazy">
        </div>

        <div
            class="hidden xl:block absolute top-[580px] start-[56px] select-none pointer-events-none z-[-1] ltr:[transform:rotateY(-180deg)]">
            <img src="/img/shipping-plane.svg" :alt="$t('header.shipping_fees')" :title="$t('header.shipping_fees')"
                class="img-fluid" loading="lazy">
        </div>

        <div
            class="hidden xl:block absolute top-[606px] end-[28px] select-none pointer-events-none z-[-1] ltr:[transform:rotateY(-180deg)]">
            <img src="/img/services-truck.svg" :alt="$t('header.shipping_fees')" :title="$t('header.shipping_fees')"
                class="img-fluid" loading="lazy">
        </div>

    </section>

</template>

<script setup lang="ts">
const { t, locale } = useI18n();
useSeoMeta({
    title: `${t('header.shipping_fees')}`,
    description: `${t('website_description')}`,
    ogTitle: `${t('og_title')}`,
    ogDescription: `${t('og_description')}`,
    ogImage: 'https://i.postimg.cc/P5hpNP23/mycn-og-2.png',
    ogUrl: 'https://shipping-nuxt3.vercel.app',
    twitterTitle: `${t('og_title')}`,
    twitterDescription: `${t('og_description')}`,
    twitterImage: 'https://i.postimg.cc/P5hpNP23/mycn-og-2.png',
    twitterCard: 'summary'
});

const pageDataHeading = {
    title_ar: 'رسوم الشحن',
    title_en: 'Shipping Fees',
    subTitle_ar: 'نساعدك في معرفة تكلفة الشحن التقريبية إلى دولتك !',
    subTitle_en: 'We help you calculate the approximate shipping cost to your country!',
    bg: 'shipping-rates-heading.jpg',
    span_ar: '',
    span_en: ''
};

const shippingTypeSelect = ref(t('select_type'));
const shipmentTypeSelect = ref(t('select_type'));
const shippingWeight = ref();
const lengthInput = ref();
const width = ref();
const height = ref();
let showResult = ref(false);

// const form = reactive({
//     lengthInput: '',
//     width: '',
//     height: '',
// });

const shippingType = ref([
    {
        value: 'one',
        text_ar: 'نوع الشحن 1',
        text_en: 'Shipping Type 1'
    },
    {
        value: 'two',
        text_ar: 'نوع الشحن 2',
        text_en: 'Shipping Type 2',
    },
    {
        value: 'three',
        text_ar: 'نوع الشحن 3',
        text_en: 'Shipping Type 3',
    },
]);

const shipmentType = ref([
    {
        value: 'one',
        text_ar: 'نوع الشحنة 1',
        text_en: 'Shipment Type 1',
    },
    {
        value: 'two',
        text_ar: 'نوع الشحنة 2',
        text_en: 'Shipment Type 2',
    },
    {
        value: 'three',
        text_ar: 'نوع الشحنة 3',
        text_en: 'Shipment Type 3',
    },
]);


const handleShippingRate = () => {
    setTimeout(() => {
        showResult.value = true;
    }, 300);
}

</script>

<style scoped></style>