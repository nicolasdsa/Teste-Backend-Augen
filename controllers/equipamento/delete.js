const equipamentoModel = require("../../models/equipamento");
const analiseModel = require("../../models/analise");
const ApiError = require("../../utils/apiError");

const route = async (req, res) => {
  const verify = await equipamentoModel.selectQuery(
    `WHERE Id = ${req.params.id}`
  );

  if (verify[0].length == 0) {
    throw ApiError.NotFound("Este equipamento não existe.", {});
  }

  const verifyAnalise = await analiseModel.selectQuery(
    `WHERE EquipamentoId = ${verify[0][0].Id}`
  );

  if (verifyAnalise[0].length > 0) {
    throw ApiError.badRequest(
      "Este equipamento está vinculado com alguma analise e por isso não pode ser deletado.",
      {}
    );
  }

  const Delete = await equipamentoModel.deleteQuery(req.params.id);

  return res.status(200).send("Confirmado");
};

module.exports = route;
