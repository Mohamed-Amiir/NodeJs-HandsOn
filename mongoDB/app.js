//1- import mongoose
const { name } = require("ejs");
const mongoose = require("mongoose");

//2- connect to db
mongoose
  .connect("mongodb://localhost:27017/faculty")
  .then(() => {
    console.log("Database Connected...");
  })
  .catch((err) => {
    console.log(err);
  });

//3- create schema
const studentSchema = new mongoose.Schema({
  name: String,
  dep: {
    type: String,
    required: true,
    // enum: ["CS", "SC", "IS", "Csys"],
    validate: {
      validator: function (v) {
        return /^[CSI][Ss]$/.test(v);
      },
    },
  },
  id: {
    type: Number,
    unique: true,
    required: true,
    min: 30,
    max: 3000,
  },
});

//4- create model
const Student = mongoose.model("students", studentSchema);

//CRUD operations
// Student.find()
//   .select({ name: 1, dep: 1 })
//   .then((data) => {
//     console.log(data);
//   });{

//Updating does NOT work here
// Student.updateOne({ name: "Fayza" }, { $set: { id: 88 } });

async function getStudents() {
  let result = await Student.find()
    .sort({ name: 1 })
    .select({ name: 1, dep: 1, id: 1 });
  console.log(result);
}
function addNewStudent(name, dep, id) {
  let std = new Student({ name: name, dep: dep, id: id });
  std
    .save()
    .then(() => {
      console.log("Saved Successfully");
    })
    .catch((err) => {
      for (let e in err.errors) {
        console.log(err.errors[e].message);
      }
    });
}
addNewStudent("Michel", "Csfvys", 15);
