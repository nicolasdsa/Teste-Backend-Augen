const express = require("express");
const server = express();
const database = require("./utils/database");
const bodyParser = require("body-parser");
const cidadeRouter = require("./controllers/cidade");

server.use(bodyParser.json());

server.listen(3000, async () => {
  await database.init();
  console.log("alo");
});

server.use("/cidade", cidadeRouter);
