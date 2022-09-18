const Joi = require("joi");
const ApiError = require("../../utils/apiError");
const EquipamentoController = require("../../controllers/equipment");
const CityController = require("../../controllers/city");

const bodySchema = Joi.object({
  name: Joi.string().required().max(30),
  city_id: Joi.number().required(),
});

const route = async (req, res) => {

  const city = await CityController.findById(req.body.city_id);


  if (!city) {
    throw ApiError.NotFound("Esta cidade não existe.", {});
  }

  const create = await EquipamentoController.insert(req.body);

  return res.status(200).send({success: true});
};

module.exports = {route, bodySchema};