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
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
        // { name: 'title', content: 'شركة MyCN خدمات الشحن والاستيراد من الصين' },
        // { name: 'description', content: 'MYCN  من أفضل شركات الشحن الجوي والبحري، تقدم خدمات شحن موثوقة وسريعة للشركات والأفراد مع ضمان أعلى معايير الأمان والجودة' },
        // { property: 'og:title', content: 'MyCN - أفضل شركات الشحن الجوي والبحري' },
        // { property: 'og:type', content: 'Commercial' },
        // { property: 'og:url', content: 'https://shipping-nuxt3.vercel.app' },
        // { property: 'og:description', content: ' MYCN  من أفضل شركات الشحن الجوي والبحري، تقدم خدمات شحن موثوقة وسريعة للشركات والأفراد مع ضمان أعلى معايير الأمان والجودة.' },
        // { property: 'og:image', content: 'https://i.postimg.cc/P5hpNP23/mycn-og-2.png' },
        // { property: 'twitter:card', content: 'summary_large_image' },
        // { property: 'twitter:url', content: 'https://shipping-nuxt3.vercel.app' },
        // { property: 'twitter:title', content: 'MyCN - أفضل شركات الشحن الجوي والبحري' },
        // { property: 'twitter:description', content: ' MYCN  من أفضل شركات الشحن الجوي والبحري، تقدم خدمات شحن موثوقة وسريعة للشركات والأفراد مع ضمان أعلى معايير الأمان والجودة.' },
        // { property: 'twitter:image', content: 'https://i.postimg.cc/P5hpNP23/mycn-og-2.png' },
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