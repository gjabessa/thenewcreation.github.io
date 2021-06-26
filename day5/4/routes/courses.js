const express = require("express");
const { addCourse } = require("../controller/course");
const student = require("../controller/student");
const router = express.Router();

router.get("/addCourse",addCourse)

module.exports = router;