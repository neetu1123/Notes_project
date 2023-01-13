<template>
    <div class="">
        <div class="text-3xl mt-1 py-8 font-bold text-center">
            {{ id }}.
            {{ note.title }}
        </div>
    </div>
    <hr />
    <div>
        <div class="text-3xl font-serif text-center font-bold text-red-500">
            {{ note.description }}
        </div>
    </div>
</template>

<script setup  >
import useCounterStore from "../../stores";
const { id } = useRoute().params;

const store = useCounterStore();

const note = store.getNoteByindex(id);



</script>

