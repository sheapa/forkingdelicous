const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3001;

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
app.use(routes);

// console.log(process.env.MONGODB_URI);
// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/forkingDelicous");
// "mongodb://<chef>:<spagettiosOfCourse2020>@ds249942.mlab.com:49942/heroku_glrl6j12";

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

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
