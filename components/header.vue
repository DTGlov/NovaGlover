<template>
    <header class="h-16 bg-gray-900 flex justify-between items-center px-32">
        <div class="cursor-pointer">
            <NuxtLink to="/" class="text-white text-xl"><span class="text-red-500">Nova</span> Glover</NuxtLink>
        </div>
        <nav>
            <ul class="flex space-x-4 text-xs">
                <li>
                    <NuxtLink to="/"
                        class="relative text-white after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full">
                        About Us</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/"
                        class="relative text-white after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full">
                        Services</NuxtLink>
                </li>
            </ul>
        </nav>
    </header>
</template>