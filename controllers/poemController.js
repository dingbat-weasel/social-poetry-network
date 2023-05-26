const { Poem, User } = require("../models");

module.exports = {
  async getPoems(req, res) {
    try {
      const poems = await Poem.find();
      res.json(poems);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async getSinglePoem(req, res) {
    try {
      const poem = await Poem.findOne({ _id: req.params.poemId });

      if (!poem) {
        return res.status(404).json("No poem found with that ID");
      }

      res.json(poem);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async createPoem(req, res) {
    try {
      const poem = await Poem.create(req.body);
      const user = await User.findOneAndUpdate(
        { _id: req.body.userId },
        { $addToSet: { poems: poem._id } },
        { new: true }
      );

      if (!user) {
        return res.status(404).json({
          message: "Poem created but no user found with that ID",
        });
      }

      res.json(user);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  async updatePoem(req, res) {
    try {
      const poem = await Poem.findOneAndUpdate(
        { _id: req.params.poemId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!poem) {
        return res.status(404).json({ message: "No poem found with that ID" });
      }

      res.json(poem);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  async deletePoem(req, res) {
    try {
      const poem = await Poem.findOneAndRemove({ _id: req.params.poemId });

      if (!poem) {
        return res.status(404).json({ message: "No poem found with that ID" });
      }

      const user = await User.findOneAndUpdate(
        { poems: req.params.poemId },
        { $pull: { poems: req.params.poemId } },
        { new: true }
      );

      if (!user) {
        return res
          .status(404)
          .json({ message: "Poem removed but no user with this ID" });
      }

      res.json({ message: "Poem deleted" });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  async createReaction(req, res) {
    try {
      const poem = await Poem.findOneAndUpdate(
        { _id: req.params.poemId },
        { $addToSet: { reactions: req.body } },
        { runValidators: true, new: true }
      );

      if (!poem) {
        return res.status(404).json({
          message: "No poem with that ID",
        });
      }

      res.json(poem);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async deleteReaction(req, res) {
    try {
      const poem = await Poem.findOneAndUpdate(
        { _id: req.params.poemId },
        { $pull: { reactions: { reactionId: req.params.reactionId } } },
        { runValidators: true, new: true }
      );

      if (!poem) {
        return res.status(404).json({ message: "No poem with this ID" });
      }

      res.json(poem);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
