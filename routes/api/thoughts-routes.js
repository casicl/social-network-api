//get all thoughts
//get single thought
//post create new thought (don't forget to push the created thought's id to the associated user's thoughts array field)
//put to update thought by _id
//delete to remove thought by _id

const router = require("express").Router();

const {
    getAllThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction,

} = require("../../controllers/thoughts-controller");

router.route("/").get(getAllThoughts).post(createThought);

router.route("/:thoughtId").get(getSingleThought).put(updateThought).delete(deleteThought);

router.route("/:thoughtId/reactions").post(addReaction);

router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);

module.exports = router;