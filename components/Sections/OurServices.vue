<template>
    <section class="my-[50px] lg:mt-[122px] lg:mb-[86px] relative">
        <div class="container">
            <div v-for="(service, i) in ourServices" :key="i"
                class="flex items-center justify-between gap-[30px] md:gap-[66px] mb-[30px] md:mb-[91px] last:mb-0 flex-col-reverse md:flex-row even:flex-col-reverse md:even:flex-row-reverse">
                <div
                    class="bg-after-gradient w-[300px] h-[200px] rounded-[22px] flex-shrink-0 lg:w-[536px] lg:h-[339px] overflow-hidden relative after:absolute after:top-0 after:left-0 after:w-full after:h-full after:opacity-30 after:select-none after:pointer-events-none">
                    <NuxtImg :src="'/img/' + service.img" :alt="$t('header.service')" :title="$t('header.service')"
                        class="img-fluid w-full h-full object-cover" loading="lazy" placeholder format="webp"
                        width="536" height="339">
                    </NuxtImg>
                </div>
                <div class="max-w-[465px]">

                    <div class="section-title">
                        <h5>
                            <span class="title">
                                {{ locale == 'ar' ? service.title_ar : service.title_en }}
                            </span>
                            <span class="text-pattern">
                                {{ locale == 'ar' ? service.title_ar : service.title_en }}
                            </span>
                        </h5>
                    </div>

                    <p class="par-circle font-medium leading-[25px]">
                        {{ locale == 'ar' ? service.description_ar : service.description_en }}
                    </p>

                </div>
            </div>
        </div>

        <div class="hidden lg:block absolute -top-[17%] start-0 select-none pointer-events-none z-[-1] ltr:-rotate-180">
            <img src="/img/our-services-circle1.svg" :alt="$t('header.service')" :title="$t('header.service')"
                class="img-fluid" loading="lazy">
        </div>
        <div class="hidden lg:block absolute bottom-[35%] start-0 select-none pointer-events-none ltr:-rotate-180">
            <img src="/img/our-services-plane.svg" :alt="$t('header.service')" :title="$t('header.service')"
                class="img-fluid" loading="lazy">
        </div>
        <div class="hidden lg:block absolute bottom-0 start-0 select-none pointer-events-none ltr:-rotate-180">
            <img src="/img/our-services-circle2.svg" :alt="$t('header.service')" :title="$t('header.service')"
                class="img-fluid" loading="lazy">
        </div>
        <div class="hidden lg:block absolute bottom-[12%] end-0 select-none pointer-events-none ltr:-rotate-180">
            <img src="/img/our-services-circle3.svg" :alt="$t('header.service')" :title="$t('header.service')"
                class="img-fluid" loading="lazy">
        </div>
        <div class="hidden lg:block absolute bottom-[-1%] end-[15%] select-none pointer-events-none ltr:-rotate-180">
            <img src="/img/our-services-plane2.svg" :alt="$t('header.service')" :title="$t('header.service')"
                class="img-fluid" loading="lazy">
        </div>

    </section>

</template>

<script setup lang="ts">

// import { useI18n } from 'vue-i18n'
const { locale } = useI18n();

const ourServices = [
    {
        title_ar: 'الشراء من الصين',
        title_en: 'Buy from China',
        description_ar: 'نقدم فرصة مميزة للحصول على المنتجات من الصين بسهولة وموثوقية، دون الحاجة للسفر أو التعامل مباشرة مع الموردين الصينيين، يمكن للعملاء تصفح المنتجات الصينية باللغة العربية عبر منصتنا، واختيار ما يناسبهم من حيث الجودة والسعر، وبالكميات التي يحتاجونها. ماي سي ان تعمل كوسيط موثوق يضمن للعملاء الحصول على منتجاتهم من موردين ومتاجر صينية موثوقة، مما يوفر عليهم عناء البحث والقلق من التعامل مع موردين غير المعروفين',
        description_en: 'We offer a unique opportunity to obtain products from China easily and reliably, without the need to travel or deal directly with Chinese suppliers. Customers can browse Chinese products in Arabic through our platform, and choose what suits them in terms of quality and price, and in the quantities they need. MyCN works as a reliable intermediary that ensures customers obtain their products from reliable Chinese suppliers and stores, saving them the trouble of searching and worrying about dealing with unknown suppliers.',
        img: 'our-service-img1.jpg',
    },
    {
        title_ar: 'الخدمات اللوجستية',
        title_en: 'Logistics Services',
        description_ar: 'خدمة تمكنك من الحصول على عنوان بريدي خاص بك في الصين داخل مستودعاتنا، والذي يمكنك استخدامه لاستقبال شحناتك من أي مكان وعند وصول البضائع إلى العنوان، نقوم بتسجيلها في لوحة التحكم الخاصة بك، مما يتيح لك مراقبة ما يصل إليك. يمكنك أيضًا طلب فحص البضائع للتأكد من جودتها، أو تجميع عدة شحنات معًا لتقليل تكاليف الشحن',
        description_en: 'This service allows you to obtain a unique mailing address in China within our warehouses, which you can use to receive your shipments from anywhere. When the goods arrive at the address, we register them in your dashboard, enabling you to monitor what you receive. You can also request a quality inspection of the goods or consolidate multiple shipments to reduce shipping costs',
        img: 'our-service-img2.jpg',
    },
    {
        title_ar: 'الشحن من الصين',
        title_en: 'Shipping from China',
        description_ar: 'شحن سريع وآمن من الصين وأمريكا وتركيا لجميع دول العالم حيث يتم منح العميل عنوان خاص به في مستودعاتنا في الصين أو أمريكا او تركيا او السعودية ليقوم بتخزين وتجميع المنتجات به، وشحنها لأي عنوان يريده سواءً كان شحن بحري او جوي شامل جميع إجراءات التخليص الجمركي عبر شركات الشحن المتنوعة والتوصيل من الباب للباب.',
        description_en: 'We provide you with a fast and safe shipping service in cooperation with the most famous international and Chinese shipping companies. Whether you need partial or complete shipping, sea or air, we cover all your needs from the beginning of shipping until delivery to your door in the Kingdom of Saudi Arabia. Our service also includes customs clearance, offering companies multiple options depending on the duration and prices that suit you.',
        img: 'our-service-img3.jpg',
    },
]
</script>

<style scoped lang="scss">
.bg-after-gradient {
    &:after {
        background: linear-gradient(to bottom, #48A6A4 0, #48A6A4 20%, #3D8D89 45%, #3D8D89 100%);
    }
}
</style>