const { Thought } = require('../models');

module.exports = {
    async getAllThoughts() {
        const thoughtData = await Thought.find();
        res.status(200).json(thoughtData);
    },
    async getSingleThought() {

    },
    async createThought() {

    },
    async updateThought() {

    },
    async deleteThought() {

    },
    async addReaction() {

    },
    async deleteReaction() {

    },
}