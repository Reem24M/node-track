const { UsersData } = require("../../modules/users");
const {OtpData}=require('../../modules/otp')


const SendOtp=async(req,res)=>{
    try{

        let {email}=req.body
        if(!email) return res.status(400).json({message:"Email is required"});
        let user= await UsersData.findOne({email})
        if(!user) return res.status(404).json({message:"User not found"});
        let otp=Math.floor(100000 + Math.random() * 900000)
        let newopt=new OtpData({email,otp})
        await newopt.save()
        return res.status(200).json({message:"OTP sent successfully",newopt,otp});
    }catch(error){
        return res.status(500).json({message:"Internal server error",error: error.message});
    }

}
module.exports={SendOtp};