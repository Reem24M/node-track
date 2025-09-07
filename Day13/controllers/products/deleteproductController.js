const {ProductsData}=require('../../modules/products')

const DeleteProduct=async(req,res)=>{
    try{
        let {id}=req.params
        if(!id) return res.status(400).json({message:"Product id is required"})
        let product=await ProductsData.findOne({id})
        if(!product) return res.status(404).json({message:"Product not found"})
        await ProductsData.deleteOne({id})
        return res.status(200).json({message:"Product deleted successfully"})
    }catch(err){
        return res.status(500).json({message:err.message})
    }
}

module.exports={DeleteProduct}