const Joi = require("joi");
const EquipmentController = require("../../controllers/equipment");
const ApiError = require("../../utils/apiError");

const paramsSchema = Joi.object({
  id: Joi.number().integer().required()
})


const route = async (req, res) => {
  const equipment = await EquipmentController.findById(req.params.id);

  if (!equipment) {
    throw ApiError.NotFound("Este equipamento não existe.", {});
  }

  return res.status(200).send({ ...equipment });
};

module.exports = {route, paramsSchema};
