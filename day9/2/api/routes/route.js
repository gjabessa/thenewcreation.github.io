const express = require("express");
const router = express.Router();
const user = require("../controller/user");
const destination = require("../controller/destination");
//User route

router.route("/users")
.get(user.getAllUsers)
.post(user.createUser)

router.route("/users/:id")
.get(user.getOneUser)
.put(user.fullUpdateUser)
.patch(user.partialUpdate)
.delete(user.deleteUser)

// destination routes

router.route("/users/:id/destination")
.get(destination.getDestination)
.post(destination.addDestination)
.put(destination.fullUpdateDestination)
.delete(destination.deleteDestination)

module.exports = router;