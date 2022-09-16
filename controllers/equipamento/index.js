const express = require("express");
const router = express.Router();
const create = require("./create");
const list = require("./list");
const update = require("./update");
const Delete = require("./delete");

router.post("/", routeMiddleware(create));
router.get("/", routeMiddleware(list));
router.delete("/:id", routeMiddleware(Delete));
router.patch("/:id", routeMiddleware(update));

module.exports = router;
