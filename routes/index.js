const express = require("express");
const router = express.Router();

const cityRouter = require("./city");
const equipmentRouter = require("./equipment");
const analiseRouter = require("./analise");
const funcionarioRouter = require("./funcionario");

router.use("/city", cityRouter);
router.use("/equipment", equipmentRouter);
router.use("/analise", analiseRouter);
router.use("/auth", funcionarioRouter);

module.exports = router;