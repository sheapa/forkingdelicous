const mongoose = require("mongoose");
const db = require("../models");
require('dotenv').config();

// This file empties the user collection and inserts the users below.

mongoose.connect(
  process.env.MONGODB_URI ||"mongodb://localhost/forkingDelicous"
);

const userSeed = [
  {
    name: "gordonRamsey",
    email: "gr@sample.com",
    recipies: "[beef wellington, spotted dick, crumpets]"
  },
  {
    name: "guy feirrie",
    email: "gf@demo.com",
    recipies: "null"
  }
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
