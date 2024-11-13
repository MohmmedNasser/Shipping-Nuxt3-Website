<template>
    <div>
        <PageHeading :pageDataHeading="pageDataHeading" />

        <section class="mt-[30px] mb-[30px] md:mt-[50px] md:mb-[113px] relative">
            <div class="container">
                <div class="services-cards">
                    <div v-for="(service, index) in ourServices" :key="index"
                        class="relative group bg-white rounded-[23px] overflow-hidden px-[26px] pt-[33px] pb-[20px] border border-solid border-[#E6E6E6] flex flex-col lg:flex-row justify-between items-center gap-[12px] mb-[20px] md:mb-[40px] last:mb-0 min-h-[250px] even:flex-col md:even:flex-row-reverse">

                        <div class="text">
                            <div class="section-title mb-[15px]">
                                <h5>
                                    <span class="title text-[20px] lg:text-[26px] font-bold">
                                        {{ locale == 'ar' ? service.title_ar : service.title_en }}
                                    </span>
                                </h5>
                            </div>
                            <p class="font-medium leading-[25px] max-w-[741px] ps-0 md:ps-[calc(70px_-_20px)]">
                                {{ locale == 'ar' ? service.description_ar : service.description_en }}
                            </p>
                        </div>
                        <div
                            class="flex-shrink-0 self-center lg:self-end w-120px h-120px mt-20px md:w-auto md:h-auto md:mt-0 even:static even:top-auto md:even:relative md:even:top-[20px]">
                            <NuxtImg :src="'/img/' + service.img" :alt="$t('header.service')"
                                :title="$t('header.service')" loading="lazy" placeholder densities="x1" format="webp"
                                class="self-center md:self-auto">
                            </NuxtImg>
                        </div>

                        <span
                            class="text-[60px] -top-[5px] end-[10px] md:text-[80px] md:-top-[20px] lg:text-[204px] lg:-top-[70px] lg:end-[19px] font-semibold text-black/[0.05] absolute select-none pointer-events-none group-even:start-auto group-even:end-[19px] lg:group-even:start-[19px] lg:group-even:end-0">
                            {{ `0${index + 1}` }}
                        </span>

                    </div>
                </div>
            </div>
            <div
                class="hidden xl:block absolute top-[11%] end-[62px] select-none pointer-events-none z-[-1] ltr:[transform:rotateY(-180deg)]">
                <img src="/img/our-services-plane2.svg" :alt="$t('header.service')" :title="$t('header.service')"
                    class="img-fluid" loading="lazy">
            </div>

            <div
                class="hidden xl:block absolute top-[25%] start-[28px] select-none pointer-events-none z-[-1] ltr:[transform:rotateY(-180deg)]">
                <img src="/img/services-arrow-car.svg" :alt="$t('header.service')" :title="$t('header.service')"
                    class="img-fluid" loading="lazy">
            </div>

            <div
                class="hidden lg:block absolute bottom-[10%] start-[0] select-none pointer-events-none z-[-1] ltr:[transform:rotateY(-180deg)]">
                <img src="/img/services-circle.svg" :alt="$t('header.service')" :title="$t('header.service')"
                    class="img-fluid" loading="lazy">
            </div>

            <div
                class="hidden xl:block absolute bottom-[1%] start-[67px] select-none pointer-events-none z-[-1] ltr:[transform:rotateY(-180deg)]">
                <img src="/img/services-box.svg" :alt="$t('header.service')" :title="$t('header.service')"
                    class="img-fluid" loading="lazy">
            </div>

            <div
                class="hidden xl:block absolute bottom-[5%] end-[57px] select-none pointer-events-none z-[-1] ltr:[transform:rotateY(-180deg)]">
                <img src="/img/services-truck.svg" :alt="$t('header.service')" :title="$t('header.service')"
                    class="img-fluid" loading="lazy">
            </div>

        </section>
    </div>
</template>

