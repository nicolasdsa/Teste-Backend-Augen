const cidadeModel = require("../../models/cidade");

const route = async (req, res) => {
  const list = await cidadeModel.list();

  return res.status(200).send({ ...list[0] });
};

module.exports = route;
