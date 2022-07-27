
const useConsole = () => {
    
    const log = ( input ) => {
        console.log(input);
    }

    const error = ( input ) => {
        console.error(input)
    }

    const warn = ( input ) => {
        console.warn(input)
    }

    const table = ( input ) => {
        Array.isArray(input)
        ? console.table(input)
        : console.log(input);
    }

    return {
        log,
        error,
        warn,
        table
    }

}