const Joi = require("joi");
const EquipamentController = require("../../controllers/equipment");
const CityController = require("../../controllers/city");
const ApiError = require("../../utils/apiError");

const bodySchema = Joi.object({
  name: Joi.string().max(30).required(),
  city_id: Joi.number().required(),
});

const paramsSchema = Joi.object({
  id: Joi.number().integer().required()
})

const route = async (req, res) => {

  const equipment = await EquipamentController.findById(req.params.id);

  if (!equipment) {
    throw ApiError.NotFound("Este equipamento não existe.", {});
  }

  const city = await CityController.findById(req.body.city_id);

  if(!city){
    throw ApiError.NotFound("Esta cidade não existe.", {});
  }

  const update = await EquipamentController.update(req.body, req.params.id);

  return res.status(200).send({success: true});
};

module.exports = {route, bodySchema, paramsSchema};
