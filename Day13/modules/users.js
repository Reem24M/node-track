const mongoose=require('mongoose')
const UsersSchema=new mongoose.Schema({
   firstname:{
    type:String,
    required:true
   },
   lastname:{
    type:String,
    required:true
   },
   username:{
    type:String,
    required:true,
    // unique:true
   },
   age:{
       type:Number,
       required:true
   },
   email:{
    type:String,
    required:true,
    // unique:true
   },
   password:{
    type:String,
    required:true
   },
   role:{
    type:String,
    required:true,
    enum:['user','admin'],
    default:'user'
   },

})
const UsersData=mongoose.model('UsersData',UsersSchema) 
module.exports={UsersData}