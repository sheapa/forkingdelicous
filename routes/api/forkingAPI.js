const router = require("express").Router();
const forkingController = require("../../controllers/forkingController");

// Matches with "/api/forkingRoutes"
// router.route("/").get(forkingController.findAll).post(forkingController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(forkingController.findById)
  .put(forkingController.update)
  .delete(forkingController.remove);

module.exports = router;