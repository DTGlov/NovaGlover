<template>
    <div @click="closeOverlay" v-if="isOverlayVisible" class="overlay h-screen w-full items-center z-50">
        <button @click="closeOverlay"
            class="absolute top-10 right-4 text-white text-3xl font-bold hover:text-gray-300 focus:outline-none">
            &times;
        </button>
        <div class="relative bg-white p-6 rounded-lg shadow-lg w-full max-w-md" @click.stop>
            <form class="bg-white p-6 rounded-lg w-full max-w-md">
                <div class="mb-4">
                    <label for="name" class="block text-gray-700 font-bold mb-2">Name</label>
                    <input type="text" id="name" name="name" required
                        class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div class="mb-4">
                    <label for="email" class="block text-gray-700 font-bold mb-2">Email</label>
                    <input type="email" id="email" name="email" required
                        class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div class="mb-4">
                    <label for="subject" class="block text-gray-700 font-bold mb-2">Subject</label>
                    <input type="text" id="subject" name="subject" required
                        class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div class="mb-4">
                    <label for="message" class="block text-gray-700 font-bold mb-2">Message</label>
                    <textarea id="message" name="message" rows="5" required
                        class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                </div>
                <button
                    class="w-full bg-red-500 text-white p-3 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    Submit
                </button>
            </form>
        </div>
    </div>
</template>

<script setup>
import { inject } from 'vue';

const isOverlayVisible = inject('isOverlayVisible');

// Function to close the overlay
function closeOverlay() {
    isOverlayVisible.value = false;
}

</script>
