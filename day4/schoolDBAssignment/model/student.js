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

const studentSchema=new mongoose.Schema({

    name:{
        type:String,
        require:true
    },
    grade:Number,
    GPA:Number,
    entryDate:String,
    
    courses:[courseSchema]

});

mongoose.model("Student",studentSchema,"Students");