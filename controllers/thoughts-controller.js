const { appendFileSync } = require("fs");
const Thought = require("../models/Thoughts");

module.exports = {
  async getAllThoughts(req, res) {
    try {
      const thoughts = await Thought.find();
      res.json(thoughts);
    } catch (error) {}
  },

  async getSingleThought(req, res) {
    try {
      const thought = await Thought.findOne({ _id: req.params.thoughtId });

      if (!thought) {
        return res
          .status(404)
          .json({ message: "No thoughts here, only vibes" });
      }
      res.json(thought);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  async createThought(req, res) {
    try {
      const user = await Thought.create(req.body);
      res.json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  async updateThought(req, res) {
    try {
      const thought = await Thought.findByIdAndUpdate(
        { _id: req.params.thoughtId },
        { thoughtText: req.body.thoughtText },
        { new: true }
      );
      res.json(thought);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  async deleteThought(req, res) {
    try {
      const { thoughtId } = req.params;
      const thought = await Thought.findByIdAndDelete(thoughtId);

      if (!thought) {
        return res.status(404).json({ message: "Thought not found" });
      }
      res.json(thought);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  async addReaction(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $addToSet: { reactions: req.body } },
        { runValidators: true, new: true }
      );
      if (!thought) {
        return res.status(404).json({ message: "No thought with that ID" });
      }
      res.json(thought);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  async deleteReaction(req, res) {
    try {
      const thought = await Thought.findByIdAndUpdate(
        // req.params.thoughtId,
        // {_id: req.params.reactionId},
        { _id: req.params.thoughtId },
        { $pull: { reactions: { reactionId: req.params.reactionId } } },
        { runValidators: true, new: true }
      );
      if (!thought) {
        return res.status(404).json({ message: "No thought with that ID" });
      }
      res.json(thought);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
