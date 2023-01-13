<template>
  <main class="bg-pink-100">
    <h1 class="text-3xl font-bold text-center">
      Notelist
    </h1>
    <!-- for add notes list title and description -->
    <div class="inline-block mx-96">
      <label
        for="title"
        class="block mb-2 text-lg font-bold text-gray-900 dark:text-white"
      >Title</label>
      <input
        v-model="newTitle"
        class="
          block
          w-[50vh]
          p-4
          text-gray-900
          border border-gray-300
          rounded-lg
          bg-gray-50
          sm:text-md
          focus:ring-blue-500 focus:border-blue-500
          dark:bg-gray-700
          dark:border-gray-600
          dark:placeholder-gray-400
          dark:text-white
          dark:focus:ring-blue-500
          dark:focus:border-blue-500
        "
        type="text"
        placeholder="add title"
      />
      <label
        for="description"
        class="block mb-2 text-lg font-bold text-gray-900 dark:text-white"
      >Description</label>
      <input
        v-model="newDescription"
        class="
          block
          w-[50vh]
          p-4
          text-gray-900
          border border-gray-300
          rounded-lg
          bg-gray-50
          sm:text-md
          focus:ring-blue-500 focus:border-blue-500
          dark:bg-gray-700
          dark:border-gray-600
          dark:placeholder-gray-400
          dark:text-white
          dark:focus:ring-blue-500
          dark:focus:border-blue-500
        "
        type="text"
        placeholder="add description"
        @keypress.enter="addList"
      />
      // eslint-disable-next-line vue/html-button-has-type
      <button
        type="button"
        class="
          text-white
          mt-4
          mb-96
          p-96
          bg-blue-700
          hover:bg-blue-800
          focus:ring-4 focus:outline-none focus:ring-blue-300
          font-medium
          rounded-lg
          text-sm
          w-full
          sm:w-auto
          px-5
          py-2.5
          text-center
          dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
        "
        @click="addList"
      >
        Add notes list
      </button>
    </div>
  </main>
</template>

<script setup>
import useCounterStore from "../../stores";

const store = useCounterStore();
const newTitle = ref("");
const newDescription = ref("");

console.log(store);

function addList() {
  if (newTitle.value && newDescription.value) {
    store.addLists(newTitle.value, newDescription.value);
    newTitle.value = "";
    newDescription.value = "";
  }
}
</script>
