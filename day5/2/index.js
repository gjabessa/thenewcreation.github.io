

const express = require("express");
const app = express();

require("./data/db"); //always import before any routes
app.use(express.json({extended:false}))
app.set("port",5050);

const games = require("./routes/game")

app.use("/games",games)

const server = app.listen(app.get("port"),function(){
    console.log("Running on port ",server.address().port);
});
