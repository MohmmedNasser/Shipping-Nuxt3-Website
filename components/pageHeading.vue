<template>
    <section
        class="h-[250px] md:h-[320px] bg-no-repeat bg-cover bg-fixed relative flex items-center justify-center text-center after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-black/[0.81] after:opacity-[0.90] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#3D8D89] before:opacity-[0.50] before:z-[2]"
        :style="[`background: url(/img/${pageDataHeading.bg})`]">
        <div class="container">
            <div class="relative z-[3] flex flex-col items-center justify-center pt-[70px]">
                <h1
                    class="text-[22px] leading-[40px] md:text-[30px] font-bold mb-0 md:leading-[56px] text-white relative">
                    {{ locale == 'ar' ? pageDataHeading.title_ar : pageDataHeading.title_en }}
                </h1>
                <h2 class="text-[15px] leading-[25px] text-base font-medium text-white mb-0">
                    {{ locale == 'ar' ? pageDataHeading.subTitle_ar : pageDataHeading.subTitle_en }}

                    <span class="font-bold" v-if="pageDataHeading.span_ar">
                        {{ locale == 'ar' ? pageDataHeading.span_ar : pageDataHeading.span_en }}
                    </span>
                </h2>
            </div>

        </div>
    </section>
</template>

<script setup lang="ts">

const { locale } = useI18n();

interface pageHeading {
    title_ar: string
    title_en: string
    subTitle_ar: string
    subTitle_en: string
    bg: string
    span_ar?: string
    span_en?: string
}

defineProps<{ pageDataHeading: pageHeading }>();
</script>

<style scoped lang="scss">
h1 {
    &:after {
        content: "";
        position: absolute;
        top: 50%;
        inset-inline-start: -45px;
        width: 32px;
        height: 6px;
        border-radius: 4px;
        background: #FFFFFF;
        pointer-events: none;
    }

    &::before {
        content: "";
        position: absolute;
        top: 50%;
        inset-inline-start: -54px;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: #FFFFFF;
    }
}
</style>