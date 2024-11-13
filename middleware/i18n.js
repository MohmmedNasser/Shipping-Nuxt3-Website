export default defineNuxtRouteMiddleware(() => {
    const languageCookie = useCookie('language');
    const directionCookie = useCookie('direction');

    // Default values if no cookie is set
    const defaultLanguage = languageCookie.value || 'en';
    const defaultDirection = directionCookie.value || 'ltr';

    // Set the language and direction for SSR
    useHead({
        htmlAttrs: {
            lang: defaultLanguage,
            dir: defaultDirection
        }
    });

    // Set the locale for i18n
    const { $i18n } = useNuxtApp();
    $i18n.setLocale(defaultLanguage);
});