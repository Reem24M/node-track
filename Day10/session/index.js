// require('dotenv').config();
const {connectDB} = require('./config/connectDB');

const express=require('express')
const path=require('path')
const app=express();
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static(path.join(__dirname, 'public')));

// console.log("URL:", process.env.URL);
// console.log("env:", process.env.ENV);
connectDB();
app.listen(3000,() => {
    console.log("Server is running on port 3000");
})

module.exports={app}