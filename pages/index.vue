<template>
    <div>
        <SectionsHero />
        <SectionsStatistices />
        <LazySectionsWhoWe />
        <LazySectionsOurServices />
        <LazySectionsWhyUs />
        <LazySectionsPackages />
        <LazySectionsBigBusiness />
        <LazySectionsReviews />
        <LazySectionsContactUs />
    </div>

</template>

<script setup lang="ts">

const { t } = useI18n();
const config = useRuntimeConfig()

useSeoMeta({
    title: `${t('header.home')}`,
    description: `${t('website_description')}`,
    ogTitle: `${t('og_title')}`,
    ogDescription: `${t('og_description')}`,
    ogImage: 'https://i.postimg.cc/P5hpNP23/mycn-og-2.png',
    ogUrl: config.public.sitUrl,
    twitterTitle: `${t('og_title')}`,
    twitterDescription: `${t('og_description')}`,
    twitterImage: 'https://i.postimg.cc/P5hpNP23/mycn-og-2.png',
    twitterCard: 'summary'
})

</script>

<style scoped></style>
