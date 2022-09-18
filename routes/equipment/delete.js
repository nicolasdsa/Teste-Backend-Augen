const Joi = require("joi");
const EquipmentController = require("../../controllers/equipment");
const AnalysisController = require("../../controllers/analysis");
const ApiError = require("../../utils/apiError");

const paramsSchema = Joi.object({
  id: Joi.number().integer().required()
})

const route = async (req, res) => {
  const equipment = await EquipmentController.findById(req.params.id);

  if (!equipment) {
    throw ApiError.NotFound("Este equipamento não existe.", {});
  }

  const analysis = await AnalysisController.findByEquipmentId(req.params.id);

  if (!analysis) {
    throw ApiError.badRequest(
      "Este equipamento está vinculado com alguma analise e por isso não pode ser deletado.",
      {}
    );
  }

  const Delete = await EquipmentController.deleteById(req.params.id);

  return res.status(200).send({success: true});
};

module.exports = {route, paramsSchema};
