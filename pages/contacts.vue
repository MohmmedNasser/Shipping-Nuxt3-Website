<template>
    <div>
        <PageHeading :pageDataHeading="pageDataHeading" />

        <section class="my-[30px] lg:mt-[50px] lg:mb-[150px] relative">
            <div class="container">

                <PageCard class="py-[25px] px-[20px] md:pt-[25px] md:mb-[41px] md:px-[39px]">
                    <div class="contacts-title section-title centered">
                        <h5>
                            <span class="title">{{ $t('stay_in_continuous_contact_with_us') }}</span>
                        </h5>
                        <p
                            class="flex items-center justify-center !font-bold text-sm md:text-base mt-[15px] !md:mt-[10px]">
                            <span class="px-1 inline-flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25">
                                    <g id="message-question" transform="translate(0.5 0.5)">
                                        <g id="vuesax_broken_message-question"
                                            data-name="vuesax/broken/message-question">
                                            <g id="message-question-2" data-name="message-question">
                                                <path id="Vector"
                                                    d="M0,9.13V11a4.724,4.724,0,0,0,5,5H9l4.45,2.96A1,1,0,0,0,15,18.13V16a4.724,4.724,0,0,0,5-5V5a4.724,4.724,0,0,0-5-5H5A4.724,4.724,0,0,0,0,5"
                                                    transform="translate(2 2.43)" fill="none" stroke="#f8a300"
                                                    stroke-linecap="round" stroke-linejoin="round"
                                                    stroke-miterlimit="10" stroke-width="1.5" stroke-dasharray="0 0" />
                                                <path id="Vector-2" data-name="Vector"
                                                    d="M1.66,4.5V4.29A1.567,1.567,0,0,1,2.5,2.96a1.533,1.533,0,0,0,.82-1.3A1.66,1.66,0,1,0,0,1.66"
                                                    transform="translate(10.34 6.86)" fill="none" stroke="#f8a300"
                                                    stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                                    stroke-dasharray="0 0" />
                                                <path id="Vector-3" data-name="Vector" d="M24,0V24H0V0Z" fill="none"
                                                    stroke="#f8a300" stroke-width="1" opacity="0" />
                                                <path id="Vector-4" data-name="Vector" d="M.5.5H.5"
                                                    transform="translate(11.5 13.25)" fill="none" stroke="#f8a300"
                                                    stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                                    stroke-dasharray="0 0" />
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </span>
                            {{ $t('have_a_question') }}
                        </p>
                    </div>

                    <form @submit="onSubmit">
                        <div class="contacts-form">

                            <div class="grid grid-cols-3 gap-4 mb-4">
                                <div class="input-box">
                                    <label class="form-label">{{ $t('full_name') }}</label>
                                    <input type="text" class="form-control" v-model="name"
                                        :placeholder="$t('full_name')">
                                    <!-- <div>{{ errors.userName }}</div> -->
                                    <div class="text-red-400 text-xs mt-1 font-semibold first-letter:capitalize"
                                        v-for="nameError in errorBag.name">{{
                                            nameError }}
                                    </div>
                                </div>

                                <div class="input-box">
                                    <label class="form-label">{{ $t('email') }}</label>
                                    <input type="email" class="form-control" v-model="email" :placeholder="$t('email')">
                                    <!-- <div>{{ errors.email }}</div> -->
                                    <div class="text-red-400 text-xs mt-1 font-semibold first-letter:capitalize"
                                        v-for="emailError in errorBag.email">{{ emailError }}</div>
                                </div>

                                <div class="input-box">
                                    <label class="form-label">{{ $t('phone') }}</label>
                                    <input type="text" class="form-control" v-model="phone" :placeholder="$t('phone')">
                                    <!-- <div>{{ errors.phone }}</div> -->
                                    <div class="text-red-400 text-xs mt-1 font-semibold first-letter:capitalize"
                                        v-for="phoneError in errorBag.phone">{{ phoneError }}</div>

                                </div>

                            </div>

                            <div class="">
                                <div class="input-box">
                                    <label class="form-label">{{ $t('message') }} </label>
                                    <textarea class="form-control !h-[140px]" v-model="subject"
                                        :placeholder="$t('write_here')"></textarea>
                                    <!-- <div>{{ errors.subject }}</div> -->
                                    <div class="text-red-400 text-xs mt-1 font-semibold first-letter:capitalize"
                                        v-for="subjectError in errorBag.subject">{{ subjectError }}</div>

                                </div>
                            </div>


                            <div class="mt-[37px] flex justify-center items-center">
                                <button type="submit" class="main-btn min-w-[296.27px] p-2 gap-[8.8px]">
                                    <span class="font-bold">{{ $t('send') }}</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28">
                                        <g id="arrow-circle-down" transform="translate(27.5 0.5) rotate(90)">
                                            <g id="vuesax_broken_arrow-circle-down"
                                                data-name="vuesax/broken/arrow-circle-down">
                                                <g id="arrow-circle-down-2" data-name="arrow-circle-down">
                                                    <path id="Vector"
                                                        d="M3.229,3.364A11.249,11.249,0,1,0,11.25,0,11.7,11.7,0,0,0,8.977.225"
                                                        transform="translate(2.25 2.25)" fill="none" stroke="#fff"
                                                        stroke-linecap="round" stroke-linejoin="round"
                                                        stroke-miterlimit="10" stroke-width="2"
                                                        stroke-dasharray="0 0" />
                                                    <path id="Vector-2" data-name="Vector" d="M0,0,3.971,3.96,7.942,0"
                                                        transform="translate(9.53 12.082)" fill="none" stroke="#fff"
                                                        stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                        stroke-dasharray="0 0" />
                                                    <path id="Vector-3" data-name="Vector" d="M27,0V27H0V0Z" fill="none"
                                                        stroke="#fff" stroke-width="1" opacity="0" />
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </button>
                            </div>

                        </div>
                    </form>

                </PageCard>

            </div>

            <div class="innerpage-pattern-one">
                <img src="/img/services-box.svg" :alt="$t('header.contact_us')" :title="$t('header.contact_us')"
                    class="img-fluid" loading="lazy">
            </div>

            <div class="innerpage-pattern-two">
                <img src="/img/our-services-plane2.svg" :alt="$t('header.contact_us')" :title="$t('header.contact_us')"
                    class="img-fluid" loading="lazy">
            </div>

            <div class="innerpage-pattern-three">
                <img src="/img/shipping-plane.svg" :alt="$t('header.contact_us')" :title="$t('header.contact_us')"
                    class="img-fluid" loading="lazy">
            </div>

            <div class="innerpage-pattern-four">
                <img src="/img/services-truck.svg" :alt="$t('header.contact_us')" :title="$t('header.contact_us')"
                    class="img-fluid" loading="lazy">
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">

