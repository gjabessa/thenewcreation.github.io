const mongoose=require("mongoose");


const courseSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    creditHour:{
        type: Number
    }
});

mongoose.model("Course",courseSchema,"courses");
module.exports = courseSchema

