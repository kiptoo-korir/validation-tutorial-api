const express = require("express");
const router = express.Router();

const { validateCreateUser } = require("../validators/usersValidator");

router.post("/create-user", validateCreateUser, (req, res) => {
  return res.status(200).json({ message: "Registration successful" });
});

module.exports = { router };
