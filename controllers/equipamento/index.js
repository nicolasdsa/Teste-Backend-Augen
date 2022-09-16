const express = require("express");
const router = express.Router();
const create = require("./create");
const list = require("./list");
const listId = require("./listId");
const update = require("./update");
const Delete = require("./delete");
const routeMiddleware = require("../../middlewares/route");

router.post("/", routeMiddleware(create));
router.get("/", routeMiddleware(list));
router.get("/:id", routeMiddleware(listId));
router.delete("/:id", routeMiddleware(Delete));
router.patch("/:id", routeMiddleware(update));

module.exports = router;
