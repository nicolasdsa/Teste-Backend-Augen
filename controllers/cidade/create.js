const cidadeModel = require("../../models/cidade");
const Joi = require("joi");

const schema = Joi.object({
  Nome: Joi.string().required().max(30),
  Estado: Joi.string().required().max(30),
});

const route = async (req, res) => {
  const { error, value } = schema.validate(req.body);

  if (error) {
    return res.status(400).send(error);
  }

  const padronizeData = Object.values(req.body).map((element) => {
    return `"${element}"`;
  });

  const keysData = Object.keys(req.body);

  const create = await cidadeModel.create(keysData, padronizeData);

  return res.status(200).send("Confirmado");
};

module.exports = route;
