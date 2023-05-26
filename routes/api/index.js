const router = require("express").Router();
const poemRoutes = require("./poemRoutes");
const userRoutes = require("./userRoutes");

router.use("/poems", poemRoutes);
router.use("/users", userRoutes);

module.exports = router;
