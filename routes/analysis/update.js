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

const paramsSchema = Joi.object({
  id: Joi.number().integer().required()
})

const route = async (req, res) => {

  const analysis = await AnalysisController.findById(req.params.id);

  if (!analysis) {
    throw ApiError.NotFound("Esta analise não existe.", {});
  }

  const equipment = await EquipmentController.findById(req.body.equipment_id);

  if (!equipment) {
    throw ApiError.NotFound("Este equipamento não existe.", {});
  }

  if (req.body.output == 0 || req.body.chlorine > 100 || req.body.fluorine > 100) {
    throw ApiError.badRequest("Valores fora do padrão aceito.", {});
  }

  const update = await AnalysisController.update(req.body, req.params.id);

  return res.status(200).send({success: true});
};

module.exports = {route, bodySchema, paramsSchema};
