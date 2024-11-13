<template>
    <footer class="footer" :class="[paddingTop ? 'pt-5 lg:pt-[162px]' : 'pt-[20px] lg:pt-[38px]']">
        <div class="container">
            <div class="">
                <div class="mb-5 md:mb-[26px] flex justify-between items-center gap-[10px]">
                    <div class="w-auto lg:w-[120p.21x]">
                        <NuxtImg src="/img/logo-white.svg" alt="MYCN" title="MYCN" class="w-100px lg:w-[120.21px]"
                            loading="lazy" densities="x1">
                        </NuxtImg>
                    </div>

                    <div id="scrollUpButton" @click="scrollUpButton"
                        class="go-top second-btn w-[35px] h-[35px] lg:w-[48px] lg:h-[48px] rounded-full overflow-hidden flex items-center justify-center ltr:-rotate-180">
                        <svg xmlns="http://www.w3.org/2000/svg" width="19.159" height="19.159"
                            viewBox="0 0 19.159 19.159">
                            <g id="Component_2" data-name="Component 2" transform="translate(0 0)">
                                <path id="Path_10" data-name="Path 10"
                                    d="M9.579,0,7.838,1.742l6.594,6.594H0v2.488H14.431L7.838,17.417l1.742,1.742,9.579-9.579Z"
                                    transform="translate(0 19.159) rotate(-90)" fill="#fff" />
                            </g>
                        </svg>
                    </div>

                </div>
                <div
                    class="text-white grid grid-cols-[100%] gap-[15px] md:grid-cols-[1fr_2fr] md:gap-[30px_20px] lg:gap-[100px] lg:grid-cols-[1fr_2fr_1fr] ">
                    <div class="menu-list" v-for="(footList, index) in footerList" :key="index">
                        <h5 class="text-base font-bold color-[#EFB52A] mb-[10px] leading-[25px] relative ps-6">
                            {{ locale == 'ar' ? footList.colName_ar : footList.colName_en }}
                        </h5>
                        <ul class="ps-6" :class="footList.links.length > 6 ? 'grid grid-cols-2' : ''">
                            <li class=" mb-[10px] last:mb-0" v-for="(link, index) in footList.links" :key="index">
                                <a :href="link.to"
                                    class="text-white text-sm font-semibold transition-colors duration-[300ms] hover:text-[#EFB52A]">
                                    {{ locale == 'ar' ? link.text_ar : link.text_en }}
                                </a>
                            </li>
                        </ul>

                    </div>

                    <div class="menu-list">
                        <h5 class="text-base font-bold color-[#EFB52A] mb-[10px] leading-[25px] relative ps-6">
                            {{ locale == 'ar' ? workTime[0].colName_ar : workTime[0].colName_en }}
                        </h5>
                        <p class="text-white text-sm font-semibold ps-6">
                            {{ locale == 'ar' ? workTime[0].days_ar : workTime[0].days_en }}
                        </p>
                        <div class="mt-[5px] ps-6 max-w-[200px]">
                            <span class="text-[#676767] text-sm font-semibold">
                                {{ locale == 'ar' ? workTime[0].times[0].span_ar : workTime[0].times[0].span_en }}
                            </span>
                            <span class="text-[#676767] text-sm font-semibold"> - </span>
                            <span class="text-[#676767] text-sm font-semibold">
                                {{ locale == 'ar' ? workTime[0].times[1].span_ar : workTime[0].times[1].span_en }}
                            </span>
                            <span class="text-[#676767] text-sm font-semibold">
                                {{ locale == 'ar' ? workTime[0].times[2].span_ar : workTime[0].times[2].span_en }}
                            </span>
                        </div>
                    </div>

                </div>
            </div>
            <div
                class="py-[16px] flex justify-between items-center flex-wrap border-t-[1px] border-solid border-[#ffffff1a] mt-[20px] lg:mt-60px">
                <p class="text-[12px] md:text-[14px] font-medium text-white">
                    {{ $t('footer.all_rights_are_save') }} <span class="currentYear">{{ getYear }}</span> &copy; MYCN
                </p>
                <ul class="flex items-center gap-[6px]">
                    <li v-for="(social, index) in socialMedia" :key="index">
                        <a :href="social.link"
                            class="group w-[25px] h-[25px] lg:w-[30px] lg:h-[30px] bg-white rounded-full flex items-center justify-center transition duration-[300ms] hover:bg-[#245955]"
                            target="_blank" :title="social.siteName">
                            <img :src="'/img/' + social.icon" :alt="social.siteName"
                                class="w-auto lg:w-[40%] group-hover:invert" :title="social.siteName" loading="lazy">
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">

