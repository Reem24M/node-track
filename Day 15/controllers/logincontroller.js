const jwt=require('jsonwebtoken')

const User = require('../models/users')
require('dotenv').config
const Login=async(req,res)=>{
    let{name,password}=req.body
    if(!name|| !password) return res.status(400).send("all fields are reuqire")

        let user=User.findOne({name})
       
        if(!user) return res.status(404).send("user not found")
            let token=jwt.sign({
                    name,
                    password
    
            },process.env.JWT_KEY,{expiresIn:'1m'})
            req.session.token=token

            return res.status(200).send("user login successfully")
}
module.exports={Login}