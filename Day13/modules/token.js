const mongoose=require('mongoose')
const Token=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true,
        enum:['user','admin'],
        default:'user'
    },
    createdAt:{
        type:Date,
        default:Date.now,
        expires: 60 * 10,
    }
})
const TokeData=mongoose.model('TokeData',Token)
module.exports={TokeData}