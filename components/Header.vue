<template>
    <!-- navbar -->
    <nav
        class="relative w-full flex flex-wrap items-center justify-between py-3 bg-gray-100 text-gray-500 hover:text-gray-700 focus:text-gray-700 shadow-lg">
        <div class="container-fluid w-full flex flex-wrap items-center justify-between px-6">
            <div class="container-fluid">
                <ul class="flex gap-8 ">
                    <li class="text-xl"><nuxt-link to="/notes/add">Add Notes list</nuxt-link></li>
                    <li class="text-xl"><nuxt-link to="/notes/list">Lists</nuxt-link></li>
                </ul>

            </div>
        </div>
    </nav>
</template>

<script setup>

</script>

<style  scoped>

</style>