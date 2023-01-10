<template>
    <div class="h-screen w-sreen flex">
        <!-- sidebar -->
        <Sidebar />
        <div class="flex-auto w-64 h-[100vh]">
            <!-- header -->
            <Header />
            <div class="h-full w-full bg-pink-100">
                <slot />
            </div>
        </div>
    </div>
    <div class="mx-auto bg-pink-100">
        <Footer />
    </div>
    <!-- footer -->
</template>

<script setup lang="ts">
</script>

