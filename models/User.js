const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trimmed: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      match: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
    },
    poems: [
      {
        type: Schema.Types.ObjectId,
        ref: "poem",
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "user",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

userSchema.virtual("friendCount").get(function () {
  return `${this.username} has ${this.friends.length} friends.`;
});

const User = model("user", userSchema);

module.exports = User;
