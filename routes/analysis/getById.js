const AnalysisController = require("../../controllers/analysis");
const ApiError = require("../../utils/apiError");

const route = async (req, res) => {
  const analysis = await AnalysisController.findById(req.params.id);

  if (!analysis) {
    throw ApiError.NotFound("Esta analise não existe.", {});
  }

  return res.status(200).send( ...analysis );
};

module.exports = route;