import { useForm } from 'vee-validate';
import * as yup from 'yup';

import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css';

// import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n();

useSeoMeta({
    title: `${t('header.contact_us')}`,
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
    title_ar: 'إتصل بنا',
    title_en: 'Contact Us',
    subTitle_ar: 'هل لديك أي استفسار ؟ هل تواجهك مشكلة؟ أخبرنا كيف يمكننا مساعدتك..',
    subTitle_en: 'Do you have any questions ? Are you facing a problem? Tell us how we can help you.',
    bg: 'contacts-heading.jpg',
    span_ar: '',
    span_en: ''
};

// const { errorBag, handleSubmit, defineField } = useForm({
//     validationSchema: yup.object({
//         name: yup.string().required(t('name_field_required')),
//         email: yup.string().email(t('email_must_valid')).required(t('email_field_required')),
//         phone: yup.string().min(14, t('phone_number_must_be_14_digits')).required(t('phone_field_required')),
//         subject: yup.string().min(10, t('message_must_least_10_characters')).required(t('message_field_required'))
//     }),
// });

const generateSchema = () => yup.object({
    name: yup.string().required(t('name_field_required')),
    email: yup.string().email(t('email_must_valid')).required(t('email_field_required')),
    phone: yup.string().min(14, t('phone_number_must_be_14_digits')).required(t('phone_field_required')),
    subject: yup.string().min(10, t('message_must_least_10_characters')).required(t('message_field_required'))
});

const validationSchema = ref(generateSchema())

watch(locale, () => {
    validationSchema.value = generateSchema()
});

const { errorBag, handleSubmit, defineField } = useForm({
    validationSchema
})

const onSubmit = handleSubmit((values, { resetForm }) => {
    Swal.fire({
        title: `<p class='text-[17px] font-bold'>${t('your_request_has_been_successfully')}</p>`,
        text: `${t('we_will_contact_soon_possible')}`,
        html: `
            <p class="text-[15px] font-semibold">  ${t('we_will_contact_soon_possible')}  <span>❤</span></p>
        `,
        icon: "success",
        showConfirmButton: false,
        timer: 2000
    });

    resetForm();
});

const [name] = defineField('name');
const [email] = defineField('email');
const [phone] = defineField('phone');
const [subject] = defineField('subject');

</script>

<style scoped lang="scss">
.contacts-title {
    margin-bottom: 45px;

    @media (max-width: 767px) {
        margin-bottom: 35px;
    }

    .title {
        font-size: 22px;

        @media (max-width: 767px) {
            font-size: 20px;
        }
    }
}

.input-box {
    .form-label {
        @apply inline-block text-[14px] font-bold mb-[10px] ps-[10px] relative after:absolute after:top-[8px] after:start-0 after:w-[5px] after:h-[5px] after:bg-[#F8A300] after:rounded-full;
    }
}

.form-control,
.form-select {
    border-radius: 23px;
    border: 1px solid #E6E6E6;
    height: 45px;
    padding: 10px 16px;
    background: #F7F7F7;
    font-size: 14px;
    font-weight: 500;
    outline: none;
    display: block;
    width: 100%;
    appearance: none;
    -webkit-appearance: none;
    line-height: 1.5;

    &::placeholder {
        font-size: 14px;
        font-weight: 500;
        color: #B4B4B4;
    }

    &:disabled {
        user-select: none;
        pointer-events: none;
        color: #B4B4B4;
    }
}
</style>