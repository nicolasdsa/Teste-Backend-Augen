const CityController = require("../../controllers/city");
const ApiError = require("../../utils/apiError");

const route = async (req, res) => {
  const city = await CityController.findById(req.params.id);

  if (!city) {
    throw ApiError.NotFound("Esta cidade não existe.", {});
  }

  return res.status(200).send({ city });
};

module.exports = route;
