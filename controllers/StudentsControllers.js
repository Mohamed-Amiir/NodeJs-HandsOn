const validator = require("../util/studentValidator");
const students = [
  { name: "Mohamed", dep: "SC", id: 1 },
  { name: "Ahmed", dep: "SC", id: 2 },
  { name: "Mazen", dep: "SC", id: 3 },
  { name: "Fawzy", dep: "SC", id: 4 },
  { name: "Fathy", dep: "IS", id: 5 },
  { name: "Yasser", dep: "SC", id: 7 },
  { name: "Nillo", dep: "CS", id: 8 },
  { name: "Turkey", dep: "CS", id: 9 },
  { name: "Zien", dep: "IS", id: 10 },
  { name: "zayan", dep: "IS", id: 11 },
];
const getAllStudents = (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.json(students);
  //   res.render("students.ejs", { std: students });
};
const getStudentByID = (req, res) => {
  console.log("requist resieved....");
  let id = req.params.id;
  const std = students.find((val, idx, arr) => {
    return val.id == id;
  });
  if (std) res.json(std);
  else res.send("NOT Found !");
};
const createNewStudent = (req, res) => {
  let valid = validator(req.body);
  if (valid) {
    req.body.id = students.length + 1;
    students.push(req.body);
    res.json(req.body);
  } else {
    res.status(403).send("forbidden command");
  }
};
const deleteStudent = (req, res) => {
  let idx = students.findIndex((val) => {
    return val.id == req.params.id;
  });
  if (idx != -1) {
    res.send(`Student ${students[idx].name} is deleted`);
    students.splice(idx, 1);
  } else {
    res.send("Student does NOT found");
  }
};
const updateStudent = (req, res) => {
  let idx = students.findIndex((val) => {
    return val.id == req.params.id;
  });
  if (idx != -1) {
    for (i in req.body) {
      students[idx][i] = req.body[i];
    }
    res.send("Student data updated successfully");
    res.json(students[idx]);
  } else {
    res.send("Student NOT found");
  }
};

module.exports = {
  getAllStudents,
  getStudentByID,
  createNewStudent,
  deleteStudent,
  updateStudent,
};
