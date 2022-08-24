const { User, Thought } = require('../models');

module.exports = {
    async getAllUsers(req, res) {
        const users = await User.find({})
        res.status(200).json(users);
    },
    async createUser(req, res) {

    },
    async getSingleUser(req, res) {

    },
    async updateUser(req, res) {

    },
    async deleteUser(req, res) {

    },
};