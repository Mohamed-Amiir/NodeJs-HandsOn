const express = require("express");
const router = express.Router();
const validator = require("../middlewares/UserValidatorMW");
// const User = require("../models/userModel"); //when not use controllers
const userController = require("../controllers/UserControllers");

//Registration
router.post("/", /*validator,*/ userController.registration);

module.exports = router;
