const equipamentoModel = require("../../models/equipamento");
const ApiError = require("../../utils/apiError");

const route = async (req, res) => {
  const verify = await equipamentoModel.selectQuery(
    `WHERE Id = ${req.params.id}`
  );

  if (verify[0].length == 0) {
    throw ApiError.NotFound("Este equipamento não existe.", {});
  }

  const list = await equipamentoModel.selectQuery(
    `WHERE Id = ${req.params.id}`
  );

  return res.status(200).send({ ...list[0] });
};

module.exports = route;
