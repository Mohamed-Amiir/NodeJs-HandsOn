const express = require("express");
const router = express.Router();
const User = require("../models/userModel");
const validator = require("../middlewares/AuthValidatorMW");
const bcrypt = require("bcrypt");

router.post("/", validator, async (req, res) => {
  //check email
  let user = await User.findOne({ email: req.body.email }).exec();
  if (!user) return res.status(400).send("Invalid email or password !");
  //check password
  let validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword)
    return res.status(400).send("Invalid email or password !");
  //send res
  res.status(200).send("Successfully logged in.");
});

module.exports = router;
