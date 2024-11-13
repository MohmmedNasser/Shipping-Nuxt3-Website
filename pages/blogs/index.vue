<template>
    <PageHeading :pageDataHeading="pageDataHeading" />

    <section class="my-[30px] lg:mt-[50px] lg:mb-[86px] relative">
        <div class="container">

            <div class="">
                <form class="w-auto">
                    <div class="relative max-w-[544px] h-[45px] mx-auto">
                        <span class="absolute top-[8px] start-[17px] w-[25px] h-[26px]">
                            <svg id="search-normal" xmlns="http://www.w3.org/2000/svg" width="26" height="26"
                                viewBox="0 0 26 26">
                                <g id="vuesax_twotone_search-normal" data-name="vuesax/twotone/search-normal">
                                    <g id="search-normal-2" data-name="search-normal">
                                        <path id="Union_1" data-name="Union 1"
                                            d="M-2240.94-1466.967l3.835,3.862Zm-19.289-8.278a10.984,10.984,0,0,1,10.984-10.984,10.984,10.984,0,0,1,10.983,10.984,10.984,10.984,0,0,1-10.983,10.984A10.984,10.984,0,0,1-2260.229-1475.245Z"
                                            transform="translate(2261.667 1487.667)" fill="none" stroke="#9b9b9b"
                                            stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            stroke-dasharray="0 0" />
                                        <path id="Vector" d="M26,0V26H0V0Z" fill="none" opacity="0" />
                                    </g>
                                </g>
                            </svg>
                        </span>
                        <input type="text"
                            class="bg-white rounded-[23px] w-full h-full ps-[52px] border border-solid border-[#E6E6E6] placeholder:font-bold placeholder:text-[#9B9B9B] placeholder:text-[14px] outline-none"
                            :placeholder="$t('search')">
                    </div>
                </form>

                <div
                    class="grid grid-cols-2 lg:grid-cols-[repeat(auto-fill,_minmax(260px,_1fr))] gap-[10px] lg:gap-x-[16px] lg:gap-y-[35.4px] mt-30px lg:mt-[61px]">

                    <template v-for="item in blogItems" :key="item.id">
                        <BlogCard :blogList="item" />
                    </template>
                </div>

            </div>
        </div>

        <div class="innerpage-pattern-one">
            <img src="/img/services-box.svg" :alt="$t('header.blogs')" :title="$t('header.blogs')" class="img-fluid"
                loading="lazy">
        </div>

        <div class="innerpage-pattern-two">
            <img src="/img/our-services-plane2.svg" :alt="$t('header.blogs')" :title="$t('header.blogs')"
                class="img-fluid" loading="lazy">
        </div>

        <div class="innerpage-pattern-three">
            <img src="/img/shipping-plane.svg" :alt="$t('header.blogs')" :title="$t('header.blogs')" class="img-fluid"
                loading="lazy">
        </div>

        <div class="innerpage-pattern-four">
            <img src="/img/services-truck.svg" :alt="$t('header.blogs')" :title="$t('header.blogs')" class="img-fluid"
                loading="lazy">
        </div>


    </section>

</template>

<script setup lang="ts">

// const { locale } = useI18n();

const pageDataHeading = {
    title_ar: 'المدونة',
    title_en: 'blogs',
    subTitle_ar: 'طرح كافة المستجدات، نسعى لمساعدتكم عبر تقديم المزيد من الشروحات عن خدماتنا وكل ما تريد معرفته..',
    subTitle_en: 'We provide every new, MYCN seek to help you by providing explanations about our services or everything you need to know..',
    bg: 'blogs-heading.jpg',
    span_ar: '',
    span_en: ''
};

const blogItems = ref([
    {
        id: 1,
        img: 'bold-img.jpg',
        title_ar: 'نظرة شاملة على أسعار الشحن الحالية وأسعار الحاويات',
        title_en: 'A comprehensive look at current freight rates and container prices.',
        show: 252,
        like: 175,
        dislike: 10,
        time: '2024-04-13T08:30:00Z',
    },
    {
        id: 2,
        img: 'bold-img1.jpeg',
        title_ar: 'احتفالات رأس السنه الصينيه',
        title_en: 'Chinese New Year celebrations.',
        show: 400,
        like: 47,
        dislike: 30,
        time: '2024-05-20T010:30:00Z',
    },
    {
        id: 3,
        img: 'bold-img2.jpg',
        title_ar: 'ما هو الفرق بين موقع علي بابا وموقع 1688 الصيني ؟ وأيهما أفضل ؟',
        title_en: 'What is the difference between Alibaba and 1688 Chinese website? Which is better?.',
        show: 300,
        like: 75,
        dislike: 5,
        time: '2024-10-06T015:00:00Z',
    },
])

</script>

<style scoped></style>