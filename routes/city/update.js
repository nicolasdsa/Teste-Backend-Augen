const Joi = require("joi");
const CityController = require("../../controllers/city");
const ApiError = require("../../utils/apiError");

const bodySchema = Joi.object({
  name: Joi.string().required().max(30),
  state: Joi.string().required().max(2),
});

const paramsSchema = Joi.object({
  id: Joi.number().integer().required()
})

const route = async (req, res) => {

  const city = await CityController.findById(req.params.id);

  if (!city) {
    throw ApiError.NotFound("Esta cidade não existe.", {});
  }

  const update = await CityController.update(req.body, req.params.id);

  return res.status(200).send({success: true});
};

module.exports = {route, bodySchema, paramsSchema};
