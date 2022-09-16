const analiseModel = require("../../models/analise");
const Joi = require("joi");
const ApiError = require("../../utils/apiError");
const equipamentoModel = require("../../models/equipamento");

const schema = Joi.object({
  PH: Joi.number(),
  Cloro: Joi.number(),
  Fluor: Joi.number(),
  Vazao: Joi.number(),
  EquipamentoId: Joi.number(),
});

const route = async (req, res) => {
  const { error, value } = schema.validate(req.body);

  if (error) {
    throw ApiError.badRequest(error, {});
  }

  const verify = await analiseModel.selectQuery(`WHERE Id = ${req.params.id}`);

  if (verify[0].length == 0) {
    throw ApiError.NotFound("Esta analise não existe.", {});
  }

  if (Object.keys(value).length === 0) {
    throw ApiError.badRequest(
      "Nenhum valor foi colocado para se atualizar.",
      {}
    );
  }

  if (req.body.EquipamentoId) {
    const verifyEquipamento = await equipamentoModel.selectQuery(
      `WHERE Id = ${req.body.EquipamentoId}`
    );

    if (verifyEquipamento[0].length == 0) {
      throw ApiError.NotFound("Este equipamento não existe.", {});
    }
  }

  const padronizeData = Object.values(value);

  const keysData = Object.keys(req.body);

  let teste = [];

  for (let i = 0; i < keysData.length; i++) {
    teste.push(`${keysData[i]} = ${padronizeData[i]}`);
  }

  const update = await analiseModel.update(teste, req.params.id);

  return res.status(200).send("Confirmado");
};

module.exports = route;
