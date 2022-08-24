const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { makeThought } = require('./data');

connection.once('open', async () => {
    await User.deleteMany({});
    await Thought.deleteMany({});

    // const users = [];
    // const thoughts = [];

    // for (let i = 0; i < 3; i++) {
    //     const username = 'Alkarias'
    //     thoughts.push({
    //         thoughtText: makeThought(),
    //         username: username,
    //     });
    // }
    
    // const user = {
    //     username: 'Alkarias',
    //     email: 'alkarias29@gmail.com',
    //     thoughts: []
    // }
    
    // await Thought.find({ username: 'Alkarias'});
    // console.log(await Thought.find({ username: 'Alkarias'}));

    // await User.create(user);
    // await Thought.create(thoughts);

    process.exit(0);
});