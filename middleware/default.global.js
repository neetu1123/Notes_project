import useCounterStore from "../stores";

export default async function(to, from) {
   const store = useCounterStore();
   const notesList = store.filterData
   
   console.log(to, from)
//   stop navigation
   if(!notesList.length && to.path === "/notes/list") {
      alert('list is empty, please fill the data !')
      return navigateTo(from)
   }
   
   if(to.name =='notes-id' && !notesList.length ){
      console.log('middleware')
      return navigateTo('/404')
   }

   return undefined
 }

 