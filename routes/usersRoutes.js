const express = require("express");
const usersRouter = express.Router();
const {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/usersControllers");

usersRouter.route("/").get(getUsers).post(createUser);

usersRouter.route("/:id").put(updateUser).delete(deleteUser);

module.exports = usersRouter;
