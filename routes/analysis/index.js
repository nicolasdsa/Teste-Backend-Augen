const express = require("express");
const router = express.Router();
const create = require("./create");
const deleteRoute = require("./delete");
const update = require("./update");
const list = require("./list");
const listId = require("./getById");
const validateMiddleware = require("../../middlewares/validation");
const routeMiddleware = require("../../middlewares/route");
const authenticationMiddleware = require("../../middlewares/authentication");

router.post("/", authenticationMiddleware, validateMiddleware({bodySchema: create.bodySchema}), routeMiddleware(create.route));
router.delete("/:id", authenticationMiddleware, validateMiddleware({paramsSchema: deleteRoute.paramsSchema}), routeMiddleware(deleteRoute.route));
router.put("/:id", authenticationMiddleware, validateMiddleware({bodySchema: update.bodySchema, paramsSchema: update.paramsSchema}), routeMiddleware(update.route));
router.get("/", routeMiddleware(list));
router.get("/:id", validateMiddleware({paramsSchema: listId.paramsSchema}), routeMiddleware(listId.route));



module.exports = router;
