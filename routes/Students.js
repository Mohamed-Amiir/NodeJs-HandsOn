const express = require("express");
const router = express.Router();
const validator = require("../util/studentValidator");
const studentController = require("../controllers/StudentsControllerDB");

//parameter middleware
router.param("id", (req, res, next, val) => {
  if (Number(val)) {
    req.id = val;
    next();
  } else {
    res.send("Invalid ID");
  }
});

//Request all students
router.get("/", studentController.getAllStudnts);

//Request student by ID
router.get("/:id", studentController.getStudentByID);

//create new student
router.post("/", studentController.addNewStudent);

//delete student
router.delete("/:id", studentController.deleteStudent);

//Update student data
router.put("/:id", studentController.updateStudent);

module.exports = router;
