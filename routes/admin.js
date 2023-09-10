const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const config = require("config");
const User = require("../models/userModel");
const auth = require("../middlewares/AuthorizationMW");
// update admins
router.put("/:id", auth, (req, res) => {
  User.findByIdAndUpdate(
    { _id: req.params.id },
    { isAdmin: true },
    function (err, data) {
      if (!err) {
        if (data) {
          res.status(200).send(`User ${data.name} Role is set to admin.`);
          console.log(`User ${data.name} Role is set to admin.`);
        } else res.status(400).send("User Not Found !!");
      } else res.status(500).send("Internal server error..");
    }
  );
});

module.exports = router;
