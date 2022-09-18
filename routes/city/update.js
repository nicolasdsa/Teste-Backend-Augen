const Joi = require("joi");
const CityController = require("../../controllers/city");
const ApiError = require("../../utils/apiError");

const bodySchema = Joi.object({
  city: Joi.string().max(30),
  state: Joi.string().max(2),
});

const paramsSchema = Joi.object({
  id: Joi.number().integer().required()
})

const route = async (req, res) => {

  const city = await CityController.findById(req.params.id);

  if (!city) {
    throw ApiError.NotFound("Esta cidade não existe.", {});
  }

  if (Object.keys(req.body).length === 0) {
    throw ApiError.badRequest(
      "Nenhum valor foi colocado para se atualizar.",
      {}
    );
  }


  const update = await CityController.update(req.body);

  return res.status(200).send("Confirmado");
};

module.exports = {route, bodySchema, paramsSchema};
