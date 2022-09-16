const cidadeModel = require("../../models/cidade");
const equipamentoModel = require("../../models/equipamento");
const ApiError = require("../../utils/apiError");

const route = async (req, res) => {
  const verify = await cidadeModel.selectQuery(`WHERE Id = ${req.params.id}`);

  if (verify[0].length == 0) {
    throw ApiError.NotFound("Esta cidade não existe.", {});
  }

  const verifyEquipamento = await equipamentoModel.selectQuery(
    `WHERE CidadeId = ${verify[0][0].Id}`
  );

  if (verifyEquipamento[0].length > 0) {
    throw ApiError.badRequest(
      "Esta cidade está vinculada com algum equipamento e por isso não pode ser deletada.",
      {}
    );
  }

  const Delete = await cidadeModel.deleteQuery(req.params.id);

  return res.status(200).send({ success: true });
};

module.exports = route;
