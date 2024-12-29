<template>
    <div>
        <div class=" h-60 w-80 shadow-xl bg-white">
            <div class="pt-4 px-4 ">
                <UserIcon v-if="cardHeader === 'CLIENT'" class="size-5" />
                <UserGroupIcon v-else-if="cardHeader === 'CORPORATE'" class="size-5" />
                <HomeModernIcon v-else class="size-5" />
                <h3 class="mt-4">{{ cardHeader }}</h3>
                <p class="mt-4">{{ cardText }}</p>
            </div>
        </div>
        <p class="h-2  bg-red-500"></p>
    </div>
</template>

<script setup>
import { UserIcon, HomeModernIcon, UserGroupIcon } from '@heroicons/vue/24/outline';

defineProps({
    cardHeader: {
        type: String,
        required: true
    },
    cardText: {
        type: String,
        required: true
    }
});
</script>