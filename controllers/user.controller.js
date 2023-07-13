const userSchema = require("../models/user.model");

// GET: "api/v1/users"
const getAllUsers = async (req, res) => {
  userSchema
    .find()
    .then((users) => {
      res.status(200).send(users);
    })
    .catch((err) => {
      console.error(err);
    });
};

// GET: "api/v1/users/:id"
const getSingleUsers = async (req, res) => {
  const { id } = req.params;

  userSchema
    .findById(id)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

// POST: "api/v1/users"
const getNewUser = async (req, res) => {
  const userInfo = req.body;

  const newUser = new userSchema(userInfo);

  const userExist = await userSchema.findOne({ email: userInfo.email });

  if (userExist) {
    return res
      .status(409)
      .send({ error: true, message: "Email already exists!" });
  }

  newUser
    .save()
    .then((result) => {
      res.status(201).send(result);
    })
    .catch((err) => {
      console.error(err);
    });
};

// PATCH: "api/v1/users/:id"
const updateUser = async (req, res) => {
  const { id } = req.params;
  const userInfo = req.body;

  userSchema
    .findByIdAndUpdate(id, userInfo, { new: true })
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

// DELETE: "api/v1/users/:id"
const deleteUser = async (req, res) => {
  const { id } = req.params;

  userSchema
    .findByIdAndDelete(id)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  getAllUsers,
  getSingleUsers,
  getNewUser,
  updateUser,
  deleteUser,
};
