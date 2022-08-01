
const useIteration = () => 
{

    const forEach = ( array , eachAction ) => {
        for( let i = 0 ; i < array.length ; i++ )
        {
            eachAction( array[i] , i , array );
        }
    }

    const map = ( array , eachAction ) => {

        let mappedArray = [];

        for( let i = 0 ; i < array.length ; i++ )
        {
            mappedArray.push( eachAction( array[i] , i , array ) );
        }

        return mappedArray;

    }

    const filter = ( array , eachTest ) => {
        let filteredArray = [];

        for( let i = 0 ; i < array.length ; i++ )
        {   
            let ele = array[i];
            if( eachTest( ele , i , array ) ) filteredArray.push( ele );
        }
        
        return filteredArray;

    }

    const reduce = ( array , eachAction , init ) => {

       let reducedResult = init == undefined ? array[0] : init;

        for( let i = init == undefined ? 1 : 0 ; i < array.length ; i++ )
        {
           reducedResult = eachAction( reducedResult , array[i] , i , array );
        }
        
        return reducedResult;
        
    }

    const find = ( array , eachTest  ) => {

        let foundResult;
        
        for( let i = 0 ; i < array.length ; i++ )
        {
            if( eachTest( array[i] ) )
            {
                foundResult = array[i];
                break;
            }

        }

        return foundResult;

    }


    const some = ( array , eachTest ) => {

        for( let i = 0 ; i < array.length ; i++ )
        {
            if( eachTest(array[i]) )
            {
                return true;
            }

        }
        
        return false;

    }

    const every = ( array , eachTest ) => {

        let isTrueEvery = true;

        for( let i = 0 ; i < array.length ; i++ )
        {
            isTrueEvery = isTrueEvery && eachTest( array[i] );
        }

        return isTrueEvery;

    }


    return {
        forEach,
        map,
        filter,
        reduce,
        find,
        some,
        every
    }

}