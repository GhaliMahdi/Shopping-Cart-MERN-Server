const { ProductModel } = require("../models/ProductModel");

exports.updateProductController = async (req, res) => {
    const {name, cost, description} = req.body;
    const {productId} = req.params;

    const product = await ProductModel.findById(productId)

    Object.assign(product, {
        name, cost, description
    });
    
    await product.save();

    res.json(product);
  };