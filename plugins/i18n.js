export default defineNuxtPlugin((nuxtApp) => {
    const languageCookie = useCookie('language');
    const directionCookie = useCookie('direction');

    const defaultLanguage = languageCookie.value || 'ar';
    const defaultDirection = directionCookie.value || 'rtl';

    nuxtApp.$i18n.setLocale(defaultLanguage);

    // document.documentElement.setAttribute('lang', defaultLanguage);
    // document.documentElement.setAttribute('dir', defaultDirection);

    if (process.client) {
        useHead({
            htmlAttrs: {
                lang: defaultLanguage,
                dir: defaultDirection
            }
        });
    }

    nuxtApp.$i18n.onLanguageSwitched = (oldLocale, newLocale) => {
        const newDirection = newLocale === 'ar' ? 'rtl' : 'ltr';

        languageCookie.value = newLocale;
        directionCookie.value = newDirection;

        // document.documentElement.setAttribute('lang', newLocale);
        // document.documentElement.setAttribute('dir', newDirection);

        if (process.client) {
            useHead({
                htmlAttrs: {
                    lang: newLocale,
                    dir: newDirection
                }
            });
        }
    };
});
