<template>
    <div>
        <div>
            <!-- notes component used for list of table -->
            <Note :notesList="notesLists" />

        </div>
    </div>
</template>

<script setup>
import useCounterStore from "../../stores";
const store = useCounterStore();

const notesLists = store.filterData

console.log(store.filterData)


</script>

