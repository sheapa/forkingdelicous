const router = require("express").Router();
const forkingRoutes = require("./forkingAPI");

// Book routes
router.use("/forkingAPI", forkingRoutes);

module.exports = router;
