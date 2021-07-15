const express = require("express");
const router = express.Router();
const user = require("../controller/user");
const destination = require("../controller/destination");
const authController = require("../controller/auth")
//User route

router.route("/users")
.get(user.getAllUsers)
.post(authController.register)

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
.delete(destination.deleteDestination) //deletes all destination

router.route("/users/:id/destination/:destinationId")
.delete(destination.deleteOneDestination)

router.route("/users/login")
    .post(authController.login);

router.route("/userSearch")
.get(user.search);

module.exports = router;