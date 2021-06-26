const express = require("express");
const game = require("../controller/game");
const router = express.Router();

router.route("/")
.get(game.getAllGames)
.post(game.createGame)

router.route("/:id")
.get(game.getOneGame)
.put(game.fullUpdateGame)
.patch(game.partialUpdate)
.delete(game.deleteGame)



module.exports = router;