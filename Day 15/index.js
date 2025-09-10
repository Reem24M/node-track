const express=require('express');
const path=require('path');
const app=express();
const {connectDB}=require('./config/connectDb');
const { mongoose } = require('mongoose');
const session = require('express-session');
app.use(express.json());
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')));
app.set('json spaces',2)
connectDB();


app.use(session({
    secret:"kfkfkfkfkkfkfkw;,w;,;,s;,s;w,s;w",
    saveUninitialized:false,
    resave:false,
    cookie:{
        maxAge:1000*60*60,
        httpOnly:true,
        secure:false
    }
}))
app.post('/login',(req,res)=>{
    let {name,password}=req.body
    req.session.user={name,password}
    console.log(req.session);
    console.log(req.sessionID);
    return res.status(200).send("user logined successfully !!")
})
app.get('/',(req,res)=>{
    // res.send("Home Page from index.js")
    console.log(req.session);
    if(req.session.user)
        return res.status(200).json(req.session.user)
});

mongoose.connection.once('open',()=>{
    console.log("MongoDB connected");
    app.listen(process.env.PORT,()=>{
        console.log(`Server is running on port ${process.env.PORT}`);
    });
});

module.exports={app};