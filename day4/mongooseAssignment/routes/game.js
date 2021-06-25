const express = require("express");
const game = require("../controller/game");
const router = express.Router();

router.get("/",game.getAllGames)
router.get("/oneGame/:id",game.getOneGame)

module.exports = router;