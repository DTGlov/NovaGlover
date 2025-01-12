<template>
    <div>
        <headerVue />
        <bannerVue />
        <div class="my-10">
            <h1 class="text-center text-red-500 text-lg md:text-2xl font bold">About NovaGlover</h1>
            <div class="flex justify-center">
                <p class="text-center text-md md:text-lg py-2 w-6/12">
                    Nova Glover is a corporate and commercial tax firm in Accra, Ghana.</p>
            </div>
        </div>
        <div class="flex flex-col sm:flex-row  p-8 md:p-0 justify-center sm:space-x-8 space-y-8 sm:space-y-0">
            <cardVue :cardHeader="'CORPORATE'"
                :cardText="'Partnering with entrepreneurs and businesses to help them reach their goals and achieve lasting success'" />
            <cardVue :cardHeader="'CLIENT'"
                :cardText="'Collaborating with private clients to provide tailored, bespoke solutions that cater to your individual needs.'" />
            <cardVue :cardHeader="'INSTITUTION'"
                :cardText="'Assisting financial intermediaries, family offices, and financial institutions in optimizing and expanding their client services.'" />
        </div>
        <div
            class="mt-10 flex-col md:flex-row bg-gray-900 h-80 p-8 md:px-32 flex items-center justify-between text-white">
            <div>
                <p>Contact us</p>
                <p class="mt-4">If you have any questions about NovaGlover or our global services, please get in touch
                </p>
                <p>We will respond to you as soon as possible.</p>
            </div>
            <button @click="toggleOverlay"
                class="border-2 border-white text-white px-6 py-4 hover:bg-white hover:text-gray-900 transition-all duration-300">
                Contact
            </button>
        </div>
        <footerVue />
        <contactVue v-if="isOverlayVisible" />
    </div>
</template>


<script setup>
import { ref, provide } from 'vue';
import bannerVue from '~/components/banner.vue';
import headerVue from '~/components/header.vue';
import cardVue from '~/components/card.vue';
import footerVue from '~/components/footer.vue';
import contactVue from '~/components/contact.vue';

const isOverlayVisible = ref(false);

// Provide the isOverlayVisible value to child components
provide('isOverlayVisible', isOverlayVisible);

// Function to toggle the overlay visibility
function toggleOverlay() {
    isOverlayVisible.value = !isOverlayVisible.value;
    scrollToTop()
}

// Function to scroll to the top of the page
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Function to disable scrolling when overlay is visible
function disableBodyScroll() {
    if (isOverlayVisible.value) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}

// Watch the overlay visibility to enable/disable scrolling
watch(isOverlayVisible, disableBodyScroll);
</script>