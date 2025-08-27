const mongoose=require('mongoose');
const ProductsSchema=new mongoose.Schema({
    id:{
        type:Number,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    // createdAt:{
    //     type:Date,
    //     default:Date.now
    // }
})
const ProductsData=mongoose.model('ProductsData',ProductsSchema)
module.exports={ProductsData}