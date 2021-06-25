const express = require("express");
const app = express();
require("./data/db"); //always import before any routes
require("./model/student");
require("./model/course");
app.set("port",5050);

const students = require("./routes/student")
const course = require("./routes/courses")
app.use("/students",students)

app.use("/course",course)

const server = app.listen(app.get("port"),function(){
    console.log("Running on port ",server.address().port);
});
