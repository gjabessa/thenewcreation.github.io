const mongoose=require("mongoose");
const destinationSchema = require("./destination");

const userSchema=new mongoose.Schema({
    name: String,
    destinations: [destinationSchema],
    visitedDestinations: [destinationSchema],
    budget: Number,
    password: String,
    username: {
        type: String,
        required: true
    }
});

mongoose.model("User",userSchema,"users");
module.exports = userSchema

