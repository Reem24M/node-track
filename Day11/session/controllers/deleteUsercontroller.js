const {UserData}=require('../models/users')
const {TokenData}=require('../models/token')


const DeleteUser=async(req,res)=>{
    const {username}=req.body;
    if(!username) return res.status(400).json({message:"Username is required"});
    const checkToken=await TokenData.findOne({username:username});

    if(!checkToken) return res.status(401).json({"unauthorized":"User is not authorized"});
    
    const deleteuser=await UserData.deleteOne({username:username})
    if(!deleteuser) return res.status(404).json({message:"User not found"});
    return res.status(200).json({message:"User deleted successfully"});
}


module.exports={DeleteUser};