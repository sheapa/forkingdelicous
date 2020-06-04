const express = require("express");
const passport = require("../middlewares/passport");
const auth = require("../middlewares/passport/auth"); // Will be used to protect routes. 
const router = express.Router();
const db = require("../models");

// *** TO DO add additional userdata to create & login request.

// New User
router.post("/api/create", (req,res) => {
  const {username, password} = req.body;
  
  db.User.create({username: username, password: password}, function(err, user) {
    if (err) {
      console.error(err);
      // (http) 409 Conflict Duplicate resource // (MongoDB) 11000 Wrong Syntax
      if (err.name === "MongoError" || err.code === 11000) {
        res.status(409).json({err: "Username or Email already in use"})
      } else {
        // Not Found
        res.status(404).json(err);
      }
    } else {
     // 307 Temporary redirect to login
      res.redirect(307, "/user");
    }
  })
})


// login route
router.post("/api/login", (req, res, next) => {
  console.log(req.body)
  // Uses Passport Local Srategy
  passport.authenticate("local", function(err, user, info) {
    if (err) {return next(err);}
    if (!user) {return res.status(422).json({msg: "Invalid login"})}
    req.logIn(user, function(err) {
      if (err) {return next(err);}
      //Save session before redirecting.
      req.session.save(() => res.json({_id: user._id, username: user.username}))
    });
  })(req, res, next);
})


  
module.exports = router;
