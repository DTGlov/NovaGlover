<template>
    <div>
        <headerVue />
        <bannerVue />
        <div class="my-10">
            <h1 class="text-center text-red-500 text-2xl font bold">About Nova Glover</h1>
            <div class="flex justify-center">
                <p class="text-center py-2 w-6/12">
                    Nova Glover is a corporate and commercial tax and law firm in Accra, Ghana. We are regulated and
                    authorized by the General Legal Council to provide legal services.</p>
            </div>
        </div>
        <div class="flex justify-center space-x-8">
            <cardVue :cardHeader="'CORPORATE'"
                :cardText="'Partnering with entrepreneurs and businesses to help them reach their goals and achieve lasting success'" />
            <cardVue :cardHeader="'CLIENT'"
                :cardText="'Collaborating with private clients to provide tailored, bespoke solutions that cater to your individual needs.'" />
            <cardVue :cardHeader="'INSTITUTION'"
                :cardText="'Assisting financial intermediaries, family offices, and financial institutions in optimizing and expanding their client services.'" />
        </div>
        <div class="mt-10 bg-gray-900 h-80 px-32 flex items-center justify-between text-white">
            <div>
                <p>Contact us</p>
                <p class="mt-4">If you have any questions about Nova Glover or our global services, please get in touch</p>
                <p>We will respond to you as soon as possible.</p>
            </div>
            <button
                class="border-2 border-white text-white px-6 py-4 hover:bg-white hover:text-gray-900 transition-all duration-300">
                Contact
            </button>
        </div>
        <div class="mt-15 h-80 flex items-center justify-between text-gray-900 px-32 text-sm">
            <ul class="space-y-2">
                <li>
                    <NuxtLink>ABOUT US</NuxtLink>
                </li>
                <li>
                    <NuxtLink>Our Vision</NuxtLink>
                </li>
                <li>
                    <NuxtLink>Our Values</NuxtLink>
                </li>
                <li>
                    <NuxtLink>Contact</NuxtLink>
                </li>
                <li>
                    <NuxtLink>Our Experts</NuxtLink>
                </li>
                <li>
                    <NuxtLink>Career</NuxtLink>
                </li>
            </ul>
            <ul class="space-y-2">
                <li>
                    <NuxtLink>TAX SERVICES</NuxtLink>
                </li>
                <li>
                    <NuxtLink>International Tax</NuxtLink>
                </li>
                <li>
                    <NuxtLink>Transaction Tax</NuxtLink>
                </li>
                <li>
                    <NuxtLink>VAT & Customs</NuxtLink>
                </li>

                <li>
                    <NuxtLink>Tax advisory & policy</NuxtLink>
                </li>
                <li>
                    <NuxtLink>Tax litigation and dispute resolution</NuxtLink>
                </li>
            </ul>
            <ul class="space-y-2">
                <li>
                    <NuxtLink>LEGAL SERVICES</NuxtLink>
                </li>
                <li>
                    <NuxtLink>Transaction Law</NuxtLink>
                </li>
                <li>
                    <NuxtLink>Litigation & Arbitration</NuxtLink>
                </li>
                <li>
                    <NuxtLink>Coporate Secretarial Services</NuxtLink>
                </li>
                <li>
                    <NuxtLink>Finance & Projects Development</NuxtLink>
                </li>
                <li>
                    <NuxtLink>Tax litigation and dispute resolution</NuxtLink>
                </li>
            </ul>
            <ul class="space-x-4 flex items-center">
                <li>
                    <NuxtLink><ion-icon size="small" name="logo-twitter"></ion-icon></NuxtLink>
                </li>
                <li>
                    <NuxtLink><ion-icon size="small" name="logo-instagram"></ion-icon></NuxtLink>
                </li>
                <li>
                    <NuxtLink><ion-icon size="small" name="logo-facebook"></ion-icon></NuxtLink>
                </li>
            </ul>
        </div>
    </div>
</template>


<script setup>
import bannerVue from '~/components/banner.vue';
import headerVue from '~/components/header.vue';
import cardVue from '~/components/card.vue';
</script>