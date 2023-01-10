<template>
    <div>
        <div class="mt-7 pt-10 max-w-5m mx-auto text-center card">
            <p class="mt-7 text-7xl font-bold">page not found /404</p>
            <p class="mt-7 text-6xl">error.</p>

            <button class="bg-red-600 mx-9 py-4 px-7 my-7 rounded-3xl" @click="handleClearError">
                Go Home....
            </button>
        </div>
    </div>
</template>

<script setup>
const handleClearError = () => clearError({ redirect: "/" });
</script>

