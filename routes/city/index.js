const express = require("express");
const router = express.Router();
const create = require("./create");
const list = require("./list");
const listId = require("./getById");
const update = require("./update");
const deleteRoute = require("./delete");
const routeMiddleware = require("../../middlewares/route");
const validateMiddleware = require("../../middlewares/validation");

router.post("/", validateMiddleware({bodySchema: create.bodySchema}), routeMiddleware(create.route));
router.delete("/:id", validateMiddleware({paramsSchema: deleteRoute.paramsSchema}),routeMiddleware(deleteRoute.route));
router.get("/", routeMiddleware(list));
router.get("/:id", routeMiddleware(listId));
router.patch("/:id", validateMiddleware({bodySchema: update.bodySchema, paramsSchema: update.paramsSchema}), routeMiddleware(update.route));

module.exports = router;
