const express = require("express");
const app = express();
app.set("port",5050);
const router = require("./routes/multiplication")
const games = require("./routes/game")
const db = require("./data/databaseconnection")
db.open();

//open database connection here

app.use("/games",games)
app.use("/api",router)

const server = app.listen(app.get("port"),function(){
    console.log("Running on port ",server.address().port);
});
