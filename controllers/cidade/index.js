const express = require("express");
const router = express.Router();
const create = require("./create");
const list = require("./list");
const update = require("./update");
const Delete = require("./delete");

router.post("/", create);
router.get("/", list);
router.delete("/:id", Delete);
router.patch("/:id", update);

module.exports = router;
