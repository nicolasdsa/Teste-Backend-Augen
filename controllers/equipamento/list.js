const equipamentoModel = require("../../models/equipamento");

const route = async (req, res) => {
  const list = await equipamentoModel.selectQuery();

  return res.status(200).send({ ...list[0] });
};

module.exports = route;
