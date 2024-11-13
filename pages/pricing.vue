<template>
    <div>
        <PageHeading :pageDataHeading="pageDataHeading" />

        <PriceTable :columns="columns" :tableData="tableData" />
    </div>
</template>

<script setup lang="ts">

const { t } = useI18n();

useSeoMeta({
    title: `${t('header.packages')}`,
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
    title_ar: 'الباقات',
    title_en: 'packages',
    subTitle_ar: 'تعرف على أسعار الباقات المتوفرة لدينا',
    subTitle_en: 'Find Out Our Package Prices',
    bg: 'pricing-heading.jpg',
    span_ar: '',
    span_en: ''

};

const columns = [
    { key: "service", label_ar: "الخدمة", label_en: "Service" },
    { key: "packageOne", label_ar: "الباقة المجانية", label_en: "Individuals package" },
    { key: "packageTwo", label_ar: "الباقة الأوفر", label_en: "Merchant Package" },
];

const tableData = [


    {
        subhead_ar: 'خدمة الشراء من الصين',
        subhead_en: 'Buy from China Service',
        rows: [
            {
                service_ar: "خدمة الشراء من الصين",
                service_en: "Buy from China Service",
                packageOne_ar: "متاح",
                packageOne_en: "available",
                packageTwo_ar: "متاح",
                packageTwo_en: "available",
            },
            {
                service_ar: "خدمة الارجاع",
                service_en: "Return service",
                packageOne_ar: "غير متاح",
                packageOne_en: "Not available",
                packageTwo_ar: "متاح",
                packageTwo_en: "available",
            },
            {
                service_ar: "رسوم خدمة الشراء من الصين",
                service_en: "China Purchase Service Fee",
                packageOne_ar: "20%",
                packageOne_en: "20%",
                packageTwo_ar: "5%",
                packageTwo_en: "5%",
            }
        ]
    },

    {
        subhead_ar: 'خدمة الشحن',
        subhead_en: 'Shipping Service',

        rows: [
            {
                service_ar: "نوع الشحن",
                service_en: "Shipping Type",
                packageOne_ar: "شحن جوي",
                packageOne_en: "Aerial",
                packageTwo_ar: "شحن جوي، شحن بحري",
                packageTwo_en: "All companies",
            },

            {
                service_ar: "الدول المدعومة",
                service_en: "Supported Countries",
                packageOne_ar: "المملكة العربية السعودية",
                packageOne_en: "Kingdom of Saudi Arabia",
                packageTwo_ar: "المملكة العربية السعودية",
                packageTwo_en: "Kingdom of Saudi Arabia",
            },

            {
                service_ar: "عدد عناوين الشحن",
                service_en: "Shipping Address Count",
                packageOne_ar: "عنوان افتراضي واحد",
                packageOne_en: "One Default Address",
                packageTwo_ar: "غير محدود",
                packageTwo_en: "Unlimited",
            },

            {
                service_ar: "التخليص الجمركي",
                service_en: "Customs Clearance",
                packageOne_ar: "غير متاح",
                packageOne_en: "Not Available",
                packageTwo_ar: "غير محدود",
                packageTwo_en: "Available",
            },
        ]
    },

    {
        subhead_ar: 'الخدمات اللوجستية',
        subhead_en: 'Logistics Services',

        rows: [
            {
                service_ar: "المستودعات المدعومة",
                service_en: "Warehouses",
                packageOne_ar: "مستودع الصين",
                packageOne_en: "China Warehouse",
                packageTwo_ar: "مستودع الصين",
                packageTwo_en: "China Warehouse",
            },

            {
                service_ar: "انواع التخزين",
                service_en: "Storage Types",
                packageOne_ar: "جاف",
                packageOne_en: "dry	",
                packageTwo_ar: "جاف",
                packageTwo_en: "dry	",
            },

            {
                service_ar: "تصوير المنتجات عند تسجيل الشحنة",
                service_en: "Photographing Products When Registering The Shipment",
                packageOne_ar: "متاحة",
                packageOne_en: "Available",
                packageTwo_ar: "متاحة",
                packageTwo_en: "Available",
            },

            {
                service_ar: "مدة التخزين المسموحة للشحنات",
                service_en: "The Permitted Storage Period For Shipments",
                packageOne_ar: "10 ايام",
                packageOne_en: "10 days",
                packageTwo_ar: "غير محدود",
                packageTwo_en: "Unlimited",
            },

            {
                service_ar: "رسوم تسجيل الشحنات",
                service_en: "Fees For Registering Shipments",
                packageOne_ar: "18.99 ر.س",
                packageOne_en: "18.99 SAR",
                packageTwo_ar: "3.99 ر.س",
                packageTwo_en: "3.99 SAR",
            },

            {
                service_ar: "رسوم الغاء الطرود (لكل صندوق)",
                service_en: "Fees For Registering Shipments",
                packageOne_ar: "18.99 ر.س",
                packageOne_en: "18.99 SAR",
                packageTwo_ar: "18.99 ر.س",
                packageTwo_en: "18.99 SAR",
            },

            {
                service_ar: "فحص مفصل (لكل منتج)",
                service_en: "Detailed Checking(Per Product)",
                packageOne_ar: "3.99 ر.س",
                packageOne_en: "3.99 SAR",
                packageTwo_ar: "1.99 ر.س",
                packageTwo_en: "1.99 SAR",
            },

            {
                service_ar: "تقسيم الشحنات",
                service_en: "Division Of Shipments",
                packageOne_ar: "11.99 ر.س",
                packageOne_en: "11.99 SAR",
                packageTwo_ar: "3.99 ر.س",
                packageTwo_en: "3.99 SAR",
            },

            {
                service_ar: "فحص دقيق/فيديو (لكل شحنة)",
                service_en: "Video Shooting Checking (Per Shipment)",
                packageOne_ar: "18.99 ر.س",
                packageOne_en: "18.99 SAR",
                packageTwo_ar: "11.99 ر.س",
                packageTwo_en: "11.99 SAR",
            },

            {
                service_ar: "فحص الشحنات",
                service_en: "Video Shooting Checking (Per Shipment)",
                packageOne_ar: "11.99 ر.س",
                packageOne_en: "11.99 SAR",
                packageTwo_ar: "3.99 ر.س",
                packageTwo_en: "3.99 SAR",
            },

            {
                service_ar: "ارجاع الشحنات",
                service_en: "Return Shipment",
                packageOne_ar: "11.99 ر.س",
                packageOne_en: "11.99 SAR",
                packageTwo_ar: "3.99 ر.س",
                packageTwo_en: "3.99 SAR",
            },

            {
                service_ar: "فحص دقيق للشحنات/ فيديو ( حسب عدد المنتجات )",
                service_en: "Cargo Examination / Video (Depending On The Number Of Products)",
                packageOne_ar: "غير متاح",
                packageOne_en: "Not Available",
                packageTwo_ar: "0.03 ر.س",
                packageTwo_en: "0.03 SAR",
            },

        ]
    },

]

</script>