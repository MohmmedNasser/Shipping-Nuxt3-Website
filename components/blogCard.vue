<template>
    <NuxtLink :to="'/blogs/details/' + blogList.id" class="group rounded-[10px] md:rounded-[20px] overflow-hidden bg-white inline-block border border-solid
        border-[#E6E6E6] cursor-pointer">
        <div class="h-[150px] md:h-[207.44px] overflow-hidden relative">
            <div class="w-full h-full transition duration-300 group-hover:scale-110">
                <NuxtImg :src="/img/ + `${blogList.img}`" alt="المدونة" title="المدونة"
                    class="w-full h-full object-cover" loading="lazy" format="webp" placeholder densities="x1" />
            </div>
        </div>
        <div class="p-[10px] md:pt-[9.5px] md:ps-[13px] md:pb-[13px] md:pe-[14px]">
            <h5 class="text-[13px] md:text-sm mb-[12.4px] font-bold leading-[21px] line-clamp-2 min-h-[40px]"
                v-if="blogList.title_ar || blogList.title_en">
                {{ locale == 'ar' ? blogList.title_ar : blogList.title_en }}
            </h5>

            <h5 class="text-[13px] md:text-sm mb-[12.4px] font-bold leading-[21px] line-clamp-2 min-h-[40px]" v-else>
                {{ blogList.title }}
            </h5>
            <div class="flex items-center justify-center gap-[10px] md:gap-[20px]">
                <div class="flex items-center gap-[7px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="19.284" height="11.867" viewBox="0 0 19.284 11.867">
                        <path id="eye-svgrepo-com"
                            d="M26.642,28.785a2.225,2.225,0,1,1-2.225,2.225A2.225,2.225,0,0,1,26.642,28.785Zm0-3.708c5.192,0,9.642,3.708,9.642,5.934s-4.45,5.934-9.642,5.934S17,33.236,17,31.01,21.45,25.077,26.642,25.077Zm0,1.854a4.079,4.079,0,1,0,4.079,4.079A4.079,4.079,0,0,0,26.642,26.931Z"
                            transform="translate(-17 -25.077)" fill="#ebbb38" />
                    </svg>
                    <span class="text-xs font-medium text-[#444444]"> {{ blogList.show }}</span>
                </div>
                <div class="flex items-center gap-[7px]">
                    <svg id="Group_142111" data-name="Group 142111" xmlns="http://www.w3.org/2000/svg" width="13.167"
                        height="12.804" viewBox="0 0 13.167 12.804">
                        <path id="Vector"
                            d="M8.323,4.534h-2.7a.59.59,0,0,1-.454-.2.621.621,0,0,1-.138-.507l.336-2.16A1.4,1.4,0,0,0,2.851.583L.079,4.711,0,4.843v5.821l.1.1,2.087,1.613a2.169,2.169,0,0,0,1.343.428H6.1a2.1,2.1,0,0,0,1.969-1.475L9.686,6.4a1.387,1.387,0,0,0-.132-1.284A1.466,1.466,0,0,0,8.323,4.534Z"
                            transform="translate(3.385 0)" fill="#ebbb38" opacity="0.8" />
                        <path id="Vector-2" data-name="Vector"
                            d="M1.435,0C.415,0,0,.4,0,1.37V7.987c0,.975.415,1.37,1.435,1.37h.678c1.021,0,1.435-.4,1.435-1.37V1.363C3.549.4,3.134,0,2.114,0Z"
                            transform="translate(0 2.71)" fill="#ebbb38" />
                    </svg>
                    <span class="text-xs font-medium">{{ blogList.like }}</span>
                </div>

                <div class="flex items-center gap-[7px]">
                    <svg id="Group_142111" data-name="Group 142111" xmlns="http://www.w3.org/2000/svg" width="13.167"
                        height="12.804" viewBox="0 0 13.167 12.804">
                        <path id="Vector"
                            d="M1.46,8.27h2.7a.59.59,0,0,1,.454.2.621.621,0,0,1,.138.507l-.336,2.16a1.4,1.4,0,0,0,2.515,1.08L9.7,8.093l.079-.132V2.14l-.1-.1L7.6.428A2.169,2.169,0,0,0,6.253,0H3.685A2.1,2.1,0,0,0,1.717,1.475L.1,6.407A1.387,1.387,0,0,0,.229,7.691,1.466,1.466,0,0,0,1.46,8.27Z"
                            transform="translate(0 0)" fill="#ebbb38" opacity="0.8" />
                        <path id="Vector-2" data-name="Vector"
                            d="M2.114,9.357c1.021,0,1.435-.4,1.435-1.37V1.37C3.549.4,3.134,0,2.114,0H1.435C.415,0,0,.4,0,1.37V7.994c0,.968.415,1.363,1.435,1.363Z"
                            transform="translate(9.618 0.737)" fill="#ebbb38" />
                    </svg>
                    <span class="text-xs font-medium">
                        {{ blogList.dislike }}
                    </span>
                </div>
            </div>
        </div>

    </NuxtLink>


</template>

<script setup lang="ts">

const props = defineProps(['blogList'])
const { locale } = useI18n();

// const props = defineProps({
//     blogItems: {
//         blogItems: Object as PropType<blog>,
//     }
// })

</script>

<style scoped lang="scss"></style>