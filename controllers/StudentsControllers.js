// const validator = require("../util/studentValidator");
// const Student = require("../models/studentModel");

// const getAllStudents = (req, res) => {
//   res.set("Access-Control-Allow-Origin", "*");
//   // res.json(Student.fetchAllStudents());
//   Student.fetchAllStudents((obj) => {
//     res.json(obj);
//     // res.render("students.ejs", {
//     //   std: obj,
//     // });
//   });
// };
// const getStudentByID = (req, res) => {
//   console.log("requist resieved....");
//   let id = req.params.id;
//   const std = students.find((val, idx, arr) => {
//     return val.id == id;
//   });
//   if (std) res.json(std);
//   else res.send("NOT Found !");
// };
// const createNewStudent = (req, res) => {
//   let valid = validator(req.body);
//   if (valid) {
//     let std = new Student(req.body.name, req.body.dep);
//     std.saveStudent();
//     // req.body.id = students.length + 1;
//     // students.push(req.body);
//     res.json(req.body);
//   } else {
//     res.status(403).send("forbidden command");
//   }
// };
// const deleteStudent = (req, res) => {
//   let idx = students.findIndex((val) => {
//     return val.id == req.params.id;
//   });
//   if (idx != -1) {
//     res.send(`Student ${students[idx].name} is deleted`);
//     students.splice(idx, 1);
//   } else {
//     res.send("Student does NOT found");
//   }
// };
// const updateStudent = (req, res) => {
//   let idx = students.findIndex((val) => {
//     return val.id == req.params.id;
//   });
//   if (idx != -1) {
//     for (i in req.body) {
//       students[idx][i] = req.body[i];
//     }
//     res.send("Student data updated successfully");
//     res.json(students[idx]);
//   } else {
//     res.send("Student NOT found");
//   }
// };

// module.exports = {
//   getAllStudents,
//   getStudentByID,
//   createNewStudent,
//   deleteStudent,
//   updateStudent,
// };
