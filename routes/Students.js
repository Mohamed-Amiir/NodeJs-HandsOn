const express = require("express");
const router = express.Router();
const validator = require("../middlewares/StudentValidatorMW");
const studentController = require("../controllers/StudentsControllerDB");
const authorization = require("../middlewares/AuthorizationMW");

// parameter middleware
router.param("id", (req, res, nxt, val) => {
  if (/^[0-9a-fA-F]{24}$/.test(val)) {
    req.id = val;
    nxt();
  } else {
    res.status(400).send("Invalid ID");
  }
});

//Request all students
router.get("/", studentController.getAllStudents);

//Request student by ID
router.get("/:id", studentController.getStudentByID);

//add new student
router.post("/", validator, authorization, studentController.addNewStudent);

//delete student
router.delete("/:id", authorization, studentController.deleteStudent);

//Update student data
router.put("/:id", authorization, studentController.updateStudent);

module.exports = router;
