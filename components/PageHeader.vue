<template>
    <header class="h-[69px] flex items-center absolute top-0 left-0 w-full z-[5]" :class="[isSticky ? 'sticky' : '']">
        <div class="container mx-auto">
            <div class="flex justify-between items-center relative z-[2]">
                <div>
                    <nuxt-link to="/">
                        <span>
                            <NuxtImg src="/img/logo-white.svg" width="92" height="39" alt="MYCN" title="MYCN"
                                loading="lazy" densities="x1" />
                        </span>
                    </nuxt-link>
                </div>

                <div class="header-menu" :class="[menuOpen == true ? 'show' : '']">
                    <ul class="flex items-center gap-[12px]">

                        <!-- <li class="active" v-for="(list, i) in menuList" :key="i">
                            <nuxt-link :to="list.path" :class="{ active: isActive(list.path) }"
                                class="text-white text-[14px] font-[600] py-[4px] px-[14px] rounded-[16px] transition-colors duration-[300ms] hover:bg-white/[0.24]">
                                {{ list.title }}
                            </nuxt-link>
                        </li> -->

                        <li>
                            <nuxt-link :to="{ path: '/' }" :class="{ active: route.path === '/' }"
                                class="text-white text-[14px] font-[600] py-[4px] px-[14px] rounded-[16px] transition-colors duration-[300ms] hover:bg-white/[0.24]">
                                <!-- الرئيسية -->
                                {{ $t('header.home') }}
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link :to="{ path: '/services' }" :class="{ active: route.path === '/services' }"
                                class="text-white text-[14px] font-[600] py-[4px] px-[14px] rounded-[16px] transition-colors duration-[300ms] hover:bg-white/[0.24]">
                                {{ $t('header.service') }}
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link :to="{ path: '/shipping-rates' }"
                                :class="{ active: route.path === '/shipping-rates' }"
                                class="text-white text-[14px] font-[600] py-[4px] px-[14px] rounded-[16px] transition-colors duration-[300ms] hover:bg-white/[0.24]">
                                {{ $t('header.shipping_fees') }}
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link :to="{ path: '/pricing' }" :class="{ active: route.path === '/pricing' }"
                                class="text-white text-[14px] font-[600] py-[4px] px-[14px] rounded-[16px] transition-colors duration-[300ms] hover:bg-white/[0.24]">
                                {{ $t('header.packages') }}
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link :to="{ path: '/blogs' }"
                                :class="{ active: route.path === '/blogs' || route.path.startsWith('/blogs/details') }"
                                class="text-white text-[14px] font-[600] py-[4px] px-[14px] rounded-[16px] transition-colors duration-[300ms] hover:bg-white/[0.24]">
                                {{ $t('header.blogs') }}
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link :to="{ path: '/contacts' }" :class="{ active: route.path === '/contacts' }"
                                class="text-white text-[14px] font-[600] py-[4px] px-[14px] rounded-[16px] transition-colors duration-[300ms] hover:bg-white/[0.24]">
                                {{ $t('header.contact_us') }}
                            </nuxt-link>
                        </li>

                    </ul>

                    <button class="rest-btn flex absolute top-[25px] start-[25px] md:hidden" @click="menuOpen = false">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16.121" height="16.121"
                            viewBox="0 0 16.121 16.121">
                            <g id="Group_38839" data-name="Group 38839" transform="translate(-1252.439 -104.439)">
                                <line id="Line_7315" data-name="Line 7315" x2="14" y2="14"
                                    transform="translate(1253.5 105.5)" fill="none" stroke="#fff" stroke-linecap="round"
                                    stroke-width="1.5"></line>
                                <line id="Line_7316" data-name="Line 7316" x1="14" y2="14"
                                    transform="translate(1253.5 105.5)" fill="none" stroke="#fff" stroke-linecap="round"
                                    stroke-width="1.5"></line>
                            </g>
                        </svg>
                    </button>
                </div>

                <div class="flex items-center gap-[10px]">
                    <div class="flex items-center gap-[10px]">
                        <!-- <nuxt-link to=""
                            class="second-btn text-[12px] font-bold px-[17px] py-[6px] h-[30px] cursor-pointer">
                            {{ $t('start_your_trial_for_free') }}
                        </nuxt-link>
                        <nuxt-link to="" class="btn-outline-gray gap-[4.3px] px-[12px] lg:px-[17px] py-[6px]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12.155" height="12.155"
                                viewBox="0 0 12.155 12.155">
                                <g id="Group_124743" data-name="Group 124743" transform="translate(-2258.956 45.784)">
                                    <path id="Vector" d="M1.785,3.57,0,1.785,1.785,0"
                                        transform="translate(2259.456 -41.492)" fill="none" stroke="#fff"
                                        stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"
                                        stroke-width="1" stroke-dasharray="0 0" />
                                    <path id="Vector-2" data-name="Vector" d="M3.6,0H0"
                                        transform="translate(2259.505 -39.707)" fill="none" stroke="#fff"
                                        stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"
                                        stroke-width="1" stroke-dasharray="0 0" />
                                    <path id="Vector-3" data-name="Vector" d="M1.367,0H0"
                                        transform="translate(2265.229 -39.707)" fill="none" stroke="#fff"
                                        stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"
                                        stroke-width="1" stroke-dasharray="0 0" />
                                    <path id="Vector-4" data-name="Vector"
                                        d="M4.19,0A5.576,5.576,0,0,1,5.578,3.849,5.334,5.334,0,0,1,0,9.426"
                                        transform="translate(2265.034 -43.555)" fill="none" stroke="#fff"
                                        stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"
                                        stroke-width="1" stroke-dasharray="0 0" />
                                    <path id="Vector-5" data-name="Vector" d="M0,0A6.292,6.292,0,0,1,2.071.342"
                                        transform="translate(2265.034 -45.284)" fill="none" stroke="#fff"
                                        stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"
                                        stroke-width="1" stroke-dasharray="0 0" />
                                </g>
                            </svg>
                            <span class="hidden md:flex">{{ $t('sign_in') }}</span>
                        </nuxt-link> -->
                    </div>
                    <div class="header-lang">
                        <Dropdown />
                    </div>

                    <button class="rest-btn flex md:hidden" @click="menuOpen = true">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                            <path fill="none" stroke="#FFFFFF" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="1.5" d="M3 5h8m-8 7h13M3 19h18"></path>
                        </svg>
                    </button>
                </div>

            </div>
        </div>
    </header>
