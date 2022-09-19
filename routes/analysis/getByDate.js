const Joi = require("joi").extend(require('@joi/date'));
const AnalysisController = require("../../controllers/analysis");
const ApiError = require("../../utils/apiError");

const paramsSchema = Joi.object({
  date: Joi.date().format('YYYY:MM:DD')
})

const route = async (req, res) => {

  const [year, month, day] = req.params.date.split(":");

  const list = await AnalysisController.findByDate(year, month, day);

  return res.status(200).send({list});
};

module.exports = {route, paramsSchema};