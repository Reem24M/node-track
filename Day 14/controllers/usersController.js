const Getusers = (req,res)=>{
    res.send("Get all users");
}
const CreateUser = (req,res)=>{
    res.send("Create a new user");
}

module.exports={Getusers,CreateUser};