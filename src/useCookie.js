
const useCookie = () => {

    const setCookie = ( key , value , option ) => {
        document.cookie = `${key}=${value}; ${option}`;
    }

    const changeCookieToObject = ( array = [] ) => {

        return array
        .map( c =>  c.split("="))
        .reduce( ( prev , cur ) => {

            prev[cur[0]] = cur[1];

            return prev;
        } , {} );

    }

    const getCookie = ( key ) => {

        const cookie = document.cookie;

        if( cookie != "" && cookie != null ){

            let cookieArray = cookie.split("; ");
            let obj = changeCookieToObject(cookieArray)

            for( let data in obj ){
               if( key == data){
                 return obj[data];
               }
            }
        }

        return false;

    }

    const removeCookie = ( key ) => {
        if( key != ''  && key != null ){
            document.cookie = `${key}=; Max-age=-99999`;
            return true;
        }else{
            return false;
        }
    }

    const getAllCookie = () => {
        
        const cookie = document.cookie;

        if( cookie != "" && cookie != null ){
            
            let cookieArray = cookie.split("; ");

            return changeCookieToObject(cookieArray);
        }

        return false;

    }

    return {
        setCookie,
        getCookie,
        removeCookie,
        getAllCookie
    }

}