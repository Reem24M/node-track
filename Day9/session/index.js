const express=require('express')
const app=express()
const fs=require('fs')
app.use(express.json())

app.get('/',(req,res)=>{
    // fs.readFile('./home.html','utf-8',(error,data)=>{
    //     if(error) return res.send("Error reading file")
    //     res.send(data)
    // })
    return res.send("hello world")
})
app.all('/{*any}', (req, res) => {
    return res.status(404).send("page not found")
})

app.listen(3000,()=>console.log("server is running"))
