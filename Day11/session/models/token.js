const mongoose=require('mongoose');

const Token=mongoose.Schema({
    username:{
        type:String,
        required:true
    },
      createdAt: {
        type: Date,
        default: Date.now,
        expires: 60 
    }
})
const TokenData=mongoose.model('Token',Token);

module.exports={TokenData}