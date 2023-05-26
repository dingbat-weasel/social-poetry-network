const router = require("express").Router();
const {
  getPoems,
  getSinglePoem,
  createPoem,
  updatePoem,
  deletePoem,
  createReaction,
  deleteReaction,
} = require("../../controllers/poemController");

router.route("/").get(getPoems).post(createPoem);

router.route("/:poemId").get(getSinglePoem).put(updatePoem).delete(deletePoem);

router.route("/:poemId/reactions").post(createReaction);

router.route("/:poemId/reactions/:reactionId").delete(deleteReaction);

module.exports = router;
