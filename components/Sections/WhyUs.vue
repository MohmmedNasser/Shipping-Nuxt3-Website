<template>
    <section class="mt-[50px] lg:mt-[86px] py-[50px] lg:pt-[86px] pb-[60px]  bg-white relative">
        <div class="container">
            <div class="section-title centered">
                <h5>
                    <span class="title">{{ $t('why_us') }}</span>
                    <span class="text-pattern">{{ $t('why_us') }}</span>
                </h5>
                <p>
                    {{ $t('why_us_heading-test') }}
                </p>
            </div>
            <div
                class="grid grid-cols-2 lg:grid-cols-[repeat(3,minmax(260px,_1fr))] gap-[15px] md:gap-[32px] max-w-[auto] md:max-w-[841px] mt-40px md:mt-[60px] mx-auto mb-0">
                <div class="why-us-box flex flex-col items-center text-center border border-solid border-[#E6E6E6] rounded-[15px] md:rounded-[23px] px-[5px] py-[20px] md:px-[10px] md:py-[32px] bg-[#F7F7F7] relative transition duration-[300ms] overflow-hidden"
                    v-for="(whyus, i) in whyUsList" :key="i">
                    <span
                        class="absolute -top-[-25px] md:-top-[40px] text-[80px] md:text-[120px] end-[8px] font-semibold text-black opacity-[0.01] select-none pointer-events-none z-[2]">{{
                            whyus.number }}</span>
                    <div class="w-[120px] h-[120px] md:w-[161px] md:h-[161px]   relative z-[2]">
                        <NuxtImg :src="'/img/' + whyus.icon" :alt="$t('why_us')" :title="$t('why_us')"
                            class="w-[80%] md:w-auto mx-auto" placehoder loading="lazy" format="webp">
                        </NuxtImg>
                    </div>
                    <h6
                        class="text-[14px] md:text-[16px] ltr:md:text-[14px] font-semibold mb-0 leading-[25px] relative z-[2]">
                        {{ locale == 'ar' ? whyus.title_ar : whyus.title_en }}

                    </h6>
                    <p class="text-[12px] md:text-[14px] text-black mt-[5px] relative z-[2]"
                        v-if="whyus['desc_ar'].length || whyus['desc_en'].length">
                        {{ locale == 'ar' ? whyus.desc_ar : whyus.desc_en }}
                    </p>
                </div>
            </div>
        </div>

        <div
            class="hidden lg:block absolute top-[45px] start-[12%] select-none pointer-events-none ltr:[transform:rotateY(-180deg)]">
            <img src="/img/why-us-plane1.svg" :alt="$t('why_us')" :title="$t('why_us')" loading="lazy">
        </div>

        <div
            class="hidden lg:block absolute top-0 start-0 select-none pointer-events-none ltr:[transform:rotateY(-180deg)]">
            <img src="/img/why-us-circle.svg" :alt="$t('why_us')" :title="$t('why_us')" loading="lazy">
        </div>

    </section>
</template>

<script setup lang="ts">

// import { useI18n } from 'vue-i18n'
const { locale } = useI18n();

const whyUsList = [
    {
        title_ar: 'نوفر منتجات صينية موثوقة باقل الاسعار',
        title_en: 'We provide reliable Chinese products at the lowest prices',
        desc_ar: '',
        desc_en: '',
        icon: 'why-us-img1.svg',
        number: '01'
    },
    {
        title_ar: 'تصوير المنتجات عند وصولها لضمان جودتها',
        title_en: 'Product photography upon arrival to ensure quality',
        desc_ar: '',
        desc_en: '',
        icon: 'why-us-img2.svg',
        number: '02'
    },
    {
        title_ar: 'خدمات لوجستية متكاملة',
        title_en: 'Comprehensive logistics services',
        desc_ar: '(فحص٫ تصوير٫ فرز منتجات)',
        desc_en: '(Inspection, photography, product sorting)',
        icon: 'why-us-img3.svg',
        number: '03'
    },
    {
        title_ar: 'الشحن لباب بيتك',
        title_en: 'Door-to-door shipping',
        desc_ar: '(جوي او بحري)',
        desc_en: '(Air or sea)',
        icon: 'why-us-img4.svg',
        number: '04'
    },
    {
        title_ar: 'نتولى التخليص الجمركي لضمان وصول سريع',
        title_en: 'We handle customs clearance to ensure fast delivery',
        desc_ar: '',
        desc_en: '',
        icon: 'why-us-img5.svg',
        number: '05'
    },
    {
        title_ar: 'طرق دفع مختلفة',
        title_en: 'Various payment methods',
        desc_ar: '(فيزا, ماستر كارد٫ مدى٫ ابل باي٫ تحويل بنكي)',
        desc_en: '(Visa, MasterCard, Mada, Apple Pay, Bank Transfer)',
        icon: 'why-us-img6.svg',
        number: '06'
    },
]
</script>

<style scoped lang="scss">
.why-us-box {
    &:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(to right, #245955 0, #245955 20%, #275D59 25%, #35746E 50%, #3E827B 65%, #41877F 75%, #41877F 100%);
        opacity: 0;
        transition: opacity 0.25s linear;

    }

    &:hover {
        &:after {
            opacity: 1;
        }

        span {
            opacity: 0.03;
        }

        h6 {
            color: #FFF;
        }

        p {
            color: #FFF;
        }
    }
}
</style>