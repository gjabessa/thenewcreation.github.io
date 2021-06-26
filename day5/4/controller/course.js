const mongoose = require("mongoose")
const Course = mongoose.model("Course");

//just for test data
module.exports.addCourse = function(req,res){
    let course = new Course({name:"DNA",creditHour:23});
    course.save();
    res.status(200).json(course)
}