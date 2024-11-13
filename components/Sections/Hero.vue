<template>
    <section class="min-h-screen relative">
        <div class="container">
            <div
                class="flex flex-col items-center justify-center relative z-[4] min-h-screen text-center md:text-start">
                <h1
                    class="text-[28px] md:text-[32px] font-bold text-white leading-[40px] md:leading-[74px] mb-[15px] md:mb-0">
                    {{ $t('hero_h1') }}
                </h1>
                <h2 class="text-[22px] ltr:text-[20px] md:text-[26px] font-bold text-[#EEB72E] mb-[15px] md:mb-[30px]">
                    {{ $t('hero_h2') }}
                </h2>
                <nuxt-link to="/services" class="second-btn gap-[7.7px] h-[38.5px] px-[14px] py-[5px]">
                    <span>{{ $t('start_your_trial_for_free') }}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="27.095" height="27.095" viewBox="0 0 27.095 27.095">
                        <g id="arrow-circle-down" transform="translate(26.595 0.5) rotate(90)">
                            <g id="vuesax_broken_arrow-circle-down" data-name="vuesax/broken/arrow-circle-down">
                                <g id="arrow-circle-down-2" data-name="arrow-circle-down">
                                    <path id="Vector"
                                        d="M3.121,3.251A10.872,10.872,0,1,0,10.873,0a11.312,11.312,0,0,0-2.2.217"
                                        transform="translate(2.175 2.175)" fill="none" stroke="#fff"
                                        stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"
                                        stroke-width="2" stroke-dasharray="0 0" />
                                    <path id="Vector-2" data-name="Vector" d="M0,0,3.838,3.827,7.676,0"
                                        transform="translate(9.21 11.678)" fill="none" stroke="#fff"
                                        stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        stroke-dasharray="0 0" />
                                    <path id="Vector-3" data-name="Vector" d="M26.1,0V26.1H0V0Z" fill="none"
                                        stroke="#fff" stroke-width="1" opacity="0" />
                                </g>
                            </g>
                        </g>
                    </svg>
                </nuxt-link>

                <div
                    class="social-media-box absolute top-2/4 translate-y-[-50%] end-0 z-[4] border-[0.3px] border-solid border-white/[0.7] rounded-[26px] bg-black/[0.2] py-[20px] px-[11px] transition-all duration-[800ms] hover:border-[#E0980D] hover:bg-gradient-to-tr hover:from-[#E0980D] hover:to-[#E0980D]">
                    <ul class="flex flex-row md:flex-col items-start md:items-center gap-[20.8px]">
                        <li>
                            <a href="https://twitter.com/" target="_blank" title="twitter">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15.52" height="15.533"
                                    viewBox="0 0 15.52 15.533">
                                    <path id="X_logo_2023_original"
                                        d="M9.238,6.578,15.017,0H13.648L8.628,5.71,4.622,0H0L6.06,8.636,0,15.533H1.369L6.666,9.5,10.9,15.533H15.52M1.863,1.011h2.1l9.681,13.561h-2.1"
                                        fill="#fff" />
                                </svg>
                            </a>
                        </li>

                        <li>
                            <a href="http://instagram.com" target="_blank" title="instagram">
                                <svg id="Dribbble-Light-Preview" xmlns="http://www.w3.org/2000/svg" width="18.204"
                                    height="18.2" viewBox="0 0 18.204 18.2">
                                    <g id="icons">
                                        <path id="instagram-_167_" data-name="instagram-[#167]"
                                            d="M289.343,7279.11a5.022,5.022,0,0,0-5.268,5.26c-.042.911-.286,7.828.42,9.64a4.583,4.583,0,0,0,2.65,2.64,6.387,6.387,0,0,0,2.2.419c8.064.364,11.054.173,12.315-3.059a6.563,6.563,0,0,0,.421-2.193c.369-8.083-.06-9.84-1.465-11.241-1.115-1.11-2.427-1.866-11.27-1.465m.074,16.338a5.36,5.36,0,0,1-1.682-.31,2.989,2.989,0,0,1-1.718-1.721c-.538-1.375-.359-7.918-.311-8.975a3.882,3.882,0,0,1,.988-2.722c.906-.9,2.076-1.348,10.043-.982a3.885,3.885,0,0,1,2.723.982c.906.9,1.355,2.085.989,10.021a4.954,4.954,0,0,1-.311,1.675c-.82,2.1-2.706,2.395-10.721,2.03m7.408-12.179a1.087,1.087,0,1,0,1.087-1.083,1.083,1.083,0,0,0-1.087,1.083m-8.4,4.824a4.651,4.651,0,1,0,4.65-4.642,4.643,4.643,0,0,0-4.65,4.642m1.632,0a3.019,3.019,0,1,1,3.018,3.012,3.014,3.014,0,0,1-3.018-3.012"
                                            transform="translate(-284 -7279.001)" fill="#fff" fill-rule="evenodd" />
                                    </g>
                                </svg>
                            </a>
                        </li>

                        <li>
                            <a href="https://www.tiktok.com/en/" target="_blank" title="tiktok">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15.353" height="17.668"
                                    viewBox="0 0 15.353 17.668">
                                    <path id="tiktok-svgrepo-com"
                                        d="M11.034,1.019C12,1,12.956,1.012,13.913,1A4.574,4.574,0,0,0,15.2,4.076h0a5.168,5.168,0,0,0,3.106,1.317h.016V8.36a7.852,7.852,0,0,1-3.141-.735l.048.02a9.065,9.065,0,0,1-1.224-.7l.031.02c-.007,2.15.007,4.3-.015,6.442a5.6,5.6,0,0,1-1.006,2.919l.012-.018a5.488,5.488,0,0,1-4.343,2.363H8.678c-.072,0-.158.005-.244.005a5.345,5.345,0,0,1-2.784-.777l.024.014a5.565,5.565,0,0,1-2.686-4.18l0-.024c-.015-.368-.022-.737-.007-1.1A5.549,5.549,0,0,1,8.494,7.613a5.61,5.61,0,0,1,.945.08l-.033,0c.015,1.089-.029,2.179-.029,3.269a2.482,2.482,0,0,0-.837-.143A2.527,2.527,0,0,0,6.157,12.5l-.005.018a2.859,2.859,0,0,0-.124.84,3.019,3.019,0,0,0,.022.359V13.7a2.51,2.51,0,0,0,2.475,2.115l.107,0H8.625a2.473,2.473,0,0,0,2.033-1.175l.006-.011a1.684,1.684,0,0,0,.3-.772V13.85c.074-1.318.044-2.628.051-3.946.007-2.967-.007-5.927.015-8.887Z"
                                        transform="translate(-2.97 -1.004)" fill="#fff" />
                                </svg>
                            </a>
                        </li>

                        <li>
                            <a href="https://www.snapchat.com/" target="_blank" title="snapchat">
                                <svg xmlns="http://www.w3.org/2000/svg" width="19.392" height="19.168"
                                    viewBox="0 0 19.392 19.168">
                                    <g id="c" transform="translate(-4.749 -4.98)">
                                        <path id="d"
                                            d="M14.451,23.4c1.851,0,2.4-.777,3.62-1.317,1.088-.482,2.645.246,2.968-1.045h0c.042-.667,1.215-.56,1.873-1.015.6-.415.66-1.081.044-1.343a5.652,5.652,0,0,1-3.219-3.286c-.222-.869,2.552-1.137,1.975-2.776-.341-.967-1.566-.627-2.232-.41.444-3.437-1.229-6.476-5.033-6.476S8.968,8.768,9.412,12.206c-.666-.217-1.891-.557-2.232.41-.578,1.639,2.2,1.906,1.975,2.776a5.652,5.652,0,0,1-3.219,3.286c-.617.262-.557.928.044,1.343.658.455,1.832.348,1.873,1.015h0c.323,1.291,1.88.563,2.968,1.045,1.218.54,1.769,1.316,3.62,1.317h.011Z"
                                            transform="translate(0 0)" fill="none" stroke="#fff" stroke-linecap="round"
                                            stroke-linejoin="round" stroke-width="1.5" />
                                    </g>
                                </svg>
                            </a>
                        </li>

                    </ul>
                </div>
            </div>
        </div>

        <div class="main-sec-bg absolute top-0 start-0 w-full h-full">
            <video class="object-cover z-[-2] w-full h-full blur-[1px]" src="/img/main-video-bg.mp4" autoplay muted loop
                playsinline></video>
        </div>
    </section>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.social-media-box {
    backdrop-filter: opacity(1) brightness(1.1) blur(24px);

    @media (max-width: 767px) {
        position: unset;
        top: unset;
        margin-top: 50px;
        transform: none;
        inset-inline-end: unset;
        padding: 10px 20px;
        margin: 50px auto 0;
    }
}

.main-sec-bg {
    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.4);
        backdrop-filter: opacity(0.28) brightness(1.9) blur(24px);
        -webkit-backdrop-filter: opacity(0.28) brightness(1.9) blur(0);
        z-index: 2;
    }

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #3D8D89CC 0% 0% no-repeat padding-box;
        opacity: 0.8;
        mix-blend-mode: color;
        z-index: 3;
    }
}
</style>