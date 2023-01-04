const { ProductModel } = require("../models/ProductModel");

exports.createProductController = async (req, res) => {
    const instance = new ProductModel(req.body);
    await instance.save();
    res.send(instance.toJSON());
  };