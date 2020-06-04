const express = require("express");
const app = express();
const path = require("path");
const session = require("express-session");
const mongoose = require("mongoose");
const MongoStore = require("connect-mongo")(session);
const routes = require("./routes");
const passport = require("./middlewares/passport");
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
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }

// Currently serving static assets
app.use(express.static(path.join(__dirname, "public")));

// Define middlewares here for parsing req.body:
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



// Create & Manage Sessions
app.use(session({
  saveUninitialized: false,
  resave: false,
  secret: "secret", 
  store: new MongoStore({mongooseConnection: mongoose_db, secret: "Secret"}), 
  cookie: {
    httpOnly: true,
    secure: false,
    path: "/",
    maxAge: 14 * 24 * 60 * 60 // = 14 days. Default Unit = milliseconds
  }
}));

// Passport middlewares
app.use(passport.initialize());
app.use(passport.session());

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


// *** These may be useful later. Probably not... ***
    // Define any API routes before this runs
    // app.get("*", function(req, res) {
    //   res.sendFile(path.join(__dirname, "./client/build/index.html"));
    // });

    // // Listen on assigned port.
    // app.listen(PORT, function() {
    //   console.log(`🌎 ==> API server now on port ${PORT}!`);
    // });
    