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

const createUser = async (req, res) => {
  const { email, name, age, phoneNumber, isActive  } = req.body;
  try {
    const user = await User.create({ email, name, age, phoneNumber, isActive });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).send({ message: "Oops...Something went wrong" });
    console.log(error)
  }
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
