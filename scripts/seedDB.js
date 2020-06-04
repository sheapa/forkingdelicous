const mongoose = require("mongoose");
const db = require("../models");
// require('dotenv').config();

// This file empties the user collection and inserts the users below.

// Had to pass through encryption on way in. Would not work otherwise.

// Connects to databse for inserting seed object.
mongoose.connect(
  process.env.MONGODB_URI ||"mongodb://localhost/forkingDelicous"
  , {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
  });

  const mongoose_db = mongoose.connection;

  mongoose_db.on("error", function(err) {
    console.log(err);
  })

  
mongoose_db.once("open",function() {
  db.User.create([
  {
    firstName: "gordon",
    lastName: "ramsey",
    email: "gr@sample.com",
    username: "gram",
    password: "lol",
    recipies: [["beef wellington, spotted dick, crumpets"]], // not working
    avatar:"null"
  },
  {
    firstName: "guy",
    lastName: "fieri",
    email: "dumb@fat.com",
    username: "frostop",
    password: "pass",
    recipies: "[[null]]", // not working
    avatar:"null"
  }
  ], function(err, user) { //(docs)
    if (err) {
      throw err;
    } else {
      console.log(user); //(docs)
    }
  })
})

return;
