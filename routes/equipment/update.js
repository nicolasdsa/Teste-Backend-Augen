const equipamentoModel = require("../../models/equipamento");
const cidadeModel = require("../../models/city");
const Joi = require("joi");
const ApiError = require("../../utils/apiError");

const schema = Joi.object({
  Nome: Joi.string().max(30),
  CidadeId: Joi.number(),
});

const route = async (req, res) => {
  const { error, value } = schema.validate(req.body);

  if (error) {
    throw ApiError.badRequest(error, {});
  }

  const verify = await equipamentoModel.selectQuery(
    `WHERE Id = ${req.params.id}`
  );

  if (verify[0].length == 0) {
    throw ApiError.NotFound("Este equipamento não existe.", {});
  }

  if (Object.keys(value).length === 0) {
    throw ApiError.badRequest(
      "Nenhum valor foi colocado para se atualizar.",
      {}
    );
  }

  if (req.body.CidadeId) {
    const verifyCidade = await cidadeModel.selectQuery(
      `WHERE Id = ${req.body.CidadeId}`
    );

    if (verifyCidade[0].length == 0) {
      throw ApiError.NotFound("Esta cidade não existe.", {});
    }
  }

  const padronizeData = Object.values(value).map((element) => {
    return typeof element == "string" ? `"${element}"` : element;
  });

  const keysData = Object.keys(req.body);

  let teste = [];

  for (let i = 0; i < keysData.length; i++) {
    teste.push(`${keysData[i]} = ${padronizeData[i]}`);
  }

  const update = await equipamentoModel.updateQuery(teste, req.params.id);

  return res.status(200).send("Confirmado");
};

module.exports = route;
