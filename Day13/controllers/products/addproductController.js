const {ProductsData}=require('../../modules/products')




const AddProduct=async(req,res)=>{
    try{
        const {title,description,price,quantity}=req.body
        if(!title ||  !description || !price || !quantity) return res.status(400).json({message:"All fields are required"})
            let newid= await ProductsData.countDocuments()+1
        let product=new ProductsData({
            id: newid,
            title,
            description,
            price,
            quantity
    })
    await product.save();
    return res.status(201).send("add product successfully !!")

    }catch(error){ return res.status(500).json({message:error.message})}
}
const GetProductById=async(req,res)=>{
    try{
        let {id}=req.params
        if(!id) return res.status(400).json({message:"Product id is required"})
        let product=await ProductsData.findOne({id})
        if(!product) return res.status(404).json({message:"Product not found"})
        return res.status(200).json({product})
    }catch(err){
        return res.status(500).json({message:err.message})
    }
}
const GetAllProducts=async(req,res)=>{
    try{
        let products=await ProductsData.find()
        return res.status(200).json({products})
    }catch(err){
        return res.status(500).json({message:err.message})
    }
}
module.exports={AddProduct,GetProductById,GetAllProducts}