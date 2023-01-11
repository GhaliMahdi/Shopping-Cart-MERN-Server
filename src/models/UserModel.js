const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Schemas
const UserSchema = new Schema({
    username: String,
    password: String
  });
  
  //Models
const UserModel = mongoose.model('User', UserSchema);

exports.UserModel = UserModel;