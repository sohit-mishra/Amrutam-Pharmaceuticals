const Product = require('../models/Product');

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().select('_id name images'); 
    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  getAllProducts,
};