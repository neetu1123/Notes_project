<template>
  <div>
    <!-- sidebar -->
    <aside
      class="w-64"
      aria-label="Sidebar"
    >
      <div class="px-3 py-4 overflow-y-auto  h-[100vh] rounded bg-blue-200 dark:bg-gray-800">
        <ul class="space-y-2">
          <li
            class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <nuxt-link to="/">
              <span class="ml-3 text-2xl font-bold">Home</span>
            </nuxt-link>
          </li>
          <li
            class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <nuxt-link to="/dashboard">
              <span class="ml-3 text-2xl font-bold">Dashboard</span>
            </nuxt-link>
          </li>
        </ul>
      </div>
    </aside>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>
