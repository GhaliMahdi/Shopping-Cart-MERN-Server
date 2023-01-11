const { ProductModel } = require("../models/ProductModel");
const jwt = require("jsonwebtoken");
const { secretString } = require("./loginController");


exports.createProductController = async (req, res) => {
    const authorization = req.headers.authorization;
    const token = authorization.substring(7);
    try {
      const user = jwt.verify(token, secretString);
      console.log("user:", user);
      if (user.role !== "admin") {
        return res.status(403).send("not admin");
      }
      const instance = new ProductModel(req.body);
      await instance.save();
      res.send(instance.toJSON());
    } catch (err) {
      res.status(403).send('authorization error');
    }
    
  };