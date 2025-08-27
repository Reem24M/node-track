const {UserData}=require('../models/users')
const bcrypt=require('bcrypt')

const registerController=async(req,res)=>{
 const {username,firstname,lastname,age,email,password}=req.body;
 if(!username || !firstname || !lastname || !age || !email || !password){
     return res.status(400).json({message:"All fields are required"});
 }
 if(await UserData.findOne({email:email}))
 {
    return res.status(409).json({message:"User already exists"});
 }
 const hashpassword=await bcrypt.hash(password,10)
 const NewUser=new UserData({
    username,
    firstname,
    lastname,
    age,
    email,
    password:hashpassword
 })
 await NewUser.save();
 return res.status(201).json({message:"User registered successfully"});
}

module.exports={registerController};