const router = require("express").Router();
const {
  getUsers,
  getSingleUser,
  createUser,
} = require("../../controllers/userController");
