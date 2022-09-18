const analiseModel = require("../../models/analise");
const ApiError = require("../../utils/apiError");

const route = async (req, res) => {
  const verify = await analiseModel.selectQuery(`WHERE Id = ${req.params.id}`);

  if (verify[0].length == 0) {
    throw ApiError.NotFound("Esta analise não existe.", {});
  }

  const list = await analiseModel.selectQuery(`WHERE Id = ${req.params.id}`);

  return res.status(200).send({ ...list[0] });
};

module.exports = route;
