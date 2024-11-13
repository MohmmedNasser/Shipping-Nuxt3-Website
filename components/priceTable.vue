<template>
    <section class="my-[30px] lg:mt-[50px] lg:mb-[75px] relative">
        <div class="container">
            <div class="rounded-[23px] bg-white border border-solid border-[#E6E6E6]">
                <div class="table-responsive">
                    <table class="table w-full align-top">
                        <thead>
                            <tr>
                                <th v-for="title in columns" :key="title.key"
                                    class="bg-[#48A6A4] text-white w-[20%] p-[10px] lg:p-[12px] align-middle first:w-[55%] first:rounded-ss-[23px] first:ps-[15px] lg:first:ps-[70px] last:rounded-se-[23px] last:pe-[15px] lg:last:pe-[43px] text-center first:text-start">
                                    {{ locale == 'ar' ? title.label_ar : title.label_en }}
                                </th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr>
                                <td>
                                    {{ $t('price_including_vat') }}
                                </td>
                                <td>
                                    <span class="label-primary">
                                        {{ $t('free') }}
                                    </span>
                                </td>
                                <td>
                                    <span class="label-primary">
                                        199
                                        <span class="ps-1">{{ $t('currancy') }}</span>
                                    </span>
                                </td>
                            </tr>


                            <template v-for="(section, sectionIndex) in tableData" :key="sectionIndex">
                                <tr class="pricing-sub-head" v-if="section.subhead_ar">
                                    <td colspan="3" class="py-0 px-[23px] lg:px-[15px] !border-none">
                                        <h6
                                            class="text-[14px] lg:text-base px-[10px] py-[15px] lg:p-[13px] bg-[#F7F7F7] rounded-full flex items-center justify-center mb-0 text-[#3D8D89] font-bold">
                                            <!-- {{ section.subhead }} -->

                                            {{ locale == 'ar' ? section.subhead_ar : section.subhead_en }}
                                        </h6>
                                    </td>
                                </tr>

                                <tr v-for="(row, rowIndex) in section.rows" :key="rowIndex">
                                    <td>
                                        {{ locale == 'ar' ? row.service_ar : row.service_en }}
                                    </td>
                                    <td>

                                        {{ locale == 'ar' ? row.packageOne_ar : row.packageOne_en }}

                                    </td>
                                    <td>
                                        {{ locale == 'ar' ? row.packageTwo_ar : row.packageTwo_en }}

                                    </td>

                                </tr>

                            </template>


                        </tbody>
                    </table>
                </div>
            </div>
        </div>


        <div class="innerpage-pattern-one">
            <img src="/img/services-box.svg" :alt="$t('header.packages')" :title="$t('header.packages')"
                class="img-fluid" loading="lazy">
        </div>

        <div class="innerpage-pattern-two">
            <img src="/img/our-services-plane2.svg" :alt="$t('header.packages')" :title="$t('header.packages')"
                class="img-fluid" loading="lazy">
        </div>

        <div class="innerpage-pattern-three">
            <img src="/img/shipping-plane.svg" :alt="$t('header.packages')" :title="$t('header.packages')"
                class="img-fluid" loading="lazy">
        </div>

        <div class="innerpage-pattern-four">
            <img src="/img/services-truck.svg" :alt="$t('header.packages')" :title="$t('header.packages')"
                class="img-fluid" loading="lazy">
        </div>


    </section>
</template>

<script setup>
const { locale } = useI18n();

const prorps = defineProps({
    columns: Array,
    tableData: Array,
})

</script>

<style scoped lang="scss">
.label-primary {
    @apply bg-[#3D8D89] rounded-[16px] text-white inline-flex justify-center items-center py-[6px] px-[24px] text-[14px] font-semibold;
}

.label-danger {
    @apply bg-[#FFF5F5] rounded-[16px] text-[#FF8181] font-semibold text-[14px] inline-flex justify-center items-center py-[6px] px-[24px];
}

tbody {
    tr {
        td {
            @apply px-[10px] py-[15px] text-[13px] lg:p-3 lg:text-sm border-b border-solid border-[#7070701a] font-bold align-middle first:ps-[15px] lg:first:ps-[70px] first:text-[13px] lg:first:text-inherit last:pe-[15px] lg:last:pe-[43px] text-center first:text-start w-6/12 md:w-auto;

            span {
                @apply font-semibold
            }
        }

        &:has(+ .pricing-sub-head) td {
            border-bottom: none !important;
        }

        &:last-child {
            td {
                border-bottom: none !important;
            }
        }
    }
}
</style>