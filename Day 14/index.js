const express=require('express');
const path=require('path');
const app=express();
const {connectDB}=require('./Config/connectDB');
const { mongoose } = require('mongoose');
app.use(express.json());
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')));
app.set('json spaces',2)
connectDB();



app.use('/auth',require('./router/authRouter'));
app.use('/users',require('./router/usersRouter'));


mongoose.connection.once('open',()=>{
    console.log("MongoDB connected");
    app.listen(process.env.PORT,()=>{
        console.log(`Server is running on port ${process.env.PORT}`);
    });
});

module.exports={app};