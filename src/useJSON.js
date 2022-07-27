
const useJSON = () => {

    const stringify = ( object ) => {
        try{
            return JSON.stringify( object );
        }catch(e){
            return e;
        }
    }

    const parse = ( json ) => {
        try{
            return JSON.parse( json );
        }catch(e){
           return e;
        }
    }

    return {
        stringify,
        parse
    }

}