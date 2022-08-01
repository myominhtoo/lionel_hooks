const useSelector = () => {

    const oneWithId = ( id ) => {
        return document.getElementById( id );
    }

    const oneWithCustomKey = ( key ) => {
        return document.querySelector(key);
    }

    const allWithClassName = ( className ) => {
        return document.getElementsByClassName( className );
    }

    const allWithCustomKey = ( key ) => {
        return document.querySelectorAll( key );
    }

    const $ = ( key ) => {
        let nodes = document.querySelectorAll( key );

        return nodes.length > 1
               ? nodes
               : nodes.length == 0 
                 ? null
                 : nodes[0];
    }

    return {
        oneWithId,
        oneWithCustomKey,
        allWithClassName,
        allWithCustomKey,
        $
    }

}