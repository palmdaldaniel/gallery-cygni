const express = require("express");

const router = express.Router();

const controler = require("./controler");

// User routes setup goes underneath here...
router.get("/search", controler.getDataByInput);

module.exports = router;
