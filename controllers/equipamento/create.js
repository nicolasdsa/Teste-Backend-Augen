const equipamentoModel = require("../../models/equipamento");
const Joi = require("joi");

const schema = Joi.object({
  Nome: Joi.string().required().max(30),
  CidadeId: Joi.number().required(),
});

const route = async (req, res) => {
  const { error, value } = schema.validate(req.body);

  if (error) {
    return res.status(400).send(error);
  }

  const padronizeData = Object.values(value).map((element) => {
    return typeof element == "string" ? `"${element}"` : element;
  });

  const keysData = Object.keys(req.body);

  const create = await equipamentoModel.create(keysData, padronizeData);

  return res.status(200).send("Confirmado");
};

module.exports = route;
