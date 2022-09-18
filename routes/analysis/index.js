const express = require("express");
const router = express.Router();
const create = require("./create");
const deleteRoute = require("./delete");
const list = require("./list");
const listId = require("./getById");
const validateMiddleware = require("../../middlewares/validation");
const routeMiddleware = require("../../middlewares/route");

router.post("/", validateMiddleware({bodySchema: create.bodySchema}), routeMiddleware(create.route));
router.delete("/:id", validateMiddleware({paramsSchema: deleteRoute.paramsSchema}), routeMiddleware(deleteRoute.route));

router.get("/", routeMiddleware(list));
router.get("/:id", routeMiddleware(listId));

/*
const update = require("./update");
router.patch("/:id", routeMiddleware(update));*/

module.exports = router;
