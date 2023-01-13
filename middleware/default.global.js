import useCounterStore from "../stores";

export default function define(to, from) {
  const store = useCounterStore();
  const notesList = store.filterData;

  //   stop navigation
  if (!notesList.length && to.path === "/notes/list") {
    return navigateTo("/");
  }
  console.log(to, from);
  if (to.name === "notes-id" && !notesList.length) {
    console.log("rote error");
    return navigateTo("/404");
  }

  return undefined;
}
