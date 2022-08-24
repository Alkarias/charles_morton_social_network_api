const { User } = require('../models');

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
        const userData = await User.findById(req.params.id)
        .populate('thoughts')
        .populate('friends');
        res.status(200).json(userData);
    },
    async updateUser(req, res) {
        const userData = await User.findByIdAndUpdate(
            req.params.id, 
            req.body, 
            { new: true }
        )
        res.status(200).json(userData);
    },
    async deleteUser(req, res) {
        const userData = await User.findByIdAndDelete(req.params.id);
        res.status(200).json(userData);
    },
    async addFriend(req, res) {
        // add a new friend to the user's friends list
        const userData = await User.findByIdAndUpdate(
            req.params.userId,
            {$push: {friends: req.params.friendId}},
            { new: true }
        ).populate('friends');
        // add the user to the friend's friends list as well
        await User.findByIdAndUpdate(
            req.params.friendId,
            {$push: {friends: req.params.userId}},
            { new: true }
        ).populate('friends');
        // return the updated data
        res.status(200).json(userData);
    },
    async removeFriend(req, res) {
        // delete a friend
        const userData = await User.findByIdAndUpdate(
            req.params.userId,
            {$pull: {friends: req.params.friendId}},
            { new: true }
        ).populate('friends');
        // remove the user from the friend's list as well
        await User.findByIdAndUpdate(
            req.params.friendId,
            {$pull: {friends: req.params.userId}},
            { new: true }
        ).populate('friends');
        // return the updated data
        res.status(200).json(userData);
    }
};