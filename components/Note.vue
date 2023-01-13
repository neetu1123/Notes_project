<template>
  <div>
    <!-- table list -->
    <table class="border-collapse border border-slate-400 ">
      <tr>
        <th
          v-for="header in headerOfArray "
          :key="header.index"
          class="px-10  border border-slate-300"
        >
          {{
            header
          }}
        </th>
      </tr>
      <tr
        v-for="(note, id) in notesList"
        :key="id"
      >
        <td class="mx-3 p-3 px-10 border border-slate-300 ">
          {{ id + 1 }}
        </td>
        <td class=" mx-3 p-3 px-10 border border-slate-300">
          {{ note.title }}
        </td>
        <td class=" mx-3 p-3 px-10 border border-slate-300">
          {{ note.description }}
        </td>
        <td class=" mx-3 p-3 px-10 border border-slate-300">
          <nuxt-link :to="`/notes/${id + 1}`">
            <svg
              class="h-6 text-red-600 font-bold mx-3"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.036 12.322a1.012 1.012
                0 010-.639C3.423 7.51 7.36 4.5
                12 4.5c4.638 0 8.573 3.007 9.963
                7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </nuxt-link>
        </td>
        <td class=" mx-3 p-3 px-10 border border-slate-300 ">
          <svg
            class=" h-6 text-red-600 font-bold mx-3"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </td>
      </tr>
    </table>
  </div>
</template>

<script setup>

defineProps(["notesList", "remove"]);
const headerOfArray = ref(["S.no", "Title", "Description", "View", "Edit"]);

</script>

<style scoped>

</style>
