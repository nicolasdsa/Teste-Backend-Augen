const equipamentoModel = require("../../models/equipamento");
const cidadeModel = require("../../models/cidade");
const ApiError = require("../../utils/apiError");
const Joi = require("joi");

const schema = Joi.object({
  Nome: Joi.string().required().max(30),
  CidadeId: Joi.number().required(),
});

const route = async (req, res) => {
  const { error, value } = schema.validate(req.body);

  if (error) {
    throw ApiError.badRequest(error, {});
  }

  const verify = await cidadeModel.selectQuery(
    `WHERE CidadeId = ${req.body.CidadeId}`
  );

  if (verify[0].length == 0) {
    throw ApiError.NotFound("Esta cidade não existe.", {});
  }

  const padronizeData = Object.values(value).map((element) => {
    return typeof element == "string" ? `"${element}"` : element;
  });

  const keysData = Object.keys(req.body);

  const create = await equipamentoModel.createQuery(keysData, padronizeData);

  return res.status(200).send("Confirmado");
};

module.exports = route;
