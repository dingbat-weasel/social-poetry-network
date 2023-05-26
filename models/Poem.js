const { Schema, model } = require("mongoose");
const Reaction = require("./Reaction");

const poemSchema = new Schema(
  {
    poemText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (date) => {
        return date.toDateString();
      },
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [Reaction],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

poemSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Poem = model("poem", poemSchema);

module.exports = Poem;
