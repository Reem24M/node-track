const { ProductsData } = require('../../modules/products');

const EditProduct = async (req, res) => {
  try {
    let { id } = req.params;
    if (!id) return res.status(400).json({ message: "Product id is required" });

    let product = await ProductsData.findOne({ id: Number(id) });
    if (!product) return res.status(404).json({ message: "Product not found" });

    let { title, description, price, quantity } = req.body;

    if (title !== undefined) product.title = title;
    if (description !== undefined) product.description = description;
    if (price !== undefined) product.price = price;
    if (quantity !== undefined) product.quantity = quantity;

    await product.save();
    return res.status(200).json({ message: "Product updated successfully", product });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
module.exports = { EditProduct };