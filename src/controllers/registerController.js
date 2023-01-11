const {UserModel} = require('../models/UserModel')
exports.registerController = async (req, res) => {
    const user = new UserModel(req.body);
    await user.save();
    res.json(user)
};