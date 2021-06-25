const mongoose = require("mongoose")
const Game = mongoose.model("Game");
module.exports.getAllGames = function(req,res){
    Game.find().exec(function(err,data){
        res.status(200).json(data)
    })
}

module.exports.getOneGame = function(req,res){
    if(req.params && req.params.id){
        const id = req.params.id;
        Game.findById(id).exec(function(err,data){
            res.status(200).json(data)
        })
    }
    
}