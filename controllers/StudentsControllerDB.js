const Student = require("../models/studentModelDB");
const { deleteStudent } = require("./StudentsControllers");

//addNewStudent
const addNewStudent = (req, res) => {
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
        console.log(err.errors[e].message());
      }
    });
  //   Student.insertMany({ name: req.name, dep: req.dep, id: req.id })
  //     .then(() => {
  //       console.log("Student Added Successfully.");
  //     })
  //     .catch((err) => {
  //       for (let e in err.errors) {
  //         console.log(err.errors[e].message());
  //       }
  //     });
};

//getStudentByID
const getStudentByID = async (req, res) => {
  let std = await Student.findById(req.params.id);
  if (!std) return res.status(404).send("Student NOT found !");
  else res.send(std);
};

//getAllStudents
const getAllStudents = async (req, res) => {
  let std = await Student.find().select({ name: 1, dep: 1 }).sort({ name: 1 });
  res.send(std);
};

//updateStudent
const updateStudent = async (req, res) => {
  let std = await Student.findOneAndUpdate(req.params.id, req.body, {
    returnOriginal: false,
  });
  if (!std) return res.status(404).send("Student NOT found !");
  else res.send(std);
};

//deleteStudent
const deleteStudent = async (req, res) => {
  let std = await Student.findByIdAndRemove(req.params.id);
  if (!std) return res.status(404).send("Student NOT found !");
  else res.send(std);
};

module.exports(
  addNewStudent,
  getStudentByID,
  getAllStudents,
  updateStudent,
  deleteStudent
);
