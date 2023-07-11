const express = require("express");
const {
  getAllUsers,
  getSingleUsers,
  getNewUser,
  updateUser,
  deleteUser,
} = require("../controllers/user.controller");
const router = express.Router();

router.get("/users", getAllUsers);

router.get("/users/:id", getSingleUsers);

router.post("/users", getNewUser);

router.patch("/users/:id", updateUser);

router.delete("/users/:id", deleteUser);

module.exports = router;
