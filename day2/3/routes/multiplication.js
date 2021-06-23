const express = require("express");
const { multiply } = require("../controller/multiplication");
const router = express.Router();

router.get("/:number1",multiply)

module.exports = router;