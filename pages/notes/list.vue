<template>
    <div>
        <div>
            <!-- notes component used for list of table -->
            <Note :notesList="notesLists" />
            <!-- @binding {object} text text table in the header -->
        </div>
    </div>
</template>

<script setup>
/**
 * @typedef {import ('../../stores')} useCounterStore
 */

import useCounterStore from "../../stores";

code.$slots
const store = useCounterStore();
/**
 * @typedef {{title:string,description:string}} 
 */
const notesLists = store.filterData

console.log(store.filterData)


</script>

