const express = require("express");
const router = express.Router();
const validator = require("../util/studentValidator");
const studentController = require("../controllers/StudentsControllers");


//Request all students
router.get("/", studentController.getAllStudents);

//parameter middleware
router.param("id", (req, res, next, val) => {
  if (Number(val)) {
    req.id = val;
    next();
  } else {
    res.send("Invalid ID");
  }
});

//Request student by ID
router.get("/:id", studentController.getStudentByID);

//create new student
router.post("/", studentController.createNewStudent);

//delete student
router.delete("/:id", studentController.deleteStudent);

//Update student data
router.put("/:id", studentController.updateStudent);

module.exports = router;
