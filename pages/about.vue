<template>
    <div>
        <headerVue />
        <div class="about h-[300px] md:h-[500px] flex items-center px-8 md:px-32">
            <p class="text-white text-2xl  md:text-5xl w-7/12">Who We Are
            </p>
        </div>
        <div class="px-8 md:px-32">
            <p class="pt-8 text-gray-700 ">
                Welcome to NovaGlover, your trusted partner in accounting and tax solutions. Based in the heart of
                Accra, Ghana, our firm is dedicated to delivering exceptional financial and tax advisory services
                tailored to meet the unique needs of businesses and individuals.
            </p>
            <p class="pt-4  text-gray-700">At NovaGlover, we pride ourselves on a team of experienced professionals,
                including
                partners with
                backgrounds in leading Big Four firms. This expertise allows us to bring global standards and insights
                to local challenges, ensuring that our clients receive cutting-edge solutions that drive growth and
                compliance.</p>
            <div class="mt-8 text-gray-700">
                <h3 class="text-4xl font-bold">
                    Expertise
                </h3>
                <p class="mt-2">
                    Unparalleled knowledge, professionalism, and continuous growth to stay ahead in dynamic regulatory
                    environments.
                </p>
            </div>
            <div class="mt-8 text-gray-700">
                <h3 class="text-4xl font-bold">
                    Reliability
                </h3>
                <p class="mt-2">
                    Personalized and discreet service designed to meet client needs with trust and responsiveness.
                </p>
            </div>
            <div class="mt-8 text-gray-700">
                <h3 class="text-4xl font-bold">
                    Adaptability
                </h3>
                <p class="mt-2">
                    Embracing change with creativity and flexibility to excel in dynamic and ever-evolving markets.
                </p>
            </div>
        </div>
        <div class="mt-10 bg-gray-900 h-20 px-32 flex items-center justify-between text-white"></div>
        <footerVue />
    </div>
</template>


<script setup>
import headerVue from '~/components/header.vue';
import footerVue from '~/components/footer.vue';
</script>