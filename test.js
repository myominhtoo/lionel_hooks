
const { setItem , getItem , removeItem , clearAll} = useLocalStorage();
const { stringify , parse } = useJSON();
const { setCookie , getAllCookie , removeCookie , getCookie } = useCookie();
const { log , error , warn , table } = useConsole();

// log("Testing useLocalStorage(){");

// setItem('name','lionel');
// setItem('email','lionel@gmail.com');

// log(getItem('name'));
// log(getItem('email'));

// removeItem('name');
// log(`name=${getItem('name')}`)

// clearAll();

// log("}")

// log("\n\n")


// log("Testing useCookie(){");

// setCookie('name','lionel');
// setCookie('lionel','lionel@gmail.com');

// log("name="+getCookie('name'))
// log(getAllCookie())

// removeCookie('name');
// log(`name=${getCookie('name')}`)

// log("}")

let array = [1,2,3];

const { map , filter , forEach , reduce , find , some , every  } = useIteration();


let mappedArray = map( array , ( ele , i , array )=> {
    console.log(i);
    // console.log(array)
    return ele + 1; 
});

// console.log(mappedArray)

array = [1,2,3,4,5];

let filterArray = filter( array , ele => {
    return ele % 2 == 0;
});

// console.log(filterArray);

// forEach( array , ( ele , i , array ) => {
//     console.log(ele);
//     console.log(i);
//     console.log(array);
// });

let reducedResult = reduce( array , ( pre ,cur ) => {
    return pre + cur;
})

// console.log(reducedResult);


const datas = [
    ['name','lionel'],
    ['email','lionel@gmail.com']
];

let reducedData =  reduce( datas , ( pre , cur ) => {
    pre[cur[0]] = cur[1]; 

    return pre;
} , {} )

// console.log(reducedData)

const users = [
    {
        name : "lionel",
        id : 1,
    },
    {
        name : "mg mg",
        id : 2
    },
    {
        name : "kyaw kyaw",
        id : 3
    }
]

let foundUser = find( users , user => user.id == 1);

// console.log(foundUser)

let numbers = [2,3,5,7,9];

console.log( some( numbers , num => num % 2 == 0 ) );

console.log( every( numbers , num => num % 2 != 0 ) );


