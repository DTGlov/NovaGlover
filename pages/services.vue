<template>
    <div>
        <headerVue />
        <div class="services flex items-center px-32">
            <p class="text-white text-5xl w-7/12">Services
            </p>
        </div>
        <div class="px-32">
            <p class="pt-8 text-gray-700">
                At NovaGlover, we provide a comprehensive range of services designed to meet the diverse needs of
                our clients. Whether you are an entrepreneur, a business, or an individual, our team of experts is
                committed to delivering exceptional solutions tailored to your goals. With a focus on
                professionalism, precision, and a client-centered approach, we ensure that our services exceed
                expectations in every aspect.
            </p>
        </div>
        <div class="mt-8 px-32">
            <h3 class="text-xl font-bold">
                &bull; Audit &
                Accounting
            </h3>
            <h3 class="text-xl mt-2 font-bold">
                &bull; Financial
                Advisory
            </h3>
            <h3 class="text-xl mt-2 font-bold">
                &bull; VAT &
                Customs
            </h3>
            <h3 class="text-xl mt-2 font-bold">
                &bull; Secretarial
                Services
            </h3>
            <h3 class="text-xl mt-2 font-bold">
                &bull; Tax
                litigation and dispute resolution
            </h3>
        </div>
        <div class="mt-10 bg-gray-900 h-20 px-32 flex items-center justify-between text-white"></div>
        <footerVue />
    </div>
</template>


<script setup>
import headerVue from '~/components/header.vue';
import footerVue from '~/components/footer.vue';
</script>