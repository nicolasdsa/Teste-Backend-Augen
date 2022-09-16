const cidadeModel = require("../../models/cidade");
const Joi = require("joi");
const ApiError = require("../../utils/apiError");

const schema = Joi.object({
  Nome: Joi.string().required().max(30),
  Estado: Joi.string().required().max(30),
});

const route = async (req, res) => {
  const { error, value } = schema.validate(req.body);

  if (error) {
    throw ApiError.badRequest(error, {});
  }

  const padronizeData = Object.values(req.body).map((element) => {
    return `"${element}"`;
  });

  const keysData = Object.keys(req.body);

  const create = await cidadeModel.createQuery(keysData, padronizeData);

  return res.status(200).send("Confirmado");
};

module.exports = route;
