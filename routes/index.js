const express = require("express");
const passport = require("../middlewares/passport");
const auth = require("../middlewares/passport/auth"); // Will be used to protect routes. 
const multer = require("../middlewares/multer/multerController");
const router = express.Router();
// const apiRoutes = require("./api");
const db = require("../models");
const recipeController = require("../Deprecated/forkingController");

// router.route("/recipeCreate") this may not be the correct path???
router.route("/api/recipeCreate")
.post(recipeController.createRecipe)

module.exports = router
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
});

// Upload single avatar file
// Note that the name of the file field should be the same as the myFile argument passed to the upload.single function.
router.post('/api/uploadfile', multer.avatarUpload.single('myImage'), (req, res, next) => {
  const file = req.file
  if (!file) {
    const error = new Error('Please upload a file')
    error.httpStatusCode = 400
    return next(error)
  }
    res.send(file)
  
});

// Upload multiple recipe images- currently set to max 6 images
// Note that the name of the file field should be the same as the myFile argument passed to the upload.single function.
router.post('/api/uploadRecipeImages', multer.recipeUpload.array('recipeImages', 6), (req, res, next) => {
  const files = req.files
  if (!files) {
    const error = new Error('Please upload a file')
    error.httpStatusCode = 400
    return next(error)
  }
    res.send(files)
  
});

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
});

// post route to put the ingredients elements in their schema
router.post("/api/ingredients", (req,res) => {
  const {name, quantity, unit} = req.body;
  
  db.Ingredients.create({ 
    name: name, 
    quantity: quantity, 
    unit: unit 
  })
});

router.post("/api/recipeCreate", (req,res) => {
  const {title, description, instruction, tips, yeild, categories, activeTime, inActiveTime, addons, forkedFrom, images, pubDate, author} = req.body;
  
  db.Recipe.create({ 
    title: title,
    description: description,
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
  })
});


// API Routes
// router.use("/api", apiRoutes);
  
module.exports = router;
