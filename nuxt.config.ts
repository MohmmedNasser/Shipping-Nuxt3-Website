// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.scss'],
  // colorMode: {
  //   preference: 'light'
  // },
  plugins: [
    '~/plugins/i18n.js'  // Register the i18n plugin
  ],
  app: {
    head: {
      titleTemplate: '%s - شركة MyCN خدمات الشحن والاستيراد من الصين ',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
        { name: 'title', content: '' },
        { name: 'description', content: '' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: '' },
        { property: 'og:title', content: '' },
        { property: 'og:description', content: '' },
        { property: 'og:image', content: '' },
        { property: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:url', content: '' },
        { property: 'twitter:title', content: '' },
        { property: 'twitter:description', content: '' },
        { property: 'twitter:image', content: '' },
        { property: 'twitter:image', content: '' },
      ],
      link: [
        { rel: 'shortcut icon', type: 'image/x-icon', href: 'img/favicon.ico' },
      ],
      script: []
    }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    "@nuxtjs/google-fonts",
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@vee-validate/nuxt',
    '@nuxtjs/i18n',
  ],
  googleFonts: {
    families: {
      Cairo: [300, 400, 500, 600, 700, 800, 900],
      Poppins: [300, 400, 500, 600, 700, 800, 900],
    },
    display: 'swap',
    preload: true,
    preconnect: true
  },

  i18n: {
    // detectBrowserLanguage: {
    //   useCookie: true,
    //   cookieKey: 'locale',
    //   alwaysRedirect: true,
    //   fallbackLocale: 'ar'
    // },
    detectBrowserLanguage: false,
    // lazy: true,
    defaultLocale: 'ar',
    strategy: 'no_prefix',
    locales: [
      {
        code: 'ar',
        name: 'Arabic',
        file: 'ar.json',
      },
      {
        code: 'en',
        name: 'English',
        file: 'en.json',
      },
    ],
    langDir: 'locales',
  },

  // i18n: {
  //   locales: ['ar', 'en'],
  //   defaultLocale: 'ar',
  //   strategy: 'no_prefix',
  //   vueI18n: './i18n.config.ts',
  // },
  compatibilityDate: "2024-09-18",
})