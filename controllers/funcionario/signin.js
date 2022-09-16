const Joi = require("joi");
const AuthController = require("./auth");
const ApiError = require("../../utils/apiError");

const schema = Joi.object({
  Email: Joi.string().email().required(),
  Senha: Joi.string()
    .regex(/^(?=.*\d).{4,16}$/)
    .required(),
});

const route = async (req, res) => {
  const { error, value } = schema.validate(req.body);

  if (error) {
    throw ApiError.badRequest(error, {});
  }

  const token = await AuthController.signin(value);

  return res.status(200).send({
    token,
  });
};

module.exports = route;