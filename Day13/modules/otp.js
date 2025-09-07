const mongoose=require('mongoose')

const Otp=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    otp:{
        type:Number,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now,
        expires: '5d',
    }
})


const OtpData=mongoose.model('OtpData',Otp)
module.exports={OtpData}