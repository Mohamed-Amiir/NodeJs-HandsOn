const Student = require("../models/studentModelDB");

//addNewStudent
let addNewStudent = (req, res) => {
  let std = new Student({
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
    });
};
//getAllStudents
let getAllStudents = async (req, res) => {
  let std = await Student.find().sort({ name: 1 });
  res.send(std);
  console.log("Display all students informations....");
};
//getStudentByID
let getStudentByID = async (req, res) => {
  let std = await Student.findById(req.params.id);
  if (!std) return res.status(404).send("Student NOT found !");
  else {
    res.send(std);
    console.log(`Display ${std.name} informations....`);
  }
};
//updateStudent
let updateStudent = async (req, res) => {
  let std = await Student.findOneAndUpdate(
    { _id: req.params.id }, // Assuming 'id' is the MongoDB ObjectId
    req.body,
    { new: true, useFindAndModify: false } // Options object
  );
  if (!std) return res.status(404).send("Student NOT found !");
  else {
    res.send(std);
    console.log("Student Informations are Updated Successfully.");
  }
};
//deleteStudent
let deleteStudent = async (req, res) => {
  let std = await Student.findByIdAndDelete(req.params.id, {
    useFindAndModify: true,
  });
  if (!std) return res.status(404).send("Student NOT found !");
  else {
    res.send(`Student ${std.name} is deleted Successfully.`);
    console.log(`Student ${std.name} is deleted Successfully.`);
  }
};

module.exports = {
  addNewStudent,
  getStudentByID,
  getAllStudents,
  updateStudent,
  deleteStudent,
};
