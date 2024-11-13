<template>
    <section class="pt-[50px] lg:pt-[86px] relative reviewsSection">
        <div class="container">
            <div class="reviews-wrapper">
                <div class="section-title centered">
                    <h5>
                        <span class="title">{{ $t('customer_reviews') }}</span>
                        <span class="text-pattern !left-[49%] !top-[-136%] !translate-x-[-050%]">{{
                            $t('customer_reviews') }}</span>
                    </h5>

                    <p class="!mt-[15px]">
                        {{ $t('customer_reviews_subhead') }}
                    </p>

                </div>
            </div>
        </div>

        <div class="reviewsSlider">
            <swiper :slides-per-view="1.1" :space-between="15" :modules="modules" :dir="locale == 'en' ? 'ltr' : 'rtl'"
                :pagination="{ el: '.reviews-pagination', clickable: true }"
                :autoplay="{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }" :loop="true"
                :breakpoints="{
                    768: {
                        slidesPerView: 1.8,
                        spaceBetween: 10
                    },
                    992: {
                        slidesPerView: 2.2,
                        spaceBetween: 10
                    },
                    1199: {
                        slidesPerView: 2.5,
                        spaceBetween: 10
                    },
                    1200: {
                        slidesPerView: 2.8,
                        spaceBetween: 15
                    }
                }">
                <swiper-slide v-for="review in reviewsList" :key="review.id">

                    <blockquote
                        class="rounded-[30px] drop-shadow-[0_0_10px_rgba(0,0,0,0.04)] bg-white p-[20px] lg:pt-[12px] lg:ps-[20px] lg:pb-[21px] lg:pe-[31px]">
                        <h6 class="text-[15px] md:text-[17px] font-bold mb-[10px]">
                            {{ locale == 'ar' ? review.name_ar : review.name_en }}
                        </h6>
                        <div class="flex items-center">
                            <span v-for="(rate, index) in review.rate" :key="index">
                                <img src="/img/star-full.svg" :alt="$t('trader_rating')"
                                    class="w-[18px] h-[18px] md:w-auto md:h-auto" loading="lazy">
                            </span>
                        </div>
                        <p class="text-[13px] md:text-[14px] font-semibold text-[#B4B4B4] mt-[11px]">
                            {{ locale == 'ar' ? review.text_ar : review.text_en }}
                        </p>
                    </blockquote>

                </swiper-slide>

            </swiper>


        </div>


        <div class="container">
            <div class="reviews-pagination"></div>
        </div>



        <div
            class="hidden lg:block absolute top-[53px] start-[10%] select-none pointer-events-none ltr:[transform:rotateY(180deg)]">
            <img src="/img/reviews-plane.svg" :alt="$t('customer_reviews')" :title="$t('customer_reviews')"
                class="img-fluid" loading="lazy">
        </div>

        <div
            class="hidden lg:block absolute top-[53px] end-0 select-none pointer-events-none ltr:[transform:rotateY(180deg)]">
            <img src="/img/reviews-circle.svg" :alt="$t('customer_reviews')" :title="$t('customer_reviews')"
                class="img-fluid" loading="lazy">
        </div>
    </section>
</template>

<script>

import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Autoplay } from "swiper/modules";
import 'swiper/css/pagination';
// import { useI18n } from 'vue-i18n'

export default {

    components: {
        Swiper,
        SwiperSlide,
    },

    setup() {
        const { t, locale } = useI18n();

        const reviewsList = ref([
            {
                id: 0,
                name_ar: 'فيصل الحربي',
                name_en: 'Faisal Al-Harbi',
                text_ar: 'ما تقدمونه هو فعلا شيء رائع ويخدم كثير من العملاء المولعين بالشراء من المواقع الصينيه ،، وتوفرون على الكثير منهم ماقد يحدث لهم من نصب واحتيال من قبل معظم الباعه في الصين ،، متفائلين جدا بما تقدمونه ،، لكم جزيل الشكر',
                text_en: 'What you offer is really great and serves many customers who are fond of buying from Chinese sites. You save many of them from being scammed and defrauded by most sellers in China. We are very optimistic about what you offer. Thank you very much.',
                rate: 5
            },
            {
                id: 1,
                name_ar: 'نايف العتيبي',
                name_en: 'Naif Al-Otaibi',
                text_ar: 'من افضل الشركات الموجوده والتى تعاملت معها الى حد الان خدماتهم سريعه وممتازه الدعم الفنى سريع المتسوق الشخصي امين ويختار لك الافضل من البضائع وبافضل الاسعار حقا شكرا لهم واتمنى لهم المزيد من النجاح والتقدم ربي يوفقكم .. هذا رأيي بهذه الشركه والله على ما اقول شهيد',
                text_en: 'One of the best companies I have dealt with so far. Their services are fast and excellent. The technical support is fast. The personal shopper is honest and chooses the best goods for you at the best prices. Really, thank you to them and I wish them more success and progress. May God grant you success. This is my opinion of this company, and God is my witness to what I say.',
                rate: 4
            },
            {
                id: 2,
                name_ar: 'خالد نواف',
                name_en: 'Khaild Nawaf',
                text_ar: 'الاهتمام بالشحنات وخصوصا القابلة للكسر والتي عليها استيكر.. وتنبيه المخرجين الذين تتعاملون معهم بأهمية هذا الشي ،، شكرا لخدمتكم وبالطبع ان شاء الله سيتم التعامل معكم مرة اخرى...',
                text_en: 'Pay attention to shipments, especially fragile ones that have stickers on them.. and alert the directors you deal with about the importance of this matter. Thank you for your service, and of course, God willing, we will deal with you again...',
                rate: 5
            },
            {
                id: 3,
                name_ar: 'مسعود سعيد',
                name_en: 'Masoud Saeed',
                text_ar: 'أسأل الله أن يوفقكم ويسعدكم ، فقد يسرتم علينا بفضل الله أمور معقدة ومتعبة ما كانت تتم بدون خدماتكم المميزة ومجهوداتكم الرائعة ، لكم مني كل محبة وتقدير',
                text_en: 'I ask God to grant you success and happiness. By the grace of God, you have made complex and tiring matters easy for us that would not have been possible without your distinguished services and wonderful efforts. You have all my love and appreciation.',
                rate: 3
            }
        ]);

        onMounted(() => {
            createOffsets();
            window.addEventListener("resize", createOffsets);
        });

        function createOffsets() {

            const sectionWithOffset = document.querySelector('.reviewsSection');
            const sectionWithOffsetSlider = document.querySelector('.reviewsSlider');

            const offset = (window.innerWidth - 1100) / 2;
            const mqLarge = window.matchMedia("(min-width: 1200px)");

            if (sectionWithOffset && mqLarge.matches) {
                sectionWithOffsetSlider.style.marginInlineStart = offset + "px";
            } else {
                sectionWithOffsetSlider.style.marginInlineStart = 0;
            }
        }

        return {
            modules: [Pagination, Autoplay],
            reviewsList,
            locale,
        }
    }
}
</script>

<style lang="scss">
.reviews-pagination {

    @apply static flex justify-center items-center gap-[10px] mt-[30px];

    @media (max-width: 767px) {
        @apply mt-5
    }

    .swiper-pagination-bullet {
        @apply m-0 w-[39px] h-[8px] bg-[#EAEAEA] rounded-[4px] cursor-pointer opacity-100;

        &.swiper-pagination-bullet-active {
            background: transparent linear-gradient(180deg, #48A6A4 10%, #3D8D89 44%) 0% 0% no-repeat padding-box;
        }
    }


}
</style>