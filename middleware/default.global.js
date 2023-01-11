import useCounterStore from "../stores";

export default async function(to, from) {
   const store = useCounterStore();
   const notesList = store.filterData
   
  
//   stop navigation
   if(!notesList.length && to.path === "/notes/list") {
      alert('list is empty, please fill the data !')
      return navigateTo('/')
   }
   
   if(to.name =='notes-id' && !notesList.length ){
      return navigateTo('/404')
   }

   return undefined
 }

 