<script setup lang="ts">
const { t, locale } = useI18n();

useSeoMeta({
    title: `${t('header.service')}`,
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
    title_ar: 'خدماتنا',
    title_en: 'Our Services',
    subTitle_ar: 'بخدماتنا نفتح لكم آفاق جديدة للإستيراد والتجارة الإلكترونية المتكاملة',
    subTitle_en: 'With our services, we open new horizons to shopping and integrated E-commerce',
    bg: 'services-heading.jpg',
    span_ar: '',
    span_en: ''
};

const ourServices = [
    {
        title_ar: 'الشراء من الصين',
        title_en: 'Buy from China',
        description_ar: 'نقدم فرصة مميزة للحصول على المنتجات من الصين بسهولة وموثوقية، دون الحاجة للسفر أو التعامل مباشرة مع الموردين الصينيين، يمكن للعملاء تصفح المنتجات الصينية باللغة العربية عبر منصتنا، واختيار ما يناسبهم من حيث الجودة والسعر، وبالكميات التي يحتاجونها. ماي سي ان تعمل كوسيط موثوق يضمن للعملاء الحصول على منتجاتهم من موردين ومتاجر صينية موثوقة، مما يوفر عليهم عناء البحث والقلق من التعامل مع موردين غير المعروفين',
        description_en: 'We offer a unique opportunity to obtain products from China easily and reliably, without the need to travel or deal directly with Chinese suppliers. Customers can browse Chinese products in Arabic through our platform, and choose what suits them in terms of quality and price, and in the quantities they need. MyCN works as a reliable intermediary that ensures customers obtain their products from reliable Chinese suppliers and stores, saving them the trouble of searching and worrying about dealing with unknown suppliers.',
        img: 'service-img1.svg',
    },
    {
        title_ar: 'الخدمات اللوجستية',
        title_en: 'Logistics Services',
        description_ar: 'خدمة تمكنك من الحصول على عنوان بريدي خاص بك في الصين داخل مستودعاتنا، والذي يمكنك استخدامه لاستقبال شحناتك من أي مكان وعند وصول البضائع إلى العنوان، نقوم بتسجيلها في لوحة التحكم الخاصة بك، مما يتيح لك مراقبة ما يصل إليك. يمكنك أيضًا طلب فحص البضائع للتأكد من جودتها، أو تجميع عدة شحنات معًا لتقليل تكاليف الشحن',
        description_en: 'This service allows you to obtain a unique mailing address in China within our warehouses, which you can use to receive your shipments from anywhere. When the goods arrive at the address, we register them in your dashboard, enabling you to monitor what you receive. You can also request a quality inspection of the goods or consolidate multiple shipments to reduce shipping costs.',
        img: 'service-img2.svg',
    },
    {
        title_ar: 'الشحن من الصين',
        title_en: 'Shipping from China',
        description_ar: 'نقدم فرصة مميزة للحصول على المنتجات من الصين بسهولة وموثوقية، دون الحاجة للسفر أو التعامل مباشرة مع الموردين الصينيين، يمكن للعملاء تصفح المنتجات الصينية باللغة العربية عبر منصتنا، واختيار ما يناسبهم من حيث الجودة والسعر، وبالكميات التي يحتاجونها. ماي سي ان تعمل كوسيط موثوق يضمن للعملاء الحصول على منتجاتهم من موردين ومتاجر صينية موثوقة، مما يوفر عليهم عناء البحث والقلق من التعامل مع موردين غير المعروفين',
        description_en: 'We provide you with a fast and safe shipping service in cooperation with the most famous international and Chinese shipping companies. Whether you need partial or complete shipping, sea or air, we cover all your needs from the beginning of shipping until delivery to your door in the Kingdom of Saudi Arabia. Our service also includes customs clearance, offering companies multiple options depending on the duration and prices that suit you.',
        img: 'service-img3.svg',
    },
]

</script>

<style scoped></style>