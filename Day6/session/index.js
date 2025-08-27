const emit=require('./events')

const readline=require('node:readline')
const {stdin:input,stdout:output}=require('node:process')
// eventemitter.on('test',()=>{
//     console.log("event is running");
//     console.log();
// })

// let x=10

// if(x===10)
// {
//     eventemitter.emit('test')
// }
const rl=readline.createInterface({input,output})

// rl.question('enter your username',(username)=>{
//     rl.question('enter your password',(pass)=>{
//         rl.question('enter your email',(email)=>{
//             let inputdata={username,pass,email}
            
//             emit.emit('Register',inputdata)
//             rl.close()
//         })
//     })
// })
rl.question('enter your email',(email)=>{
    rl.question('enter your password',(pass)=>{
       
            let inputdata={email,pass}
            
            emit.emit('Login',inputdata)
            rl.close()
        
    })
})