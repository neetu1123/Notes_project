<template>
  <div>
    <h1>welcome to home page</h1>

    <nuxt-link
      to="/404"
      class="border-2"
    >
      404
    </nuxt-link>
  </div>
  <button>
    click me
  </button>
  <button>click me</button>
</template>

<script setup>
definePageMeta({
  layout: "default",
});
</script>
