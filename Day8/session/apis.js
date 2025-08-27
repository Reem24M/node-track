const readline=require('readline')
const{stdin:input,stdout:output}=require('node:process')
const rl=readline.createInterface({input,output})


rl.question('what is  your name?',(ans)=>{
    fetch(`http://localhost:3000/profile/?username=${ans}`)
    .then(res=>res.json())
    .then(data=>console.log(data))
    .catch(error=>console.log(error))
    
    rl.close()
})