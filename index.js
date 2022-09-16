const express = require("express");
const server = express();
const database = require("./utils/database");
const bodyParser = require("body-parser");
const cidadeRouter = require("./controllers/cidade");
const equipamentoRouter = require("./controllers/equipamento");
const analiseRouter = require("./controllers/analise");
const funcionarioRouter = require("./controllers/funcionario");

server.use(bodyParser.json());

server.listen(3000, async () => {
  await database.init();
  console.log("Servidor Iniciado");
});

server.use("/cidade", cidadeRouter);
server.use("/equipamento", equipamentoRouter);
server.use("/analise", analiseRouter);
server.use("/auth", funcionarioRouter);