</template>

<script setup lang="ts">


// const menuList = ref([
//     {
//         title: 'الرئيسية',
//         name: 'home',
//         path: '/'
//     },
//     {
//         title: 'خدماتنا',
//         name: 'services',
//         path: '/services',
//     },
//     {
//         title: 'رسوم الشحن',
//         name: 'shipping-rates',
//         path: '/shipping-rates',
//     },
//     {
//         title: 'الباقات',
//         name: 'pricing',
//         path: '/pricing',
//     },
//     {
//         title: 'المدونة',
//         name: 'blogs',
//         path: '/blogs',
//     },
//     {
//         title: 'تواصل معنا',
//         name: 'contacts',
//         path: '/contacts',
//     }
// ]);
const isSticky = ref(false);
const menuOpen = ref(false);
const route = useRoute()

// const isActive = (path: string) => route.path === path;

const handleScroll = () => {
    isSticky.value = window.scrollY > 200;
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})


</script>

<style scoped lang="scss">
header {
    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(24px) brightness(1) opacity(0.9);
        z-index: 1;
    }

    .active {
        @apply bg-white/[0.24];
    }

    .header-menu {
        @media (max-width: 991px) {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            background: transparent linear-gradient(to bottom, #245955 20%, #275D59 24%, #35746E 45%, #3E827B 66%, #41877F 83%) 0% 0% no-repeat padding-box;
            transform: translateY(-120%);
            transition: 0.8s;
            border-radius: 0 0 100vw 100vw;
            opacity: 0;

            z-index: 999;
            padding: 20px;
            overflow-y: scroll;

            ul {
                flex-direction: column;
                align-items: center;
                gap: 25px;
                padding-top: 50px;
            }

            &.show {
                opacity: 1;
                transform: translateY(0);
                border-radius: 0;
            }

        }
    }

    &.sticky {
        position: fixed;
        animation: menu_sticky 0.7s ease-in-out;
        background: transparent linear-gradient(90deg, #245955 20%, #275D59 24%, #35746E 45%, #3E827B 66%, #41877F 83%) 0% 0% no-repeat padding-box;
    }

    @-webkit-keyframes menu_sticky {
        0% {
            margin-top: -120px;
            opacity: 0;
        }

        50% {
            margin-top: -64px;
            opacity: 0;
        }

        100% {
            margin-top: 0;
            opacity: 1;
        }
    }

    @keyframes menu_sticky {
        0% {
            margin-top: -120px;
            opacity: 0;
        }

        50% {
            margin-top: -64px;
            opacity: 0;
        }

        100% {
            margin-top: 0;
            opacity: 1;
        }
    }

}
</style>