const express = require("express");
const student = require("../controller/student");
const router = express.Router();

router.get("/",student.getAllStudents)
router.get("/:id/courses",student.getCoursesForStudent)
router.get("/:id/courses/:cid",student.getCourseByIdInStudent)
router.get("/addCourseToStudent/:id",student.addCourseToStudent)

router.route("/:id")
.get(student.getOneStudent)
.put(student.fullUpdateStudent)
.delete(student.deleteStudent)

module.exports = router;