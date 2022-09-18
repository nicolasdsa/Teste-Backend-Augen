const express = require("express");
const router = express.Router();

const cityRouter = require("./city");
const equipmentRouter = require("./equipment");
const analysisRouter = require("./analysis");
const funcionarioRouter = require("./funcionario");

router.use("/city", cityRouter);
router.use("/equipment", equipmentRouter);
router.use("/analysis", analysisRouter);
router.use("/auth", funcionarioRouter);

module.exports = router;