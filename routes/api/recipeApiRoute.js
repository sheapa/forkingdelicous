const router = require("express").Router();
const recipeController = require("../../controllers/forkingController");

// router.route("/recipeCreate") this may be ther correct path???
router.route("/")
.post(recipeController.createRecipe)

module.exports = router