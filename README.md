# Social Poetry Network

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Link to live demo: [Demo](https://drive.google.com/file/d/14lVYUgJK1ovKcorbRDB09WgECZWBbjQV/view)

## Table of Contents

- [Description](#description)
- [Usage](#usage)
- [Installation](#installation)
- [Dependencies](#dependencies)
- [Questions](#questions)
- [License](#license)

## Description

This project outlines a simple social network back-end. It really helped me to solidify my understanding of NoSQL and Mongo/mongoose in particular. The user can ping the network routes to receive data on the users of the network, the poems they've written, and their feedback on these poems. This was primarily to work through some basic mongoose code, but it has the secondary benefit of potentially transcribing to my final project for my bootcamp class which is essentially a poetry social network made in React.

## Usage

To use the program you have several options. I prefer to run the file locally using the command 'npm start', then monitor the routes using Insomnia. There are several routes to explore. You can see me run through these at the live-demo link above.

GET ALL USERS

- api/users

GET SPECIFIC USER

- api/users/:userid

GET ALL POEMS

- api/poems

GET SPECIFIC POEM

- api/poems/:poemid

POST A USER

- api/users

UPDATE A USER

- api/users/:userid

POST A POEM

- api/poems/

UPDATE A POEM

- api/poems/:poemid

POST A FRIEND

- api/users/:userid/friends

POST A REACTION TO A POEM

- api/poems/:poemid/reactions

DELETE A REACTION

- api/poems/:poemid/reactions/:reactionid

DELETE A FRIEND

- api/users/:userid/friends/:friendid

DELETE A POEM

- api/poems/:poemid

DELETE A USER

- api/user/:userid

## Installation

Installing is relatively easy. Simply open the directory in your terminal, run 'npm install'. Run 'npm run seed' to seed the database. This will seed a load of random poems and users. Once it is done you can run 'npm start' to launch the server.

## Dependencies

This program uses Express and Mongoose.

## Questions

For questions/concerns you can reach me on [GitHub](https://github.com/dingbat-weasel) or by Email at isaacrperk@gmail.com.

This README was generated using [WRITEME](https://github.com/dingbat-weasel/WRITEME).

---

## License

MIT License
