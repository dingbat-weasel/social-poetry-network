const router = require("express").Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  createFriend,
  deleteFriend,
} = require("../../controllers/userController");

router.route("/").get(getUsers).post(createUser);

router.route("/:userId").get(getSingleUser).put(updateUser).delete(deleteUser);

router.route("/:userId/friends").post(createFriend);

router.route("/:userId/friends/:friendId").delete(deleteFriend);

// These routes use functions that must be written and brought in from ./controllers
// After this poemRoutes must be made with similar required functions (and reaction routes)
