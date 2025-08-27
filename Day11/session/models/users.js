const mongoose=require('mongoose');


const UsersSchema= new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    firstname:{
        type:String,
        required:true
    },

    lastname:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },

    password:{
        type:String,
        required:true
    }
})
// },{timestamps:true}) // -> createdAt, updatedAt

const UserData=mongoose.model('Users',UsersSchema);
module.exports={UserData}