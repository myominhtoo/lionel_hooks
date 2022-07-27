
const useLocalStorage = () => {

   const setItem = ( key , value ) => {      

    window.localStorage.setItem( key , value )

   }

   const getItem = ( key ) => {

    return  window.localStorage.getItem( key );

   }


   const removeItem = ( key ) => {

     window.localStorage.removeItem( key );

   }

   const clearAll = () => {

    window.localStorage.clear();

   }

    return {
        setItem,
        getItem,
        removeItem,
        clearAll
    }

}