const productModel = require("../models/productModel");

//Get all products => /api/v1/products

exports.getProducts = async (req, res, next) => {
  try {
    const query = req.query.keyword
      ? {
          name: {
            $regex: req.query.keyword,
            $options: "i",
          },
        }
      : {};
    const products = await productModel.find(query);
    res.json({ success: true, products, message: "Get all products" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

//Get product by ID => /api/v1/product/:id

exports.getProductById = async (req, res, next) => {
  try {
    const product = await productModel.findById(req.params.id);
    res.json({ success: true, product, message: "Get product by ID" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
