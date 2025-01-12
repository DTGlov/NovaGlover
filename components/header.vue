<template>
    <header class="h-16 bg-gray-900 flex justify-between items-center pr-32 pl-24">
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
</template>