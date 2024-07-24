const Thought = require("../models/Thoughts");

module.exports = {
    async getAllThoughts(req, res) {
        try {
            const thoughts = await Thought.find();
            res.json(thoughts);

        } catch (error) {

        }
      

    },

    async getSingleThought(req, res) {
        try {
            const thought = await Thought.findOne({_id: req.params.thoughtId});

            if (!thought) {
                return res.status(404).json({message: "No thoughts, only vibes"});
            }
            res.json(thought);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    async createThought(req, res) {
        try {
            const dbUserData = await Thought.create(req.body);
            res.json(dbUserData);
        } catch (error) {
            res.status(500).json(error);
        }
    },
};