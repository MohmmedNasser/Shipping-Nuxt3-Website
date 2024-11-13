<template>
    <section class="mt-[50px] lg:mt-[80px] lg:mb-[50px] lg:my-[122px] relative">
        <div class="container">

            <div class="flex flex-col lg:flex-row items-center justify-between">
                <div class="max-w-full lg:max-w-[441px]">
                    <div class="section-title">
                        <h5>
                            <span class="title">{{ $t('about_us') }}</span>
                            <span class="text-pattern">{{ $t('about_us') }}</span>
                        </h5>
                    </div>
                    <p class="par-circle leading-[25px] mb-[18px]">
                        <span class="font-bold">{{ $t('saudi_company') }}</span>
                        {{ $t('about_us_desc') }}
                    </p>
                    <a href="" class="main-btn gap-[8.4px] font-bold text-[14px] py-[7px] px-[14px] ms-[22px]">
                        <span>{{ $t('find_out_more') }}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24.253" height="24.253"
                            viewBox="0 0 24.253 24.253">
                            <g id="arrow-circle-down" transform="translate(23.753 0.5) rotate(90)">
                                <g id="vuesax_broken_arrow-circle-down" data-name="vuesax/broken/arrow-circle-down">
                                    <g id="arrow-circle-down-2" data-name="arrow-circle-down">
                                        <path id="Vector"
                                            d="M2.781,2.9A9.688,9.688,0,1,0,9.689,0,10.08,10.08,0,0,0,7.732.194"
                                            transform="translate(1.938 1.938)" fill="none" stroke="#fff"
                                            stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"
                                            stroke-width="1" stroke-dasharray="0 0" />
                                        <path id="Vector-2" data-name="Vector" d="M0,0,3.42,3.41,6.84,0"
                                            transform="translate(8.207 10.406)" fill="none" stroke="#fff"
                                            stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                                            stroke-dasharray="0 0" />
                                        <path id="Vector-3" data-name="Vector" d="M23.253,0V23.253H0V0Z" fill="none"
                                            stroke="#fff" stroke-width="1" opacity="0" />
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </a>
                </div>
                <div class="relative mt-[20px] lg:mt-[0px]">
                    <NuxtImg class="img-fluid select-none pointer-events-none" src="/img/who-we-section-img.png"
                        :alt="$t('about_us')" :title="$t('about_us')" loading="lazy" placeholder format="webp"
                        sizes="406px md:524px">
                    </NuxtImg>

                    <div class="hidden lg:block absolute -start-[-13px] top-[10px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27">
                            <g id="box" transform="translate(0.5 0.5)">
                                <g id="vuesax_twotone_box" data-name="vuesax/twotone/box">
                                    <g id="box-2" data-name="box">
                                        <g id="Group_642" data-name="Group 642" transform="translate(3.434 8.06)"
                                            opacity="0.4">
                                            <path id="Vector" d="M0,0,9.566,5.536l9.5-5.5" fill="none" stroke="#245955"
                                                stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                                stroke-dasharray="0 0" />
                                            <path id="Vector-2" data-name="Vector" d="M0,9.826V0"
                                                transform="translate(9.566 5.525)" fill="none" stroke="#245955"
                                                stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                                stroke-dasharray="0 0" />
                                        </g>
                                        <path id="Vector-3" data-name="Vector"
                                            d="M2.383,3.728A5.112,5.112,0,0,0,0,7.769V13.89a5.112,5.112,0,0,0,2.383,4.041l5.785,3.218a5.192,5.192,0,0,0,4.5,0l5.785-3.218a5.112,5.112,0,0,0,2.383-4.041V7.769a5.112,5.112,0,0,0-2.383-4.041L12.664.511a5.155,5.155,0,0,0-4.5.011Z"
                                            transform="translate(2.59 2.165)" fill="none" stroke="#245955"
                                            stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                            stroke-dasharray="0 0" />
                                        <path id="Vector-4" data-name="Vector" d="M26,0V26H0V0Z"
                                            transform="translate(26 26) rotate(180)" fill="none" stroke="#245955"
                                            stroke-width="1" opacity="0" />
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </div>

                </div>
            </div>

        </div>
        <div
            class="hidden lg:block absolute -bottom-4 start-[39%] select-none pointer-events-none ltr:[transform:rotateY(-180deg)]">
            <img src="/img/who-we-pattern1.svg" :alt="$t('about_us')" :title="$t('about_us')" class="img-fluid"
                loading="lazy">
        </div>
    </section>
</template>

<script setup lang="ts">

</script>

<style scoped></style>