const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const routes = require("./routes");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3001;

// *** Disabled for now. Seeders were pushing to live db. ***
// require('dotenv').config();

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/forkingDelicous", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
})

// store db connection in variable
const mongoose_db = mongoose.connection;

// *** Serve up static assets (usually on heroku) *** May be required for Heroku deployment
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Currently serving static assets
app.use(express.static(path.join(__dirname, "public")));
app.use("/Images", express.static("Images"))

// Define middlewares here for parsing req.body:
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// HTML & API routes.
app.use(routes);

// Verifies connection to db on desired port. 
mongoose_db.once("open", function() {
  app.listen(PORT, () => {console.log("Server Listening on Port", PORT)});
})

// Throws error on failed db connection check. 
mongoose_db.on("error", function() {
  console.error("database failed to open");
})

