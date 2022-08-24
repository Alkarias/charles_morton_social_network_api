const router = require('express').Router()
const {
    getAllThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction 
} = require('../../controllers/thoughtController.js');

router.route('/').get(getAllThoughts).post(createThought);

router.route('/:id').get(getSingleThought).put(updateThought).delete(deleteThought);

router.route('/:id/reactions').post(addReaction).delete(deleteReaction);

module.exports = router;