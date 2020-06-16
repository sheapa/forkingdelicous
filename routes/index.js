const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const multer = require("../middlewares/multer/multerController");
const jwt = require("jsonwebtoken");
const db = require("../models");
const User = require("../models/user");
// const {check, validationResult} = require("express-validator/check");

// Appears to fix this error. Requires more investigation
// Server Error: (node:25824) MaxListenersExceededWarning: Possible EventEmitter memory leak detected. 11 exit listeners added to [Bus].
require('events').EventEmitter.defaultMaxListeners = Infinity;

// Login verification header for AXIOS Requests.
const auth = require("../middlewares/authorization/auth.js");

// Input validation
const validateRegisterInput = require("../middlewares/validation/register");
const validateLoginInput = require("../middlewares/validation/login");

// Test Route :)
router.get("/test", (req, res) => res.json({ msg: "Users works" }));

// Registration API route. 
router.post("/api/register", (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);
  console.log(req.body);
  
  // check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  
  // check email against db. will not allow multiple users to be assigned to single email.
  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      errors.email = "Email already exists";
      return res.status(400).json(errors);
    } else {
      // *** Insert Multer here??? ***
      // const avatar = gravatar.url(req.body.email, { 
        //   s: "200",
        //   r: "pg",
        //   d: "mm",
        // });
        const newUser = new User({
          userName: req.body.userName,
          email: req.body.email,
          // avatar: avatar,
           password: req.body.password,
      });
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
          .save()
          .then((user) => res.json(user))
          .catch((err) => console.log(err));
        });
      });
    }
  });
});

// @route   POST api/users/login
// @desc    Login user
// @access  Public
router.post("/api/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);
  console.log(req.body);

  // check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  // find user by email
  User.findOne({ email }).then((user) => {
    // check for user
    if (!user) {
      errors.email = "Invalid Credentials";
      res.status(404).json(errors);
    }
    // check password
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        const payload = { user: { id: user.id } };
        jwt.sign(
          payload,
          "secret",
          { expiresIn: 3600 },
          (err, token) => {
            res.json({ token: token });
          }
        );
      } else {
        errors.password = "Invalid Credentials";
        return res.status(400).json(errors);
      }
    });
  });
});

// Upload single avatar file
// Note that the name of the file field should be the same as the myFile argument passed to the upload.single function.
router.post(
  "/api/uploadfile",
  multer.avatarUpload.single("myImage"),
  (req, res, next) => {
    const file = req.file;
    if (!file) {
      const error = new Error("Please upload a file");
      error.httpStatusCode = 400;
      return next(error);
    }
    res.send(file);
  }
);

// Upload multiple recipe images- currently set to max 6 images
// Note that the name of the file field should be the same as the myFile argument passed to the upload.single function.
router.post(
  "/api/uploadRecipeImage",
  multer.recipeUpload.single("recipeImage"),
  (req, res, next) => {
    const file = req.file;
    if (!files) {
      const error = new Error("Please upload a file");
      error.httpStatusCode = 400;
      return next(error);
    }
    res.send(file);
  }
);


// post route to put the ingredients elements in their schema
router.post("/api/ingredients", (req, res) => {
  const { name, quantity, unit } = req.body;

  db.Ingredients.create(
    {
      name: name,
      quantity: quantity,
      unit: unit,
    },
    function (err, response) {
      console.log(response);
      res.send(response);
    }
  );
});

router.post("/api/recipeCreate", (req, res) => {
  const {
    title,
    description,
    ingredients,
    instruction,
    tips,
    yeild,
    categories,
    activeTime,
    inActiveTime,
    addons,
    forkedFrom,
    images,
    pubDate,
    author,
  } = req.body;

  db.Recipe.create(
    {
      title: title,
      description: description,
      ingredients: ingredients,
      instruction: instruction,
      tips: tips,
      yeild: yeild,
      categories: categories,
      feedback: "",
      activeTime: activeTime,
      inActiveTime: inActiveTime,
      addons: addons,
      forkedFrom: forkedFrom,
      images: images,
      pubDate: pubDate,
      likes: 0,
      saves: 0,
      forks: 0,
      author: author,
    },
    function (response) {
      res.send(response);
    }
  );
});

// API Routes
// router.use("/api", apiRoutes);

module.exports = router;