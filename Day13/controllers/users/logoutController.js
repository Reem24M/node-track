const { TokeData } = require('../../modules/token')


const Logout=async(req,res)=>{
    let {username}=req.body;
    if(!username) return res.status(400).json({message:"Username is required"});
    const user=await TokeData.findOne({username})
    if(!user) return res.status(404).json({message:"User not found"});
    await TokeData.deleteOne({username})

    return res.status(200).json({message:"User logged out successfully"});
}
module.exports = { Logout };