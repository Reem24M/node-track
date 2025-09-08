const login = (req,res)=>{
    res.send("User logged in");
}
const register = (req,res)=>{
    res.send("User registered");
}

module.exports={login,register};