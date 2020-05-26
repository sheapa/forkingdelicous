const router = require("express").Router();
const forkingController = require("../../controllers/forkingController");

// Matches with "/api/forkingRoutes"
// router.route("/").get(forkingController.findAll).post(forkingController.create);

// Matches with "/api/books/:id"
router.route("/:id")
    .get(forkingController.findById)
    .put(forkingController.update)
    .delete(forkingController.remove)
  
    .get(forkingController.findByRecipeId)
    .put(forkingController.updateRecipe)
    .delete(forkingController.removeRecipe)

router.route("/")
    .post(forkingController.create)

    .get(forkingController.findAllRecipes)
    .post(forkingController.createRecipe)

module.exports = router;