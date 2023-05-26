const names = [
  "Aaran",
  "Aaren",
  "Aarez",
  "Aarman",
  "Aaron",
  "Aaron-James",
  "Aarron",
  "Aaryan",
  "Aaryn",
  "Aayan",
  "Aazaan",
  "Abaan",
  "Abbas",
  "Abdallah",
  "Abdalroof",
  "Abdihakim",
  "Abdirahman",
  "Abdisalam",
  "Abdul",
  "Abdul-Aziz",
  "Abdulbasir",
  "Abdulkadir",
  "Abdulkarem",
  "Ze",
  "Zechariah",
  "Zeek",
  "Zeeshan",
  "Zeid",
  "Zein",
  "Zen",
  "Zendel",
  "Zenith",
  "Zennon",
  "Zeph",
  "Zerah",
  "Zhen",
  "Zhi",
  "Zhong",
  "Zhuo",
  "Zi",
  "Zidane",
  "Zijie",
  "Zinedine",
  "Zion",
  "Zishan",
  "Ziya",
  "Ziyaan",
  "Zohaib",
  "Zohair",
  "Zoubaeir",
  "Zubair",
  "Zubayr",
  "Zuriel",
  ``,
];

const poems = [
  "More time is spent at the window.",
  "You go along from day to day with summer all around you.",
  "Stores tell all about people who live in the area.",
  "Others have already written what I would like to write.",
  "Today the sky is so blue it burns.",
  "In the country one can almost hear the silence.",
  "The four seasons of the year permit us to enjoy things.",
  "Hello world",
  "Smear each side of a pork chop with mustard and dredge in flour",
  "A new program is being introduced by our government.",
  "I am a very cold person here.",
];

const possibleReactions = [
  "I disagree!",
  "I tried to read it, here were the results",
  "This was awesome",
  "Thank you for the great content",
  "Please check out my video response",
  "Like and subscribe to my channel please",
  "Reply: Why must we be so intent on destroying everything we touch?",
];

const users = [];

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random full name
const getRandomName = () =>
  `${getRandomArrItem(names)}${getRandomArrItem(names)}`;

// Function to generate random poems that we can add to the database. Includes reactions.
const getRandomPoems = (int) => {
  let results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      poemText: getRandomArrItem(poems),
      reactions: [...getReactions(3)],
    });
  }
  return results;
};

// Create the responses that will be added to each video
const getReactions = (int) => {
  if (int === 1) {
    return getRandomArrItem(possibleReactions);
  }
  let results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      responseBody: getRandomArrItem(possibleReactions),
      username: getRandomName(),
    });
  }
  return results;
};

// Export the functions for use in seed.js
module.exports = { getRandomName, getRandomPoems };
