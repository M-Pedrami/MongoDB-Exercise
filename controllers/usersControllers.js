const User = require("../models/user");

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).send({ message: "Oops...Something went wrong" });
    console.log(error);
  }
};

const createUser = (req, res) => {
  res.send({ message: "User created" });
};

const updateUser = (req, res) => {
  res.send({ message: `user with the id ${req.params.id} updated` });
};

const deleteUser = (req, res) => {
  res.send({ message: `user with the id ${req.params.id} deleted` });
};

module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
};
