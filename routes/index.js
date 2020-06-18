const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const multer = require("../middlewares/multer/multerController");
const jwt = require("jsonwebtoken");
const db = require("../models");
const User = require("../models/user");
const Recipe = require('../models/recipe');
const AvatarImage = require("../models/avatar");
const RecipeImage = require("../models/recipeImage");

// Appears to fix this error. Requires more investigation
// Server Error: (node:25824) MaxListenersExceededWarning: Possible EventEmitter memory leak detected. 11 exit listeners added to [Bus].
require('events').EventEmitter.defaultMaxListeners = Infinity;

// Login verification header for AXIOS Requests.
const auth = require("../middlewares/authorization/auth");

// Input validation
const validateRegisterInput = require("../middlewares/validation/register");
const validateLoginInput = require("../middlewares/validation/login");

// Test Route :)
router.get("/test", auth, (req, res) => res.json({ msg: "Users works" }));

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
    console.log(user)
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
  multer.avatarUpload.single("avatar"),
  (req, res, next) => {
    console.log(req.body);
    const file = req.file;

    if (!file) {
      const error = new Error("Please upload a file");
      error.httpStatusCode = 400;
      return next(error);
    }
    AvatarImage.create(
      {
      imageName: req.body.imageName,
      imageData: req.file.path
      }
    ).then((result) => {
      console.log(result);
      res.status(200).json({
        success: true,
        document: result
      });
    })
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
    if (!file) {
      const error = new Error("Please upload a file");
      error.httpStatusCode = 400;
      return next(error);
    }
    RecipeImage.create(
      {
      imageName: req.body.imageName,
      imageData: req.file.path
      }
    ).then((result) => {
      console.log(result);
      res.status(200).json({
        success: true,
        document: result
      });
    })
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
 // if we want to add a value we can add the code "req.body.<property name we want> = <value that we want for that property>"
  db.Recipe.create(req.body,
    function (response) {
      // res.send(response); WHY is this SEND?
      res.json(response)
    }
  );
});


router.get("/api/recipeDisplay/:algoliaObjectId", (req, res) => {
console.log(req.params)
Recipe.findOne({_algoliaObjectID: req.params.algoliaObjectId})
.then(response => {
  res.json(response)
console.log(res.json(response))
.catch(err => res.status(422).json(err));
 })
});


//THIS WORKS BUT I CANT GET IT TO WORK WITH THE Recipe.findOne({_algoliaObjectID: req.params.algoliaObjectId}) AT THE SAMETIME
// router.get("/api/recipeDisplay/:id", (req, res) => {
// console.log(req.params)
// Recipe.findById(req.params.id)
// .then(response => {
//   res.json(response)
// console.log(res.json(response))
// .catch(err => res.status(422).json(err));
//  })
// });

  
//DO WE NEED A router.get("/api/recipeCreate")........?

// API Routes
// router.use("/api", apiRoutes);

module.exports = router;