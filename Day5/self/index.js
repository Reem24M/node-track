// const fs=require("fs")

// fs.readFile('file.txt','utf8',(error,data)=>{
//     if(error)
//     {
//         console.error(error)
//         return;
//     }
//     console.log(data)
// })
// const text="hello wreem"
// fs.writeFile('output.txt',text,(error)=>{
//     if(error)
//     {
//         console.error(error)
//         return;
//     }
//     console.log("write the project !!")
// })
// const http=require('http')
// const server=http.createServer((req,res)=>{
//     res.statusCode=201
//     res.setHeader('Content-type','text-plain')
//     res.end("welcome to the server")
// })
// server.listen(3000,()=>{
//     console.log("the  server run on port 3000")
// })


// // g=to join and get the full path on node js
// const path=require('path')
// const dir='/user/local'
// const file='example.txt'
// //full path
// full_path=path.join(dir,file)
// console.log(full_path);

//os -> to get info about cpu arc and momory
// const os=require('os')
// console.log(os.platform()); // to get to kknew the platform
// console.log(os.arch()); // to get the arcthiture of os
// console.log("total memory",os.totalmem()); // to get to knew the size of total memory
// console.log(
//     "free memory", os.freemem()
// );


// take data from url in node js
// const myurl=new URL('https://example.com:3030/path/name?query=hello#hash')
// console.log("host",myurl.host);
// console.log("path",myurl.pathname);
// console.log("search query",myurl.search);
// console.log("search params",myurl.searchParams.get('query'));


// 
const lodash=require('lodash')
let arr=[1,2,3,4,"44l",3,5,6,7,8]
let res=lodash.reverse(arr)
console.log(res);