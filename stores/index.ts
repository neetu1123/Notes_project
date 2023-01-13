import { defineStore } from "pinia";

const useCounterStore = defineStore("counter", () => {
  interface Note {
    title: string;
    description: string;
  }

  // for array of title and description
  const notesLists = ref<Note[]>([]);

  // push  data
  function addLists(title: string, description: string) {
    console.log(title, description);
    notesLists.value.push({ title, description });
  }

  function getNoteByindex(index: number) {
    return notesLists.value[index - 1];
  }
  // getter
  const filterData = computed(() => notesLists.value);

  // return properties
  return {

    filterData,
    addLists,
    getNoteByindex,
  };
});

export default useCounterStore;
