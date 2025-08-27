const {UserData}=require('../models/users.js');
const {TokenData}=require('../models/token.js')
const GetAllUsers=async(req,res)=>{
    const username=req.query.username;
    if(!username)
    {
        return res.status(400).json({message:"Username is required"});
    }
    const checktoken=await TokenData.findOne({
        username:username
    });
    const getusers=await UserData.find(); // find return all users
    return res.json({getusers});

}

module.exports={GetAllUsers};