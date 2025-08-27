const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const http=require('http')
// const {sum,min,max,subtrackt}=require('../t1/server')

// console.log(sum(1,2))
// console.log(min(1,2))
// console.log(max(1,2))
// console.log(subtrackt(1,2))
// const readline = require('node:readline/promises');

// it used to take a input and ouput the answer

// const rl = readline.createInterface({ input, output })
// rl.question('enter your name ', (username) => {
//     if (!username)
//         {
//             console.log("enter a vailed username")
//             rl.close();
//             return;
//         } 
//     else {

//         rl.question('Enter your password ', (pass) => {
//              if (!pass) {
//                 console.log(`please enter a vailed password `)

//             }
//             else {
//                 console.log(`thanks name ${username} , ${pass}`)

//             }

//             rl.close();
//         })
//     }


// })
// http://127.0.0
// http://localhost:3000
 const server=http.createServer((req,res)=>{
    if(req.url==='/')
    {
        res.write(" hwllo worls")
        res.end()
    }else if(req.url==='/login')
        {
            res.write("login page")
            res.end()
    }
    
 })

 server.listen(5000,()=>{
    console.log("server is runnning")
 })