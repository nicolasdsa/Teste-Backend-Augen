const Joi = require("joi");
const AnalysisController = require("../../controllers/analysis");
const EquipmentController = require("../../controllers/equipment");
const ApiError = require("../../utils/apiError");

const bodySchema = Joi.object({
  ph: Joi.number().required(),
  chlorine: Joi.number().required(),
  fluorine: Joi.number().required(),
  output: Joi.number().required(),
  equipment_id: Joi.number().required(),
});

const route = async (req, res) => {

  const equipment = await EquipmentController.findById(req.body.equipment_id);

  if (!equipment) {
    throw ApiError.NotFound("Este equipamento não existe.", {});
  }

  if (req.body.output == 0 || req.body.chlorine > 100 || req.body.fluorine > 100) {
    throw ApiError.badRequest("Valores fora do padrão aceito.", {});
  }

  const create = await AnalysisController.create(req.body);

  return res.status(200).send({success: true});
};

module.exports = {route, bodySchema};
