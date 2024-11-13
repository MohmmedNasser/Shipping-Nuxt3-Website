<template>
  <div>
    <!-- <NuxtLoadingIndicator /> -->
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup>
const { t, locale, locales } = useI18n();

useHead({
  titleTemplate: `%s | ${t('website_title')}`,
  htmlAttrs: {
    dir: locale.value === 'ar' ? 'rtl' : 'ltr',
    lang: locale.value,
  },
});

useHead({
  link: [
    {
      rel: 'icon',
      type: 'image/ico',
      href: '/img/favicon.ico'
    }
  ]
});

const { $i18n } = useNuxtApp();
const languageCookie = useCookie('language');

if (languageCookie.value) {
  $i18n.setLocale(languageCookie.value);
}

// onMounted(() => {
//   setHtmlDirection(locale.value);
// });

// const setHtmlDirection = (localeValue) => {
//   useHead({
//     htmlAttrs: {
//       dir: localeValue === 'ar' ? 'rtl' : 'ltr',
//       lang: localeValue === 'ar' ? 'ar' : 'en'
//     }
//   })
// }

// watch(locale, (newLocale) => {
//   setHtmlDirection(newLocale)
// })

// useHead({
//   htmlAttrs: {
//     'dir': 'rtl',
//     'lang': 'ar',
//   },
// });

</script>
<style lang="scss"></style>
