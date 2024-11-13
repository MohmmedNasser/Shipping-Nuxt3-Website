<template>
    <section class="lg:translate-y-[100px] py-[50px] lg:py-0">
        <div class="container">
            <div class="grid lg:grid-cols-2 gap-[15px] lg:gap-[18px]">
                <div
                    class="contact-box p-[20px] md:py-[25px] md:px-[32px] rounded-[28px] flex-grow flex-shrink-0 basis-[50%] relative">
                    <div class="flex items-center gap-[13px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="41.359" height="41.359"
                            viewBox="0 0 41.359 41.359">
                            <g id="message-notif" transform="translate(1 1)">
                                <g id="vuesax_twotone_message-notif" data-name="vuesax/twotone/message-notif">
                                    <g id="message-notif-2" data-name="message-notif">
                                        <path id="Vector"
                                            d="M32.8,13.12v4.92q0,9.84-9.84,9.84h-.82a1.662,1.662,0,0,0-1.312.656l-2.46,3.28a2.33,2.33,0,0,1-3.936,0l-2.46-3.28a1.854,1.854,0,0,0-1.312-.656H9.84C3.28,27.88,0,26.24,0,18.04V9.84Q0,0,9.84,0h9.84"
                                            transform="translate(3.28 3.28)" fill="none" stroke="#fff"
                                            stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"
                                            stroke-width="2" stroke-dasharray="0 0" />
                                        <path id="Vector-2" data-name="Vector"
                                            d="M4.1,8.2A4.1,4.1,0,1,1,8.2,4.1,4.1,4.1,0,0,1,4.1,8.2Z"
                                            transform="translate(27.88 3.28)" fill="none" stroke="#fff"
                                            stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            stroke-dasharray="0 0" />
                                        <path id="Vector-3" data-name="Vector" d="M.495.5H.509"
                                            transform="translate(25.739 17.54)" fill="none" stroke="#fff"
                                            stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            stroke-dasharray="0 0" />
                                        <path id="Vector-4" data-name="Vector" d="M.495.5H.509"
                                            transform="translate(19.176 17.54)" fill="none" stroke="#fff"
                                            stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            stroke-dasharray="0 0" />
                                        <path id="Vector-5" data-name="Vector" d="M.495.5H.509"
                                            transform="translate(12.616 17.54)" fill="none" stroke="#fff"
                                            stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            stroke-dasharray="0 0" />
                                        <path id="Vector-6" data-name="Vector" d="M39.359,0V39.359H0V0Z" fill="none"
                                            stroke="#fff" stroke-width="2" opacity="0" />
                                    </g>
                                </g>
                            </g>
                        </svg>
                        <h6 class="text-[20px] md:text-[26px] font-bold text-white">{{ $t("header.contact_us") }}</h6>
                    </div>
                    <p class="mb-15px md:mb-[20px] font-semibold text-white  max-w-[406px] leading-[27px] ps-[52px]">
                        {{ $t('send_your_inquiry_we_will_respond') }}
                    </p>
                    <div class="flex justify-end">
                        <NuxtLink to="/contacts"
                            class="btn btn-white min-w-[241.72px] gap-[8.2px] px-[63px] py-[11px] font-bold text-sm md:text-base">
                            <span>
                                {{ $t("header.contact_us") }}
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25.5" height="25.5" viewBox="0 0 25.5 25.5">
                                <g id="arrow-circle-down" transform="translate(24.75 0.75) rotate(90)">
                                    <g id="vuesax_broken_arrow-circle-down" data-name="vuesax/broken/arrow-circle-down">
                                        <g id="arrow-circle-down-2" data-name="arrow-circle-down">
                                            <path id="Vector" d="M2.87,2.99A10,10,0,1,0,10,0,10.4,10.4,0,0,0,7.98.2"
                                                transform="translate(2 2)" fill="none" stroke="#242424"
                                                stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"
                                                stroke-width="1.5" stroke-dasharray="0 0" />
                                            <path id="Vector-2" data-name="Vector" d="M0,0,3.53,3.52,7.06,0"
                                                transform="translate(8.471 10.74)" fill="none" stroke="#242424"
                                                stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                                stroke-dasharray="0 0" />
                                            <path id="Vector-3" data-name="Vector" d="M24,0V24H0V0Z" fill="none"
                                                stroke="#242424" stroke-width="1.5" opacity="0" />
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </NuxtLink>
                    </div>

                    <div
                        class="absolute top-0 start-0 select-none pointer-events-none ltr:[transform:rotateY(-180deg)]">

                        <NuxtImg src="/img/contact-circle.svg" alt="" format="webp" loading="lazy">

                        </NuxtImg>
                    </div>

                </div>
                <div
                    class="mailing-box p-[20px] md:py-[25px] md:px-[32px] rounded-[28px] flex-grow flex-shrink-0 basis-[50%] relative">
                    <div class="flex items-center gap-[13px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="44.359" height="44.359"
                            viewBox="0 0 44.359 44.359">
                            <g id="vuesax_twotone_sms-tracking" data-name="vuesax/twotone/sms-tracking"
                                transform="translate(1 1)">
                                <g id="sms-tracking">
                                    <path id="Vector"
                                        d="M35.3,8.825C35.3,2.647,31.77,0,26.475,0H8.825C3.53,0,0,2.647,0,8.825V21.18C0,27.357,3.53,30,8.825,30h17.65"
                                        transform="translate(3.53 6.177)" fill="none" stroke="#fff"
                                        stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"
                                        stroke-width="2" stroke-dasharray="0 0" />
                                    <path id="Vector-2" data-name="Vector"
                                        d="M0,0,5.524,4.412a5.587,5.587,0,0,0,6.619,0L17.65,0"
                                        transform="translate(12.355 15.885)" fill="none" stroke="#fff"
                                        stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"
                                        stroke-width="2" stroke-dasharray="0 0" />
                                    <path id="Vector-3" data-name="Vector" d="M10.59,0H0"
                                        transform="translate(28.24 29.122)" fill="none" stroke="#fff"
                                        stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"
                                        stroke-width="2" stroke-dasharray="0 0" opacity="0.4" />
                                    <path id="Vector-4" data-name="Vector" d="M5.295,0H0"
                                        transform="translate(33.535 22.062)" fill="none" stroke="#fff"
                                        stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"
                                        stroke-width="2" stroke-dasharray="0 0" opacity="0.5" />
                                    <path id="Vector-5" data-name="Vector" d="M0,0V42.359H42.359V0Z" fill="none"
                                        stroke="#fff" stroke-width="2" opacity="0" />
                                </g>
                            </g>
                        </svg>
                        <h6 class="text-[20px] md:text-[26px] font-bold text-white">{{ $t('subscribe_to_newsletters') }}
                        </h6>
                    </div>
                    <p class="mb-15px md:mb-[20px] font-semibold text-white max-w-[406px] leading-[27px] ps-[52px]">
                        {{ $t('everything_new_sent_you_email') }}
                    </p>
                    <form>
                        <div class="flex items-center gap-[11px] md:ps-[calc(79px_-_32px)]">
                            <input type="text"
                                class="block w-full rounded-[23px] bg-white border border-sold border-[#E6E6E6] h-[48px] px-[12px] py-[6px] outline-none shadow-none placeholder:text-[#444444] placeholder:opacity-[0.20]"
                                :placeholder="$t('email')">
                            <button
                                class="btn second-btn w-[127.33px] gap-[5.2px] px-[29px] py-[11px] font-bold text-sm md:text-base">
                                <span>{{ $t('subscribe') }}</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25.5" height="25.5"
                                    viewBox="0 0 25.5 25.5">
                                    <g id="arrow-circle-down" transform="translate(24.75 0.75) rotate(90)">
                                        <g id="vuesax_broken_arrow-circle-down"
                                            data-name="vuesax/broken/arrow-circle-down">
                                            <g id="arrow-circle-down-2" data-name="arrow-circle-down">
                                                <path id="Vector" d="M2.87,2.99A10,10,0,1,0,10,0,10.4,10.4,0,0,0,7.98.2"
                                                    transform="translate(2 2)" fill="none" stroke="#fff"
                                                    stroke-linecap="round" stroke-linejoin="round"
                                                    stroke-miterlimit="10" stroke-width="1.5" stroke-dasharray="0 0" />
                                                <path id="Vector-2" data-name="Vector" d="M0,0,3.53,3.52,7.06,0"
                                                    transform="translate(8.471 10.74)" fill="none" stroke="#fff"
                                                    stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                                    stroke-dasharray="0 0" />
                                                <path id="Vector-3" data-name="Vector" d="M24,0V24H0V0Z" fill="none"
                                                    stroke="#fff" stroke-width="1.5" opacity="0" />
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </button>
                        </div>
                    </form>


                    <div
                        class="absolute top-0 start-0 select-none pointer-events-none ltr:[transform:rotateY(-180deg)]">
                        <NuxtImg src="/img/mailing-circle.svg" alt="" format="webp" loading="lazy">
                        </NuxtImg>
                    </div>

                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.contact-box {
    background: transparent linear-gradient(250deg, #E0980D 0%, #F2C030 100%) 0% 0% no-repeat padding-box;
}

.mailing-box {
    background: transparent linear-gradient(90deg, #245955 20%, #275D59 24%, #35746E 45%, #3E827B 66%, #41877F 83%) 0% 0% no-repeat padding-box;
}
</style>