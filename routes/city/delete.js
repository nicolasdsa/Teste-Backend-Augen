const Joi = require("joi");
const CityController = require("../../controllers/city");
const EquipmentController = require("../../controllers/equipment");
const ApiError = require("../../utils/apiError");

const paramsSchema = Joi.object({
  id: Joi.number().integer().required()
})

const route = async (req, res) => {
  const city = await CityController.findById(req.params.id);

  if (!city) {
    throw ApiError.NotFound("Esta cidade não existe.", {});
  }

  const equipments = await EquipmentController.findByCityId(req.params.id);


  if (equipments.length > 0) {
    throw ApiError.badRequest(
      "Esta cidade está vinculada com algum equipamento e por isso não pode ser deletada.",
      {}
    );
  }

  const Delete = await CityController.deleteById(req.params.id);

  return res.status(200).send({ success: true });
};

module.exports = {route, paramsSchema};
