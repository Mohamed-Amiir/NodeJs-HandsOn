const User = require("../models/userModel");
const bcrypt = require("bcrypt");

/*let registration = (req, res) => {
  // Generate a salt with 10 rounds
  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      console.error("Error generating salt:", err);
      return res.status(500).send("Error during registration");
    }

    // Hash the password using the generated salt
    bcrypt.hash(req.body.password, salt, (err, hashedPassword) => {
      if (err) {
        console.error("Error hashing password:", err);
        return res.status(500).send("Error during registration");
      }

      // Create a new user with the hashed password
      let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
      });

      newUser
        .save()
        .then(() => {
          res.send(newUser);
          console.log("User Added Successfully.");
        })
        .catch((err) => {
          for (let e in err.errors) {
            console.log(err.errors[e].message);
          }
          res.status(400).send("Error during registration");
        });
    });
  });
};*/

/*let std = new Student({
    name: req.body.name,
    dep: req.body.dep,
    id: req.body.id,
  });
  std
    .save()
    .then(() => {
      res.send(std);
      console.log("Student Added Successfully.");
    })
    .catch((err) => {
      for (let e in err.errors) {
        console.log(err.errors[e].message);
      }
    });*/

let registration = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email }).exec();
    if (user) {
      return res.status(400).send("User Already registered !");
    } else {
      let salt = await bcrypt.genSalt(10);
      let hashedPassword = await bcrypt.hash(req.body.password, salt);
      let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
      });
      await newUser.save();
      console.log("User Added Successfully.");
      res.status(200).send("User Registration is done successfully.");
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  registration,
};
