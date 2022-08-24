const { User, Thought } = require('../models');

module.exports = {
    async getAllThoughts(req, res) {
        const thoughtData = await Thought.find({});
        res.status(200).json(thoughtData);
    },
    async getSingleThought(req, res) {
        const thoughtData = await Thought.findById(req.params.id);
        res.status(200).json(thoughtData);
    },
    async createThought(req, res) {
        //create a new thought
        const thoughtData = await Thought.create(req.body);
        const thoughtId = thoughtData._id;
        // add the thought id to the user 
        await User.findOneAndUpdate(
            { username: req.body.username },
            {$push: {thoughts: thoughtId}},
            {new:true}
        );
        // return the new thought
        res.status(200).json(thoughtData);
    },
    async updateThought(req, res) {
        const thoughtData = await Thought.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true}
        );

        res.status(200).json(thoughtData);
    },
    async deleteThought(req, res) { 
        const thought = await Thought.findById(req.params.id);

        await User.findOneAndUpdate(
            { username: thought.username },
            {$pull: {thoughts: thought._id}},
            {new:true}
        );

        const thoughtData = await Thought.findByIdAndDelete(req.params.id);
       
        res.status(200).json(thoughtData);
    },
    async addReaction(req, res) {
        const reactionData = await Thought.findByIdAndUpdate(
            req.params.id,
            {$push: {reactions: req.body}},
            { new:true }
        );
        res.status(200).json(reactionData);
    },
    async deleteReaction(req, res) {
        const reactionData = await Thought.findByIdAndUpdate(
            req.params.id,
            {$pull: {reactions: {username: req.body.username}}},
            {new:true}
        );
        res.status(200).json(reactionData);
    },
}