const getUsers = (req, res) => {
  res.send({ message: "GET users" });
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
