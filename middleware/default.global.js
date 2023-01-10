import useCounterStore from "../stores";

export default async function(to, from) {
   const store = useCounterStore();
   const notesList = store.filterData
   console.log(to, from)
  
   if(!notesList.length && to.path === "/notes/list") {
      alert('list is empty, please fill the data !')
      return navigateTo(from)
   }
   
   if(to.fullpath){
      return navigateTo('/')
   }

   return undefined
 }

 