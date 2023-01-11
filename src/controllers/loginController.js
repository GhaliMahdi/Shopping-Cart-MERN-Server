const {UserModel} = require('../models/UserModel')

const jwt = require("jsonwebtoken");

exports.loginController = async (req, res) => {
    const userInDb = await UserModel.findOne({
        username: req.body.username,
        password: req.body.password,
    });

    if (!userInDb) {
        res.status(401).send("Invalid login.");
    } else {
        const token = jwt.sign(userInDb.toObject(), "secret-password");
        res.json({
            user:userInDb, 
            token
        });
    }
};