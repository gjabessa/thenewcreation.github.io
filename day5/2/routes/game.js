const express = require("express");
const game = require("../controller/game");
const publisher = require("../controller/publisher");
const router = express.Router();

router.route("/")
.get(game.getAllGames)
.post(game.createGame)

router.route("/:id")
.get(game.getOneGame)
.put(game.fullUpdateGame)
.patch(game.partialUpdate)
.delete(game.deleteGame)

// publisher routes
router.route("/:id/publisher")
.get(publisher.getPublisher)
.post(publisher.addPublisher)
.put(publisher.fullUpdatePublisher)
.delete(publisher.deletePublisher)

module.exports = router;