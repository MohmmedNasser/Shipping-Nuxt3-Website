<template>
    <PageHeading :pageDataHeading="pageDataHeading" />

    <section class="my-[30px] lg:mt-[50px] lg:mb-[86px] relative">
        <div class="container">
            <div class="p-[25px] pb-[43px]">
                <div
                    class="grid grid-cols-[100%] lg:grid-cols-[416px_1fr]  gap-[25px] lg:gap-[34px] items-center pb-[34px] border-b border-solid border-[#CFCFCF]">
                    <div
                        class="h-[200px] sm:h-[280px] rounded-[15px] sm:rounded-[23px] overflow-hidden w-full lg:w-[416px]">
                        <NuxtImg :src="'/img/' + blogData.img" :alt="$t('header.blogs')" class="w-full h-full"
                            loading="lazy" format="webp" densities="x1" size="356px lg:416px" />
                    </div>
                    <div>

                        <div class="top-section-title section-title mb-[16px]">
                            <h5>
                                <span class="title text-[18px] sm:text-[20px] lg:text-[22px]">
                                    {{ blogData.title }}
                                </span>
                            </h5>
                        </div>
                        <div class="text-[#444444] text-sm font-semibold mb-[16px]">
                            {{ $t('publication_date') }}
                            <span>
                                {{ blogData.time }}
                            </span>
                        </div>

                        <div class="flex items-center gap-[22px]">
                            <div class="flex items-center gap-[7px]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="19.284" height="11.867"
                                    viewBox="0 0 19.284 11.867">
                                    <path id="eye-svgrepo-com"
                                        d="M26.642,28.785a2.225,2.225,0,1,1-2.225,2.225A2.225,2.225,0,0,1,26.642,28.785Zm0-3.708c5.192,0,9.642,3.708,9.642,5.934s-4.45,5.934-9.642,5.934S17,33.236,17,31.01,21.45,25.077,26.642,25.077Zm0,1.854a4.079,4.079,0,1,0,4.079,4.079A4.079,4.079,0,0,0,26.642,26.931Z"
                                        transform="translate(-17 -25.077)" fill="#ebbb38"></path>
                                </svg>
                                <span class="text-xs font-medium text-[#444444]">
                                    {{ blogData.show }}
                                </span>
                            </div>

                            <div class="flex items-center gap-[7px]">
                                <svg id="Group_142111" data-name="Group 142111" xmlns="http://www.w3.org/2000/svg"
                                    width="13.167" height="12.804" viewBox="0 0 13.167 12.804">
                                    <path id="Vector"
                                        d="M8.323,4.534h-2.7a.59.59,0,0,1-.454-.2.621.621,0,0,1-.138-.507l.336-2.16A1.4,1.4,0,0,0,2.851.583L.079,4.711,0,4.843v5.821l.1.1,2.087,1.613a2.169,2.169,0,0,0,1.343.428H6.1a2.1,2.1,0,0,0,1.969-1.475L9.686,6.4a1.387,1.387,0,0,0-.132-1.284A1.466,1.466,0,0,0,8.323,4.534Z"
                                        transform="translate(3.385 0)" fill="#ebbb38" opacity="0.8"></path>
                                    <path id="Vector-2" data-name="Vector"
                                        d="M1.435,0C.415,0,0,.4,0,1.37V7.987c0,.975.415,1.37,1.435,1.37h.678c1.021,0,1.435-.4,1.435-1.37V1.363C3.549.4,3.134,0,2.114,0Z"
                                        transform="translate(0 2.71)" fill="#ebbb38"></path>
                                </svg>
                                <span class="text-xs font-medium text-[#444444]">
                                    {{ blogData.like }}
                                </span>
                            </div>

                            <div class="flex items-center gap-[7px]">
                                <svg id="Group_142111" data-name="Group 142111" xmlns="http://www.w3.org/2000/svg"
                                    width="13.167" height="12.804" viewBox="0 0 13.167 12.804">
                                    <path id="Vector"
                                        d="M1.46,8.27h2.7a.59.59,0,0,1,.454.2.621.621,0,0,1,.138.507l-.336,2.16a1.4,1.4,0,0,0,2.515,1.08L9.7,8.093l.079-.132V2.14l-.1-.1L7.6.428A2.169,2.169,0,0,0,6.253,0H3.685A2.1,2.1,0,0,0,1.717,1.475L.1,6.407A1.387,1.387,0,0,0,.229,7.691,1.466,1.466,0,0,0,1.46,8.27Z"
                                        transform="translate(0 0)" fill="#ebbb38" opacity="0.8"></path>
                                    <path id="Vector-2" data-name="Vector"
                                        d="M2.114,9.357c1.021,0,1.435-.4,1.435-1.37V1.37C3.549.4,3.134,0,2.114,0H1.435C.415,0,0,.4,0,1.37V7.994c0,.968.415,1.363,1.435,1.363Z"
                                        transform="translate(9.618 0.737)" fill="#ebbb38"></path>
                                </svg>
                                <span class="text-xs font-medium text-[#444444]">
                                    {{ blogData.dislike }}
                                </span>
                            </div>
                        </div>

                        <!-- {{ $route.fullPath }} -->

                        <ul class="flex items-center gap-[6px] mt-[21px]">
                            <li>
                                <a :href="`https://x.com/share?url=http://localhost:3000/${$route.fullPath}&text=${blogData.title}`"
                                    target="_blank"
                                    class="w-[26px] h-[26px] rounded-full overflow-hidden bg-[#3D8D89] flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="11.345" height="11.355"
                                        viewBox="0 0 11.345 11.355">
                                        <path id="X_logo_2023_original"
                                            d="M6.753,4.809,10.977,0h-1L6.307,4.174,3.379,0H0L4.43,6.313,0,11.355H1L4.873,6.946l3.094,4.409h3.379M1.362.739H2.9l7.077,9.913H8.438"
                                            fill="#fff" />
                                    </svg>
                                </a>
                            </li>

                            <li>
                                <a :href="`https://www.facebook.com/sharer.php?u=${blogData.title}`" target="_blank"
                                    class="w-[26px] h-[26px] rounded-full overflow-hidden bg-[#3D8D89] flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                                        <path fill="#FFFFFF"
                                            d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z" />
                                    </svg>
                                </a>
                            </li>

                            <li>
                                <a :href="`https://www.linkedin.com/sharing/share-offsite/?url=http://localhost:3000/${$route.fullPath}`"
                                    target="_blank"
                                    class="w-[26px] h-[26px] rounded-full overflow-hidden bg-[#3D8D89] flex items-center justify-center">

                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24">
                                        <path fill="#FFFFFF" fill-rule="evenodd"
                                            d="M1 2.838A1.84 1.84 0 0 1 2.838 1H21.16A1.837 1.837 0 0 1 23 2.838V21.16A1.84 1.84 0 0 1 21.161 23H2.838A1.84 1.84 0 0 1 1 21.161zm8.708 6.55h2.979v1.496c.43-.86 1.53-1.634 3.183-1.634c3.169 0 3.92 1.713 3.92 4.856v5.822h-3.207v-5.106c0-1.79-.43-2.8-1.522-2.8c-1.515 0-2.145 1.089-2.145 2.8v5.106H9.708zm-5.5 10.403h3.208V9.25H4.208zM7.875 5.812a2.063 2.063 0 1 1-4.125 0a2.063 2.063 0 0 1 4.125 0"
                                            clip-rule="evenodd" />
                                    </svg>

                                </a>
                            </li>



                        </ul>

                    </div>
                </div>

                <div class="pt-[21px]" id="blog_details_content">
                    <div v-html="blogData.details">
                    </div>
                </div>
            </div>

            <div class="mt-[30px] lg:mt-[45px]">
                <div class="related-section-title section-title mb-[20px] lg:mb-[40px]">
                    <h5>
                        <span class="title">{{ $t('related_articles') }}</span>
                    </h5>
                </div>

                <swiper :slides-per-view="2" :space-between="10" :modules="modules"
                    :pagination="{ el: '.reviews-pagination', clickable: true }"
                    :autoplay="{ delay: 3500, disableOnInteraction: false, pauseOnMouseEnter: true }" :breakpoints="{
                        1199: {
                            slidesPerView: 3,
                            spaceBetween: 10
                        },
                        1200: {
                            slidesPerView: 4,
                            spaceBetween: 15
                        },
                    }">

                    <swiper-slide v-for="blog in blogItems" :key="blog.id">
                        <BlogCard :blogList="blog" />
                    </swiper-slide>

                </swiper>

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

