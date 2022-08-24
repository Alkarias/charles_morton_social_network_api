const { User, Thought } = require('../models');

module.exports = {
    async getAllUsers(req, res) {
        const userData = await User.find({})
        .populate('thoughts')
        .populate('friends');
        res.status(200).json(userData);
    },
    async createUser(req, res) { 
        const userData = await User.create(req.body);
        res.status(200).json(userData);
    },
    async getSingleUser(req, res) { 
        const userData = await User.findOne({ _id: req.params.id })
        .populate('thoughts')
        .populate('friends');
        res.status(200).json(userData);
    },
    async updateUser(req, res) {
        const userData = await User.findOneAndUpdate({ _id: req.params.id })
        .populate('thoughts')
        .populate('friends');
        res.status(200).json(userData);
    },
    async deleteUser(req, res) {
        const userData = await User.findOneAndDelete({ _id: req.params.id })
        .populate('thoughts')
        .populate('friends');
        res.status(200).json(userData);
    },
};