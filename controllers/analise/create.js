const analiseModel = require("../../models/analise");
const Joi = require("joi");

const schema = Joi.object({
  PH: Joi.number().required(),
  Cloro: Joi.number().required(),
  Fluor: Joi.number().required(),
  Vazao: Joi.number().required(),
  EquipamentoId: Joi.number().required(),
});

const route = async (req, res) => {
  const { error, value } = schema.validate(req.body);

  if (error) {
    return res.status(400).send(error);
  }

  const padronizeData = Object.values(value);

  const keysData = Object.keys(req.body);

  const create = await analiseModel.create(keysData, padronizeData);

  return res.status(200).send("Confirmado");
};

module.exports = route;
