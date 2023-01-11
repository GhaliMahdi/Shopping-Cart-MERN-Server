const {UserModel} = require('../models/UserModel')

const jwt = require("jsonwebtoken");
secretString = "secret-password";
exports.secretString = "secret-password";

exports.loginController = async (req, res) => {
    const userInDb = await UserModel.findOne({
        username: req.body.username,
        password: req.body.password,
    });

    if (!userInDb) {
        res.status(401).send("Invalid login.");
    } else {
        const userObject = userInDb.toObject();
        delete userObject.password;
        const token = jwt.sign(userObject, secretString);
        res.json({
            user:userObject, 
            token
        });
    }
};