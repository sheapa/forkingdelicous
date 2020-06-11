// *** May be used later. I had to disable the MVC to simplify the code for creating sessions and implementing authentication. 

const path = require("path");
const router = require("express").Router();
const recipeApiRoutes = require("./recipeApiRoute");


// Book routes
router.use("/recipe", recipeApiRoutes);

// User Routes

// For anything else, render the html page
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
