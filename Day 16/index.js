const express=require('express');
const path=require('path');
const app=express();
const {connectDB}=require('./config/connectDb');
const { mongoose } = require('mongoose');
const{checkAdmin}=require('./middelware/checkAdmin')
const{checkAuth}=require('./middelware/checkAuth');
const { login } = require('./controllers/logincontroller');
const { DeleteUser, Getallusers } = require('./controllers/userscontroller');
app.use(express.json());
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')));
app.set('json spaces',2)
connectDB();
app.get('/',(req,res)=>{
    res.send("Home Page from index.js")
});
app.use(checkAuth)
app.post('/login',login)
app.get('/users',Getallusers)
app.use(checkAdmin)
app.get('/delete/:id',DeleteUser)

mongoose.connection.once('open',()=>{
    console.log("MongoDB connected");
    app.listen(process.env.PORT,()=>{
        console.log(`Server is running on port ${process.env.PORT}`);
    });
});

module.exports={app};