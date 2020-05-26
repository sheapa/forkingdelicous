const mongoose = require("mongoose");
const db = require("../models");
require('dotenv').config();

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||"mongodb://localhost/forkingDelicous"
);
// ||"mongodb://localhost/forkingDelicous"
// const dbPath =
// "mongodb://localhost/forkingDelicous";
// mongoose.connect(dbPath, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });
// const db = mongoose.connection;
// db.on("error", () => {
//   console.log("> error occurred from the database");
// });
// db.once("open", () => {
//   console.log("> successfully opened the database");
// });
// module.exports = mongoose;

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
