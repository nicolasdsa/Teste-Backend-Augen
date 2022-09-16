const cidadeModel = require("../../models/cidade");
const ApiError = require("../../utils/apiError");

const route = async (req, res) => {
  const verify = await cidadeModel.selectQuery(`WHERE Id = ${req.params.id}`);

  if (verify[0].length == 0) {
    throw ApiError.NotFound("Esta cidade não existe.", {});
  }

  const list = await cidadeModel.selectQuery(`WHERE Id = ${req.params.id}`);

  return res.status(200).send({ ...list[0] });
};

module.exports = route;
