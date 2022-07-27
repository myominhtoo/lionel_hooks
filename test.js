
const { setItem , getItem , removeItem , clearAll} = useLocalStorage();
const { stringify , parse } = useJSON();
const { setCookie , getAllCookie , removeCookie , getCookie } = useCookie();
const { log , error , warn , table } = useConsole();

log("Testing useLocalStorage(){");

setItem('name','lionel');
setItem('email','lionel@gmail.com');

log(getItem('name'));
log(getItem('email'));

removeItem('name');
log(`name=${getItem('name')}`)

clearAll();

log("}")

log("\n\n")


log("Testing useCookie(){");

setCookie('name','lionel');
setCookie('lionel','lionel@gmail.com');

log("name="+getCookie('name'))
log(getAllCookie())

removeCookie('name');
log(`name=${getCookie('name')}`)

log("}")






