const cidadeModel = require("../../models/cidade");
const Joi = require("joi");
const ApiError = require("../../utils/apiError");

const schema = Joi.object({
  Nome: Joi.string().max(30),
  Estado: Joi.string().max(30),
});

const route = async (req, res) => {
  const { error, value } = schema.validate(req.body);

  if (error) {
    throw ApiError.badRequest(error, {});
  }

  const verify = await cidadeModel.selectQuery(`WHERE Id = ${req.params.id}`);

  if (verify[0].length == 0) {
    throw ApiError.NotFound("Esta cidade não existe.", {});
  }

  if (Object.keys(value).length === 0) {
    throw ApiError.badRequest(
      "Nenhum valor foi colocado para se atualizar.",
      {}
    );
  }

  const padronizeData = Object.values(req.body).map((element) => {
    return `"${element}"`;
  });

  const keysData = Object.keys(req.body);

  let teste = [];

  for (let i = 0; i < keysData.length; i++) {
    teste.push(`${keysData[i]} = ${padronizeData[i]}`);
  }

  const update = await cidadeModel.updateQuery(teste, req.params.id);

  return res.status(200).send("Confirmado");
};

module.exports = route;
