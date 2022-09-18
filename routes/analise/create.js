const analiseModel = require("../../models/analise");
const equipamentoModel = require("../../models/equipamento");
const Joi = require("joi");
const ApiError = require("../../utils/apiError");

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
    throw ApiError.badRequest(error, {});
  }

  const verify = await equipamentoModel.selectQuery(
    `WHERE Id = ${req.body.EquipamentoId}`
  );

  if (verify[0].length == 0) {
    throw ApiError.NotFound("Este equipamento não existe.", {});
  }

  if (req.body.Vazao == 0 || req.body.Cloro > 100 || req.body.Fluor > 100) {
    throw ApiError.badRequest("Valores fora do padrão aceito.", {});
  }

  const padronizeData = Object.values(value);

  const keysData = Object.keys(req.body);

  const create = await analiseModel.createQuery(keysData, padronizeData);

  return res.status(200).send("Confirmado");
};

module.exports = route;
