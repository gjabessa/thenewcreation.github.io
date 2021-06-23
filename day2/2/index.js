const express = require("express");
const app = express();
app.set("port",5050);
const path = require("path");

app.use(express.static(path.join(__dirname,"public")));
app.use(express.static("css"))

const server = app.listen(app.get("port"),function(){
    console.log("Running on port ",server.address().port);
});

