// const { log } = require('console');
// const url=require('url');

// const myUrl=new URL("http://website.com:800/hello.html?id==100&status=active");

// // serialized url

// console.log(myUrl.href);
// console.log((myUrl.toString()));

// // host (root domain)
// console.log(myUrl.host);
// // host name does not get port 
// console.log(myUrl.hostname);
// // path name
// console.log(myUrl.pathname);
// // serialized query
// console.log(myUrl.search);
// // params object 
// console.log(myUrl.searchParams);
// // add param
// myUrl.searchParams.append("abc","123");
// console.log(myUrl.searchParams);

// myUrl.searchParams.forEach((value,name)=>{
//     console.log(`${value}: ${name}`);
// })