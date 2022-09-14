const analiseModel = require("../../models/analise");

const route = async (req, res) => {
  const verify = await analiseModel.verify(req.params.id);

  if (verify[0].length == 0) {
    return res.status(400).send("ta vazio");
  }

  const Delete = await analiseModel.delete(req.params.id);

  return res.status(200).send("Confirmado");
};

module.exports = route;
