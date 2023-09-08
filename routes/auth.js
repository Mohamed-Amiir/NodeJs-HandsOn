const express = require("express");
const router = express.Router();
const User = require("../models/userModel");
const validator = require("../middlewares/AuthValidatorMW");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("config");
router.post("/", validator, async (req, res) => {
  try {
    //check email
    let user = await User.findOne({ email: req.body.email }).exec();
    if (!user) return res.status(400).send("Invalid email or password !");
    //check password
    let validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword)
      return res.status(400).send("Invalid email or password !");
    // send res
    ////JSON WEB TOKEN
    if (!config.get("jwtsec"))
      return res
        .status(500)
        .send("Request can not be fullfilled ... token is not defined !!");
    const token = user.genAuthToken();
    res.header("x-auth-token", token);
    ///
    res.status(200).send("logged-in successfully");
  } catch (err) {
    for (let e in err.errors) {
      console.log(err.errors[e].message);
      res.status(400).send("Bad Request !!");
    }
  }
});

module.exports = router;
