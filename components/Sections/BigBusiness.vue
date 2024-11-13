<template>
    <section
        class="sec-gradient bg-[url('/img/big-business-bg.jpg')] bg-no-repeat bg-cover min-h-[266px] flex items-center relative after:absolute after:top-0 after:left-0  after:w-full  after:h-full  after:opacity-[0.8]  after:z-[-1]">
        <div class="container">
            <div class="relative z-[2] flex flex-col items-center">
                <h6
                    class="text-[23px] md:text-[35px] lg:text-[44px] leading-[40px] md:leading-[66px] font-semibold text-white ">
                    {{ $t("enterprise_package") }}
                </h6>
                <p class="font-semibold mb-[22px] text-white max-w-full lg:max-w-[688px] text-center leading-[25px]">
                    {{ $t("enterprise_package_subhead") }}
                </p>
                <NuxtLink to=""
                    class="second-btn min-w-[313px] p-[9px] justify-center gap-[10px] font-bold text-[12px]">
                    <span> {{ $t("header.contact_us") }} </span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 28 28">
                        <g id="arrow-circle-down" transform="translate(27.5 0.5) rotate(90)">
                            <g id="vuesax_broken_arrow-circle-down" data-name="vuesax/broken/arrow-circle-down">
                                <g id="arrow-circle-down-2" data-name="arrow-circle-down">
                                    <path id="Vector"
                                        d="M3.229,3.364A11.249,11.249,0,1,0,11.25,0,11.7,11.7,0,0,0,8.977.225"
                                        transform="translate(2.25 2.25)" fill="none" stroke="#fff"
                                        stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"
                                        stroke-width="2" stroke-dasharray="0 0"></path>
                                    <path id="Vector-2" data-name="Vector" d="M0,0,3.971,3.96,7.942,0"
                                        transform="translate(9.53 12.082)" fill="none" stroke="#fff"
                                        stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        stroke-dasharray="0 0"></path>
                                    <path id="Vector-3" data-name="Vector" d="M27,0V27H0V0Z" fill="none" stroke="#fff"
                                        stroke-width="1" opacity="0"></path>
                                </g>
                            </g>
                        </g>
                    </svg>
                </NuxtLink>

                <div class="absolute -top-[-20px] end-0 select-none pointer-events-none">
                    <img src="/img/big-business-pattern.svg" :alt="$t('enterprise_package')"
                        :title="$t('enterprise_package')" loading="lazy" />
                </div>

            </div>
        </div>

        <div class="absolute top-0 end-0 select-none pointer-events-none ltr:[transform:rotateY(180deg)]">
            <img src="/img/big-business-circle.svg" :alt="$t('enterprise_package')" :title="$t('enterprise_package')"
                class="img-fluid" loading="lazy" />
        </div>
    </section>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.sec-gradient {
    &:after {
        background: transparent linear-gradient(71deg, #48A6A4 0%, #48A6A4 2%, #3D8D89 11%, #000000 100%) 0% 0% no-repeat padding-box;
    }
}
</style>