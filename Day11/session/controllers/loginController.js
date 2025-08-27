const {UserData}=require('../models/users')
const crypto=require('bcrypt')

const {TokenData}=require('../models/token');
const LoginController=async(req,res)=>{
    const {username,password}=req.body;
    if(!username || !password){
        return res.status(400).json({message:"All fields are required"});
    }
    const user =await UserData.findOne({username})
    if(!user)
    {
        return res.status(404).json({message:"User not found"});
    } 
    const Match=await crypto.compare(password,user.password)
   
    if(!Match)
    {
        return res.status(401).json({message:"Invalid password"});
    }
    
    const addtoken=new TokenData({
        username:username
    });
    await addtoken.save();
    
    return res.status(200).json({message:"Login successful"});
}


module.exports={LoginController}