import { useEventListener } from '@vueuse/core';
const { locale } = useI18n();

const footerList = [
    {
        colName_ar: 'المزيد عنا',
        colName_en: 'More about us',
        links: [
            {
                to: '/',
                text_ar: 'من نحن',
                text_en: 'About Us',
            },
            {
                to: '/',
                text_ar: 'الأسئلة الشائعة',
                text_en: 'FAQ'
            },
            {
                to: '/',
                text_ar: 'سياسة الارجاع',
                text_en: 'Return Policy'
            },
        ]
    },
    {
        colName_ar: 'المساعدة',
        colName_en: 'Help',
        links: [
            {
                to: '/',
                text_ar: 'شروط الاستخدام',
                text_en: 'Terms of Use',
            },
            {
                to: '/',
                text_ar: 'سياسة الخصوصية',
                text_en: 'Privacy Policy',
            },
            {
                to: '/',
                text_ar: 'شروط الشحن',
                text_en: 'Shipping Terms',
            },
            {
                to: '/',
                text_ar: 'الشحنات المحظورة',
                text_en: 'Prohibited Shipments',
            },
            {
                to: '/',
                text_ar: 'المدونة',
                text_en: 'Blogs',
            },
            {
                to: '/',
                text_ar: 'تواصل معنا',
                text_en: 'Contact Us',
            }
        ],
    },

];

const workTime = [
    {
        colName_ar: 'أوقات العمل',
        colName_en: 'Working Hours',
        days_ar: 'من الاحد الى الجمعة',
        days_en: 'From Sunday to Thursday',
        times: [
            {
                span_ar: '9:00 صباحاً ',
                span_en: '9:00 AM',
            },
            {
                span_ar: '10:00 مساءاً ',
                span_en: '5:00 PM',
            },
            {
                span_ar: 'بتوقيت السعودية ',
                span_en: 'Saudi Timing',
            },
        ]
    }
]

const socialMedia = [
    {
        siteName: 'X',
        link: 'https://twitter.com',
        icon: 'footer-x.svg'
    },
    {
        siteName: 'instagram',
        link: 'http://instagram.com',
        icon: 'footer-instagram.svg'
    },
    {
        siteName: 'tiktok',
        link: 'https://www.tiktok.com/en/',
        icon: 'footer-tiktok.svg'
    },
    {
        siteName: 'snap',
        link: 'https://www.snapchat.com/',
        icon: 'footer-snap.svg'
    },
];

const currentYear = ref(2024);
const hasPadding = ref(false);
const route = useRoute();

onMounted(() => {
    scrollUpButton();
    // currentYear.value = new Date().getFullYear();
});

const getYear = computed(() => {
    return currentYear.value = new Date().getFullYear();
});

const paddingTop = computed(() => {
    if (route.path == '/') {
        return hasPadding.value = true
    }
});

const scrollUpButton = () => {
    const scrollUpButton = document.querySelector('#scrollUpButton');
    useEventListener(scrollUpButton, 'click', () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    })
}

</script>

<style scoped lang="scss">
.footer {
    background: transparent linear-gradient(180deg, #202020 0%, #303030 100%) 0% 0% no-repeat padding-box;
}

.go-top {
    background: transparent linear-gradient(227deg, #E0980D 0%, #F2C030 100%) 0% 0% no-repeat padding-box;

    &:hover {
        background: transparent linear-gradient(-227deg, #E0980D 0%, #F2C030 100%) 0% 0% no-repeat padding-box;
    }
}

.menu-list h5 {
    &:after {
        content: "";
        position: absolute;
        top: 8px;
        inset-inline-start: 10px;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: transparent linear-gradient(192deg, #F8A300 0%, #EBBB38 10%, #F8A300 22%, #EBBB38 100%) 0% 0% no-repeat padding-box;
    }
}
</style>