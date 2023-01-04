

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Schemas
const ProductSchema = new Schema({
    name: String,
    cost: Number,
    description: String,
  });
  
  //Models
const ProductModel = mongoose.model('Product', ProductSchema);

exports.ProductModel = ProductModel