<script>


import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Autoplay } from "swiper/modules";
import 'swiper/css/pagination';
import { useDateFormat } from '@vueuse/core';

export default {


    components: {
        Swiper,
        SwiperSlide,
    },


    setup() {

        const blogItems = ref([
            {
                id: 1,
                img: 'bold-img.jpg',
                title: 'نظرة شاملة على أسعار الشحن الحالية وأسعار الحاويات',
                show: 252,
                like: 175,
                dislike: 10,
                time: 'الأحد, 25 أكتوبر 2020',
                details: `
            <p style="text-align: right;"><strong>رأس السنة الصينيه<br><br></strong>رحلة فنية وتقليدية تستحق الاحتفال<br>في موسم الاحتفالات والتجديد، يبرز عيد رأس السنة الصينية كواحد من أكبر وأهم الاحتفالات التقليدية حول العالم. يشكل هذا الحدث السنوي فرصة للتعبير عن الحب والامتنان، ويمثل نقطة بداية للعديد من الآمال والطموحات. في هذا السياق، ندعوكم لاستكشاف جوانب رأس السنة الصينية بمزيد من التفصيل، لنحظى بفهم أعمق حول تلك التقاليد والمظاهر الثقافية المميزة.<br><br></p>
            <ul>
            <li dir="rtl" style="text-align: right;"><strong>تاريخ الاحتفال</strong>:<br>تحتفل الصين والعديد من الثقافات الآسيوية برأس السنة الصينية علما ان تاريخ احتفالات رأس السنة الصينية يتغير كل عام وفقًا لتقويم هجري للقمر. غالبًا ما تكون الاحتفالات في فترة ما بين 21 يناير و20 فبراير. اما في عام 2024 ستبداء الاحتفالات بتاريخ 10 – 17 فبراير ويعتبر يوم رأس السنة الصينية يوماً هاماً في الثقافة الصينية ويشمل الاحتفال بتقاليد مختلفة، مثل مشاهدة العروض النارية، وتناول الطعام الخاص بالاحتفالات، ورؤية الأهل والأصدقاء.<br><br></li>
            <li dir="rtl" style="text-align: right;"><strong>التقاليد والمظاهر الثقافية</strong><strong>:</strong></li>
            </ul>
            <ol dir="rtl" style="text-align: right;">
            <li><strong>رقص التنين والأسد</strong>: تعتبر رقصات التنين والأسد أحد أبرز التقاليد الاحتفالية. تؤدي فرق رقصات مبهرة باستخدام تماثيل تنين وأسد ترمز إلى القوة والحظ الجيد.<br><br></li>
            <li><strong>ليلة رأس السنة الصينية</strong>: تشهد الليلة الأخيرة من السنة القمرية القديمة احتفالات رائعة بالألعاب النارية والأضواء الملونة لترحيب بالعام الجديد.<br><br></li>
            <li><strong>تجنب الحوادث (نيان):</strong> يتخذ الناس إجراءات لتجنب الحوادث في العام الجديد، حيث يؤمنون بأن الأرواح الشريرة تغادر المنزل في منتصف الليل.<br><br></li>
            <li><strong>طقوس العائلة</strong><strong>:</strong><br>رغم أن رأس السنة الصينية تجذب الكثير من الاحتفالات العامة، إلا أنها تعتبر فرصة للتجمع العائلي. تتميز هذه الفترة بزيارة الأقارب وتبادل الهدايا التي تحمل معاني تقليدية.<br><br></li>
            <li><strong>التأثير على عمليات الشحن</strong><strong>:</strong><br>يشهد شهر رأس السنة الصينية زيادة كبيرة في الطلب على الشحن الدولي. يحدث ذلك بسبب التسوق الكثيف لشراء الهدايا والمنتجات الجديدة للاحتفال بالعام الجديد. تحقق شركات الشحن من تلبية احتياجات الزبائن وتعتمد استراتيجيات متطورة لضمان استمرارية العمليات.<br><strong><br>في الختام:</strong><br><strong>رأس السنة الصينية ليس فقط احتفالًا بتغيير السنة، بل هو تجسيد للتاريخ والثقافة الصينية الغنية. يتيح للناس فرصة للتفكير في مضي الوقت والتحضير لبداية جديدة. من خلال فهم هذه التقاليد والمظاهر، يمكن لشركات الشحن أن تحقق تكاملًا أكبر في خدماتها وتساهم في نقل جوانب هذا الاحتفال الفني للزبائن حول العالم .</strong></li>
            </ol>
            <p dir="rtl" style="text-align: right;">&nbsp;</p>
        `
            },
            {
                id: 2,
                img: 'bold-img1.jpeg',
                title: 'احتفالات رأس السنه الصينيه',
                show: 400,
                like: 47,
                dislike: 30,
                time: 'الأحد, 25 أكتوبر 2020',
                details: `
                        <p style="direction: rtl;">هل ترغب في الشراء والاستيراد من الصين بكل سهولة، مع ضمان استرجاع المبلغ المدفوع وضمان سلامة المنتج ومطابقته للمواصفات المطلوبة؟!</p>
<p style="direction: rtl;">خدمة المتسوق الشخصي لدينا تتيح لك الشراء نيابة عنك من الصين، حيث نوفر لك منتجات من موقعَي علي بابا الصيني وتاوباو، وتمكّنك من طلب المنتج باللغة العربية وبكل سهولة، دون مواجهة صعوبات في الشراء.</p>
<p style="direction: rtl;">المتسوق الشخصي لا يعرض جميع المنتجات المتوفرة على علي بابا الصيني وتاوباو، لكن يُمكنك إضافة رابط المنتج الذي ترغب فيه إن لم يكن متاحاً لدينا، وسنقوم بتفعيله مباشرة.</p>
<p style="direction: rtl;">مثلاً: إذا كنت تبحث عن منتج معين على علي بابا الصيني، قم بنسخ الرابط من الموقع الصيني، ثم الصقه في خانة البحث على المتسوق الشخصي. سيظهر لك المنتج تلقائيًا، ويمكنك طلبه مباشرة.</p>
<p style="direction: rtl;">تعرّف على كيفية الطلب والشراء من خلال لوحة التحكم الخاصة بك:</p>
<p style="direction: rtl;">أولاً: إذا كان المنتج الذي تبحث عنه متاحاً على المتسوق الشخصي:</p>
<ol>
<li style="list-style-type: none;">
<ol>
<li style="list-style-type: none;">
<ol>
<li style="list-style-type: none;">
<ol>
<li style="list-style-type: none;">
<ol>
<li style="list-style-type: none;">
<ol>
<li style="direction: rtl; text-align: right;">قم بالدخول إلى حسابك الشخصي في MYCN.</li>
<li style="direction: rtl; text-align: right;">اضغط على قسم الشراء والاستيراد من القائمة الجانبية.</li>
<li style="direction: rtl; text-align: right;">اختر "المتسوق الشخصي".</li>
<li style="direction: rtl; text-align: right;">ستظهر لك منتجات متنوعة معروضة على الموقع.</li>
<li style="direction: rtl; text-align: right;">اختر المنتج الذي ترغب في شرائه.</li>
<li style="direction: rtl; text-align: right;">أضف المنتج إلى سلة الشراء الخاصة بك.</li>
</ol>
</li>
</ol>
</li>
</ol>
</li>
</ol>
</li>
</ol>
</li>
</ol>
<div>
<div style="direction: rtl;">&nbsp;</div>
<div style="direction: rtl;"><img style="width: 999.88px;" src="../../../../../image/image_17256259961834879749.png" data-filename="1 (9).png"></div>
<div style="direction: rtl;">&nbsp;</div>
<div>
<p style="direction: rtl;">&nbsp;</p>
<p style="direction: rtl;">3. تأكد من مواصفات وخيارات المنتج الذي تريد طلبه مع مراعاة الحد الأدنى للكمية المطلوبة من خلال " معاينة السلة"</p>
</div>
<div style="direction: rtl;"><img style="width: 999.88px;" src="../../../../../image/image_17256259711029515010.png" data-filename="2 (7).png"></div>
<div>
<p style="direction: rtl;">&nbsp;</p>
<p style="direction: rtl;">&nbsp;</p>
<p style="direction: rtl;">4.&nbsp;&nbsp;بعد التأكد من المواصفات المطلوبة قم بتأكيد الطلب:</p>
</div>
<div style="direction: rtl;"><img style="width: 999.88px;" src="../../../../../image/image_17256258811488777817.png" data-filename="3 (7).png"></div>
<div style="direction: rtl;">&nbsp;</div>
<div>
<p style="direction: rtl;">&nbsp;</p>
<p style="direction: rtl;">5. الآن قم بتأكيد الدفع لشراء الطلب والضغط على " ادفع الآن"</p>
</div>
<div style="direction: rtl;"><img style="width: 999.88px;" src="../../../../../image/image_17256258481186446215.png" data-filename="4 (5).png"></div>
<div style="direction: rtl;">&nbsp;</div>
<div>
<p style="direction: rtl;">&nbsp;</p>
<p style="direction: rtl;">6. سيظهر لك ملخص الطلب وتفاصيل الدفع، قم بالضغط على تأكيد الدفع، مع العلم أن الطلب لا يتم اعتماده الا اذا تم خصم المبلغ من بطاقتك أو تم تحويل مبلغ مساوي لقيمة الطلب:</p>
</div>
<div style="direction: rtl;"><img style="width: 999.88px;" src="../../../../../image/image_1725625844230165546.png" data-filename="5 (3).png"></div>
<div style="direction: rtl;">&nbsp;</div>
<div>
<p style="direction: rtl;">&nbsp;</p>
<p style="direction: rtl;">7. يمكنك متابعة حالة الطلب الخاصة بك&nbsp;من خلال الضغط على "طلبات المتسوق"</p>
</div>
<div style="direction: rtl;"><img style="width: 999.88px;" src="../../../../../image/image_1725625851236253454.png" data-filename="6 (4).png"></div>
<div style="direction: rtl;">&nbsp;</div>
<div style="direction: rtl;"><span style="font-weight: 600;">ثانياً:</span>&nbsp;في حالة كان المنتج المطلوب غير متوفر على المتسوق الشخصي:</div>
<div style="direction: rtl;">&nbsp;</div>
<div style="direction: rtl;">عند عدم توفر المنتج المطلوب من علي بابا الصيني او تاوباو على المتسوق الشخصي، يمكنك إضافة المنتج بشكل مباشر من خلال الخطوات التالية:</div>
<div style="direction: rtl;">&nbsp;</div>
<div>
<p style="direction: rtl;">1.انسخ رابط المنتج الذي تريد اضافته، كما هو موضح في الصورة ( مثال فقط):</p>
<p style="direction: rtl;">&nbsp;</p>
</div>
<div style="direction: rtl;"><img style="width: 999.88px;" src="../../../../../image/image_17256259891107580310.png" data-filename="7 (3).png"></div>
<div style="direction: rtl;">&nbsp;</div>
<div>
<p style="direction: rtl;">&nbsp;</p>
<p style="direction: rtl;">2. قم بلصق الرابط في خانة البحث على المتسوق الشخصي</p>
</div>
<div style="direction: rtl;"><img style="width: 999.88px;" src="../../../../../image/image_1725625997866291327.png" data-filename="8 (2).png"></div>
<div>
<p style="direction: rtl;">&nbsp;</p>
<p style="direction: rtl;">3. سيظهر لك المنتج مباشرة وباللغة العربية ويمكنك شرائه بنفس الخطوات السابقة التي تم ذكرها.</p>
</div>
<div>
<p style="direction: rtl;">&nbsp;</p>
<p style="direction: rtl;"><img style="width: 999.88px;" src="../../../../../image/image_1725625964870248714.png" data-filename="9 (1).png"></p>
</div>
</div>
<div style="direction: rtl;">&nbsp;</div>
<p class="MsoNormal" dir="RTL" style="direction: rtl; unicode-bidi: embed;">&nbsp;</p>
        `
            },
            {
                id: 3,
                img: 'bold-img2.jpg',
                title: 'ما هو الفرق بين موقع علي بابا وموقع 1688 الصيني ؟ وأيهما أفضل ؟',
                show: 300,
                like: 75,
                dislike: 5,
                time: 'الأحد, 25 أكتوبر 2020',
                details: `

<p class="MsoNormal" dir="RTL" style="direction: rtl; unicode-bidi: embed;"><span lang="AR-JO" style="font-size: 9.0pt; line-height: 107%; font-family: AbdoMaster-DemiBold; mso-bidi-language: AR-JO;">موقع علي بابا أحد أهم المواقع العالمية الرائدة في&nbsp; مجال التجارة الالكترونية والتسوق عبر الانترنت بالجمله، حيث يعتبر الموقع وجهه للكثيرين في العالم والعربي نظراً للتنوع الكبير في المنتجات منهم المشتريين مثل: الشركات، وكبار التجار،&nbsp; وأصحاب الأعمال، والمتاجر الصغيرة لشراء منتجاتهم بكميات كبيرة وأقل الأسعار، والبائعين والموردين لعرض بضائعهم وبيعها بسهوله نظراً للاقبال الشديد على الموقع.</span></p>
<p class="MsoNormal" dir="RTL" style="direction: rtl; unicode-bidi: embed;"><img style="width: 1015.91px;" src="../../../../../image/image_16884657911227580271.png" data-filename="3.png"><span lang="AR-JO" style="font-size: 9.0pt; line-height: 107%; font-family: AbdoMaster-DemiBold; mso-bidi-language: AR-JO;"><br></span></p>
<p class="MsoNormal" dir="RTL" style="direction: rtl; unicode-bidi: embed;"><span style="font-family: AbdoMaster-DemiBold; font-size: 9pt;">على الرغم من الايجابيات الكثيرة للموقع إلا أن المشتريين يعانون من بعض المشاكل التي قد تؤثر بشكل سلبي على تجارتهم منها :</span></p>
<p class="MsoListParagraphCxSpFirst" dir="RTL" style="margin: 0cm 36pt 8pt 0cm; text-indent: -18pt; direction: rtl; unicode-bidi: embed;"><!-- [if !supportLists]--><span style="font-size: 9.0pt; line-height: 107%; font-family: Symbol; mso-fareast-font-family: Symbol; mso-bidi-font-family: Symbol; mso-bidi-language: AR-JO;">·<span style="font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 7pt; line-height: normal; font-family: 'Times New Roman';">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><!--[endif]--><span lang="AR-JO" style="font-size: 9.0pt; line-height: 107%; font-family: AbdoMaster-DemiBold; mso-bidi-language: AR-JO;">صور وفيديوهات المنتجات قد تكون عكس المنتج واقعياً.</span></p>
<p class="MsoListParagraphCxSpMiddle" dir="RTL" style="margin: 0cm 36pt 8pt 0cm; text-indent: -18pt; direction: rtl; unicode-bidi: embed;"><!-- [if !supportLists]--><span style="font-size: 9.0pt; line-height: 107%; font-family: Symbol; mso-fareast-font-family: Symbol; mso-bidi-font-family: Symbol; mso-bidi-language: AR-JO;">·<span style="font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 7pt; line-height: normal; font-family: 'Times New Roman';">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><!--[endif]--><span lang="AR-JO" style="font-size: 9.0pt; line-height: 107%; font-family: AbdoMaster-DemiBold; mso-bidi-language: AR-JO;">يتحمل المشتري في بعض الأحيان ألية شحن المنتج للمكان الذي يريده.</span></p>
<p class="MsoListParagraphCxSpMiddle" dir="RTL" style="margin: 0cm 36pt 8pt 0cm; text-indent: -18pt; direction: rtl; unicode-bidi: embed;"><!-- [if !supportLists]--><span style="font-size: 9.0pt; line-height: 107%; font-family: Symbol; mso-fareast-font-family: Symbol; mso-bidi-font-family: Symbol; mso-bidi-language: AR-JO;">·<span style="font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 7pt; line-height: normal; font-family: 'Times New Roman';">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><!--[endif]--><span lang="AR-JO" style="font-size: 9.0pt; line-height: 107%; font-family: AbdoMaster-DemiBold; mso-bidi-language: AR-JO;">قد يتعرض المشتري للنصب والاحتيال في حال طلب منه المورد التفاوض خارج الموقع.</span></p>
<p class="MsoListParagraphCxSpMiddle" dir="RTL" style="margin: 0cm 36pt 8pt 0cm; text-indent: -18pt; direction: rtl; unicode-bidi: embed;"><!-- [if !supportLists]--><span style="font-size: 9.0pt; line-height: 107%; font-family: Symbol; mso-fareast-font-family: Symbol; mso-bidi-font-family: Symbol; mso-bidi-language: AR-JO;">·<span style="font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 7pt; line-height: normal; font-family: 'Times New Roman';">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><!--[endif]--><span lang="AR-JO" style="font-size: 9.0pt; line-height: 107%; font-family: AbdoMaster-DemiBold; mso-bidi-language: AR-JO;">قد يتعامل المشتري مع مورد لا يملك رخصة تصدير، بالتالي لا يتم شحن طلباته وتتعرض تجارة المشتري للخسارة.</span></p>
<p class="MsoListParagraphCxSpLast" dir="RTL" style="margin: 0cm 36pt 8pt 0cm; text-indent: -18pt; direction: rtl; unicode-bidi: embed;"><!-- [if !supportLists]--><span style="font-size: 9.0pt; line-height: 107%; font-family: Symbol; mso-fareast-font-family: Symbol; mso-bidi-font-family: Symbol; mso-bidi-language: AR-JO;">·<span style="font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 7pt; line-height: normal; font-family: 'Times New Roman';">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><!--[endif]--><span lang="AR-JO" style="font-size: 9.0pt; line-height: 107%; font-family: AbdoMaster-DemiBold; mso-bidi-language: AR-JO;">عدم امتلاك القدرة الجيدة على التفاوض بأمر السعر مع المورد داخل موقع علي بابا، بالتالي قد يتعرض المشتري للخسارة.</span></p>
<p class="MsoNormal" dir="RTL" style="direction: rtl; unicode-bidi: embed;"><span lang="AR-JO" style="font-size: 9.0pt; line-height: 107%; font-family: AbdoMaster-DemiBold; mso-bidi-language: AR-JO;">لتجنب هذه المشاكل يجب البحث أولاً عن المصدر الذي يغذي الموردين ويحصلوا من خلاله على منتجاتهم بكميات ضخمة وجودة عالية بأقل الأسعار، ثانياً البحث عن ضامن أو ألية لفحص العينات والمنتجات المطلوبة والتأكد من جودتها قبل شراؤها من المتاجر والمصانع الصينية دون الحاجه للسفر إلى الصين.</span></p>
<p class="MsoNormal" dir="RTL" style="direction: rtl; unicode-bidi: embed;"><img style="width: 1015.91px;" src="../../../../../image/image_1688465789436158426.png" data-filename="2.png"></p>
<p class="MsoNormal" dir="RTL" style="direction: rtl; unicode-bidi: embed;"><span lang="AR-JO" style="font-size: 9.0pt; line-height: 107%; font-family: AbdoMaster-DemiBold; mso-bidi-language: AR-JO;">أثناء البحث وجد أن مصدر الموردين لجلب المنتجات هو موقع 1688 الصيني، فما هو موقع 1688 الصيني وما علاقته بموقع علي بابا ومورديه ؟ </span></p>
<p class="MsoNormal" dir="RTL" style="direction: rtl; unicode-bidi: embed;"><span lang="AR-JO" style="font-size: 9.0pt; line-height: 107%; font-family: AbdoMaster-DemiBold; mso-bidi-language: AR-JO;">موقع 1688 الصيني هو موقع للتسوق عبر الانترنت وبيع وشراء المنتجات المبتكرة والمتنوعة والحديثة، وأهم ما يميز الموقع ويجعله أفضل من موقع علي بابا هو أن الأسعار أقل بكثير نظراً&nbsp; لأن السعر يكون بسعر المصنع مباشرة وليس المورد.</span></p>
<p class="MsoNormal" dir="RTL" style="direction: rtl; unicode-bidi: embed;"><span lang="AR-JO" style="font-size: 9.0pt; line-height: 107%; font-family: AbdoMaster-DemiBold; mso-bidi-language: AR-JO;">للاستفادة والشراء من هذا الموقع هناك شروط لاستخدامه قد يعتبرها المشتري عائق كبير أمامه منها : </span></p>
<p class="MsoListParagraphCxSpFirst" dir="RTL" style="margin: 0cm 36pt 8pt 0cm; text-indent: -18pt; direction: rtl; unicode-bidi: embed;"><!-- [if !supportLists]--><span style="font-size: 9.0pt; line-height: 107%; font-family: Symbol; mso-fareast-font-family: Symbol; mso-bidi-font-family: Symbol; mso-bidi-language: AR-JO;">·<span style="font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 7pt; line-height: normal; font-family: 'Times New Roman';">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><!--[endif]--><span lang="AR-JO" style="font-size: 9.0pt; line-height: 107%; font-family: AbdoMaster-DemiBold; mso-bidi-language: AR-JO;">الموقع لا يقبل أي وسيلة دفع الكتروني إلا لمن يملك اعتماد بنكي صيني.</span></p>
<p class="MsoListParagraphCxSpMiddle" dir="RTL" style="margin: 0cm 36pt 8pt 0cm; text-indent: -18pt; direction: rtl; unicode-bidi: embed;"><!-- [if !supportLists]--><span style="font-size: 9.0pt; line-height: 107%; font-family: Symbol; mso-fareast-font-family: Symbol; mso-bidi-font-family: Symbol; mso-bidi-language: AR-JO;">·<span style="font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 7pt; line-height: normal; font-family: 'Times New Roman';">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><!--[endif]--><span lang="AR-JO" style="font-size: 9.0pt; line-height: 107%; font-family: AbdoMaster-DemiBold; mso-bidi-language: AR-JO;">يجب أن تملك عنوان بريد صيني، لأن الموقع لا يسمح بشحن المنتجات خارج الصين.</span></p>
<p class="MsoListParagraphCxSpMiddle" dir="RTL" style="margin: 0cm 36pt 8pt 0cm; text-indent: -18pt; direction: rtl; unicode-bidi: embed;"><!-- [if !supportLists]--><span style="font-size: 9.0pt; line-height: 107%; font-family: Symbol; mso-fareast-font-family: Symbol; mso-bidi-font-family: Symbol; mso-bidi-language: AR-JO;">·<span style="font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 7pt; line-height: normal; font-family: 'Times New Roman';">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><!--[endif]--><span lang="AR-JO" style="font-size: 9.0pt; line-height: 107%; font-family: AbdoMaster-DemiBold; mso-bidi-language: AR-JO;">عليك أن تكون متواجد داخل الصين لتتمكن من الشراء، لأن الموقع مخصص للصينين فقط.</span></p>
<p class="MsoListParagraphCxSpLast" dir="RTL" style="margin: 0cm 36pt 8pt 0cm; text-indent: -18pt; direction: rtl; unicode-bidi: embed;"><!-- [if !supportLists]--><span style="font-size: 9.0pt; line-height: 107%; font-family: Symbol; mso-fareast-font-family: Symbol; mso-bidi-font-family: Symbol; mso-bidi-language: AR-JO;">·<span style="font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 7pt; line-height: normal; font-family: 'Times New Roman';">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><!--[endif]--><span lang="AR-JO" style="font-size: 9.0pt; line-height: 107%; font-family: AbdoMaster-DemiBold; mso-bidi-language: AR-JO;">أن يكون المشتري على معرفة كاملة باللغة الصينية، لأن الموقع يدعم اللغة الصينية فقط. </span></p>
<p class="MsoNormal" dir="RTL" style="direction: rtl; unicode-bidi: embed;"><span lang="AR-JO" style="font-size: 9.0pt; line-height: 107%; font-family: AbdoMaster-DemiBold; mso-bidi-language: AR-JO;">في بعض الأحيان قد يتغلب المشتري على هذه المعيقات، ولكن يبقى أمامه مسؤولية وعائق أكبر وهو كيفية شحن منتجاته واختيار نوع وخط الشحن المناسب دون التعرض لمشاكل وضمان وصول الشحنات سالمه للمكان المحدد.</span></p>
<p class="MsoNormal" dir="RTL" style="margin-right: 18pt; direction: rtl; unicode-bidi: embed;"><span lang="AR-JO" style="font-size: 9.0pt; line-height: 107%; font-family: AbdoMaster-DemiBold; mso-bidi-language: AR-JO;">لأننا نعلم أن الشراء والاستيراد من موقع 1688 الصيني &nbsp;رغبة لكل تاجر&nbsp; وصاحب عمل يريد بدء تجارته من الصين وشراء منتجاته بأقل الأسعار لتحقيق هامش ربح عالي وتوسيع تجارته دون التعرض لخطر خسارات تجارية فادحة.</span></p>
<p class="MsoNormal" dir="RTL" style="margin-right: 18pt; direction: rtl; unicode-bidi: embed;"><span lang="AR-JO" style="font-size: 9.0pt; line-height: 107%; font-family: AbdoMaster-DemiBold; mso-bidi-language: AR-JO;">قمنا بالبحث عن أفضل الحلول التي قد تساعدكم في بدء تجارتكم من الصين دون الحاجه للسفر، ووجدنا أن منصه ماي سي ان التي تختص بالشحن والاستيراد من الصين &nbsp;توفر لكم كافة الضمانات والحلول لجميع معيقات السفر والاستيراد من الصين والشراء من موقع 1688 الصيني من خلال خدماتها المتكاملة :</span></p>
<p class="MsoListParagraphCxSpFirst" dir="RTL" style="margin: 0cm 36pt 8pt 0cm; text-indent: -18pt; direction: rtl; unicode-bidi: embed;"><!-- [if !supportLists]--><span style="font-size: 9.0pt; line-height: 107%; font-family: Symbol; mso-fareast-font-family: Symbol; mso-bidi-font-family: Symbol; mso-bidi-language: AR-JO;">·<span style="font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 7pt; line-height: normal; font-family: 'Times New Roman';">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><!--[endif]--><span lang="AR-JO" style="font-size: 9.0pt; line-height: 107%; font-family: AbdoMaster-DemiBold; mso-bidi-language: AR-JO;">توفير عنوان بريد صيني يمكنك من الشراء والاستيراد من الصين بكل سهوله.</span></p>
<p class="MsoListParagraphCxSpMiddle" dir="RTL" style="margin: 0cm 36pt 8pt 0cm; text-indent: -18pt; direction: rtl; unicode-bidi: embed;"><!-- [if !supportLists]--><span style="font-size: 9.0pt; line-height: 107%; font-family: Symbol; mso-fareast-font-family: Symbol; mso-bidi-font-family: Symbol; mso-bidi-language: AR-JO;">·<span style="font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 7pt; line-height: normal; font-family: 'Times New Roman';">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><!--[endif]--><span lang="AR-JO" style="font-size: 9.0pt; line-height: 107%; font-family: AbdoMaster-DemiBold; mso-bidi-language: AR-JO;">شراء المنتجات بأسعار المصانع من أشهر المتاجر والمصانع الصينية مثل : علي بابا الصيني 1688، تيمول، تاوباو باللغة العربية عبر خدمة الشراء من الصين، والتأكد من المنتجات وجودتها قبل شرؤاها من قبل فريق مختص.</span></p>
<p class="MsoListParagraphCxSpMiddle" dir="RTL" style="margin: 0cm 36pt 8pt 0cm; text-indent: -18pt; direction: rtl; unicode-bidi: embed;"><!-- [if !supportLists]--><span style="font-size: 9.0pt; line-height: 107%; font-family: Symbol; mso-fareast-font-family: Symbol; mso-bidi-font-family: Symbol; mso-bidi-language: AR-JO;">·<span style="font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 7pt; line-height: normal; font-family: 'Times New Roman';">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><!--[endif]--><span lang="AR-JO" style="font-size: 9.0pt; line-height: 107%; font-family: AbdoMaster-DemiBold; mso-bidi-language: AR-JO;">فرز وفحص وترتيب وتخزين المنتجات بعد شراؤها داخل مستودع مجهز بأحد التقنيات والخدمات.</span></p>
<p class="MsoListParagraphCxSpMiddle" dir="RTL" style="margin: 0cm 36pt 8pt 0cm; text-indent: -18pt; direction: rtl; unicode-bidi: embed;"><!-- [if !supportLists]--><span style="font-size: 9.0pt; line-height: 107%; font-family: Symbol; mso-fareast-font-family: Symbol; mso-bidi-font-family: Symbol; mso-bidi-language: AR-JO;">·<span style="font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 7pt; line-height: normal; font-family: 'Times New Roman';">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><!--[endif]--><span lang="AR-JO" style="font-size: 9.0pt; line-height: 107%; font-family: AbdoMaster-DemiBold; mso-bidi-language: AR-JO;">شحن المنتجات جواً أو بحراً شامل التخليص الجمركي. </span></p>
<p class="MsoListParagraphCxSpLast" dir="RTL" style="margin: 0cm 36pt 8pt 0cm; text-indent: -18pt; direction: rtl; unicode-bidi: embed;"><!-- [if !supportLists]--><span style="font-size: 9.0pt; line-height: 107%; font-family: Symbol; mso-fareast-font-family: Symbol; mso-bidi-font-family: Symbol; mso-bidi-language: AR-JO;">·<span style="font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 7pt; line-height: normal; font-family: 'Times New Roman';">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><!--[endif]--><span lang="AR-JO" style="font-size: 9.0pt; line-height: 107%; font-family: AbdoMaster-DemiBold; mso-bidi-language: AR-JO;">توفير خطوط شحن عالمية موثوقة لضمان سلامة شحناتك سليمه وعلى الموعد.</span></p>
<p>&nbsp;</p>
<p class="MsoNormal" dir="RTL" style="direction: rtl; unicode-bidi: embed;"><span lang="AR-JO" style="font-size: 9.0pt; line-height: 107%; font-family: AbdoMaster-DemiBold; mso-bidi-language: AR-JO;">للمزيد من التفاصيل حول هذه المنصه وخدماتها قم بزيارة رابط الموقع وتواصل مع فريق الدعم الفني الذي سيكون معك خطوة بخطوة من بدء تجارتك وشراء منتجاتك إلى وصولها باب بيتك.</span></p>
<p class="MsoNormal" dir="RTL" style="direction: rtl; unicode-bidi: embed;"><span lang="AR-JO" style="font-size: 9.0pt; line-height: 107%; font-family: AbdoMaster-DemiBold; mso-bidi-language: AR-JO;"><strong>رابط المنصة:&nbsp;</strong></span><a href="../../../../../">https://mycn.io/</a><span style="font-family: AbdoMaster-DemiBold;"><span style="font-size: 12px;"><strong>&nbsp;</strong></span></span></p>

`
            },
        ]);


        const blogData = ref({});
        const route = useRoute();
        const id = Number(route.params.id);
        const title = ref('');

        onMounted(() => {
            const filteredItem = blogItems.value.find(item => item.id === id);
            if (filteredItem) {
                blogData.value = filteredItem;
            };
        });

        const pageHead = computed(() => {
            return title.value = blogData.value.title
        });

        const blogTime = computed(() => {
            return useDateFormat(blogData.value.time, 'YYYY-MM-DD HH:mm:ss')
        });

        const pageDataHeading = {
            title_ar: pageHead,
            title_en: pageHead,
            subTitle_ar: '',
            subTitle_en: '',
            bg: 'blogs-heading.jpg',
            span_ar: '',
            span_en: ''

        };

        return {
            modules: [Pagination, Autoplay],
            blogItems,
            blogData,
            pageDataHeading,
        }
    }

}
</script>


<style scoped lang="scss">
.top-section-title {
    .title {
        font-size: 22px;

        @media (max-width: 991px) {
            font-size: 20px;
        }

        @media (max-width: 575px) {
            font-size: 18px;
        }
    }
}

.related-section-title {
    h5 {
        .title {
            font-size: 30px;

            @media (max-width: 991px) {
                font-size: 20px;
            }
        }
    }
}

#blog_details_content * {
    font-family: 'Cairo', sans-serif !important;
    line-height: 2 !important;
    color: #343434 !important;
}
</style>