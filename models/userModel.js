//1- require mongoose
const mongoose = require("mongoose");
const valid = require("validator");
const config = require("config");
//2- connect to db
// mongoose
//   .connect("mongodb://localhost:27017/faculty", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useFindAndModify: true,
//   })
//   .then(() => {
//     console.log("Database Connected...");
//   })
//   .catch((err) => {
//     console.error("Error connecting to database:", err);
//   });

//3- build schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    // validate: {
    //   validator: (val) => {
    //     return valid.isEmail(val);
    //   },
    //   message: `{VALUE} is not valid email`,
    // },
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 5000,
  },
});
userSchema.method("genAuthToken",function(){
  const token = jwt.sign({ usrid: this._id }, config.get("jwtsec"));
  return token;
})
//4- CRUD operations

// userSchema.index({ email: 1 }); // Creating an index on the 'id' field
//4- create model
const USER = mongoose.model("users", userSchema);
// CRUD operations

module.exports = USER;
