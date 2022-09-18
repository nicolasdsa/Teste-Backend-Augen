const express = require("express");
const router = express.Router();
const create = require("./create");
const routeMiddleware = require("../../middlewares/route");
const validateMiddleware = require("../../middlewares/validation");

/*const list = require("./list");
const listId = require("./listId");
const update = require("./update");
const Delete = require("./delete");*/

router.post("/", validateMiddleware({bodySchema: create.bodySchema}), routeMiddleware(create.route));
/*router.get("/", routeMiddleware(list));
router.get("/:id", routeMiddleware(listId));
router.delete("/:id", routeMiddleware(Delete));
router.patch("/:id", routeMiddleware(update));*/

module.exports = router;
