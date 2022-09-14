const analiseModel = require("../../models/analise");

const route = async (req, res) => {
  const list = await analiseModel.list();

  return res.status(200).send({ ...list[0] });
};

module.exports = route;
