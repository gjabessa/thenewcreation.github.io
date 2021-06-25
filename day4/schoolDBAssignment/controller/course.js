const mongoose = require("mongoose")
const Course = mongoose.model("Course");

module.exports.addCourse = function(req,res){
    let course = new Course({name:"DNA",creditHour:23});
    course.save(function(err){
        if(err) console.log("error")
    });
    res.status(200).json(course)
}