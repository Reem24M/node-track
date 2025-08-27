const express=require('express');
const path=require('path');
const app=express();
const {connectDB}=require('./config/connectDb');
const { mongoose } = require('mongoose');
app.use(express.json());
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')));

connectDB();

mongoose.connection.once('open',()=>{
    console.log("MongoDB connected");
    app.listen(process.env.PORT,()=>{
        console.log(`Server is running on port ${process.env.PORT}`);
    });
});




module.exports={app};