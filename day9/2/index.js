const express = require("express");
const app = express();

require("./api/data/db"); //always import before any routes

const path = require("path")
//import models here
require("./api/model/user")
require("./api/model/route")
require("./api/model/destination")


//import routes here 
const routes = require("./api/routes/route")



//use middlewares here
app.use(express.json({extended:false}))
app.use("/node_modules", express.static(path.join(__dirname, "node_modules")));
app.use("/api",routes)
app.use(express.static(path.join(__dirname, "public")));



app.set("port",5050);

const server = app.listen(app.get("port"),function(){
    console.log("Running on port ",server.address().port);
});
