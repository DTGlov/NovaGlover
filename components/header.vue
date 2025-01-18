<template>
    <div>
        <header class="hidden h-16 bg-gray-900 md:flex justify-between items-center pr-32 pl-24">
            <div class="cursor-pointer">
                <NuxtLink to="/" class="text-white text-xl">
                    <img src="/assets/images/novaNew.png" class="h-60" alt="">
                </NuxtLink>
            </div>
            <nav>
                <ul class="flex space-x-4 text-xs">
                    <li>
                        <NuxtLink to="/about"
                            class="relative text-white after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full">
                            About Us</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/services"
                            class="relative text-white after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full">
                            Services</NuxtLink>
                    </li>
                </ul>
            </nav>
        </header>
        <header class="md:hidden h-16 px-4 bg-gray-900 flex items-center justify-between">
            <NuxtLink to="/">
                <img src="/assets/images/novaHome.png" class="h-16" alt="">
            </NuxtLink>
            <Bars4Icon @click="toggleHamburger" class="size-10 text-white" />
        </header>
        <div v-if="isHamburgerTapped" class="absolute w-full">
            <div class="px-4 p-2 bg-gray-100 border-b-2">
                <NuxtLink to="/about">About Us</NuxtLink>
            </div>
            <div class="px-4 p-2 bg-gray-100">
                <NuxtLink to="/services">Services</NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Bars4Icon } from '@heroicons/vue/24/outline';

const isHamburgerTapped = ref(false);

function toggleHamburger() {
    isHamburgerTapped.value = !isHamburgerTapped.value;
}
</script>