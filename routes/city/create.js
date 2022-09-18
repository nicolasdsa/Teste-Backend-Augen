const Joi = require("joi");
const CityController = require("../../controllers/city");
const ApiError = require("../../utils/apiError");

const bodySchema = Joi.object({
  name: Joi.string().required().max(30),
  state: Joi.string().required().max(2),
});

const route = async (req, res) => {

  const create = await CityController.create(req.body);

  return res.status(200).send({success: true});
};

module.exports = {route, bodySchema};
