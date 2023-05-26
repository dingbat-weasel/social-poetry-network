const connection = require("../config/connection");
const { User, Poem } = require("../models");
const { getRandomName, getRandomPoems } = require("./data");

connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("connected");
  await Poem.deleteMany({});
  await User.deleteMany({});

  const users = [];
  const poems = getRandomPoems(20);

  for (let i = 0; i < 20; i++) {
    const username = getRandomName();

    users.push({
      username,
      email: `${i}@email.com`,
      poems: poems[i],
    });
  }

  await User.collection.insertMany(users);
  await Poem.collection.insertMany(poems);

  // loop through the saved videos, for each video we need to generate a video response and insert the video responses
  console.table(users);
  console.table(poems);
  console.info("Seeding complete! 🌱");
  process.exit(0);
});
