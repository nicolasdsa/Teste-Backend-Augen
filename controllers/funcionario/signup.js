const Joi = require("joi");
const AuthController = require("./auth");

const schema = Joi.object({
  Email: Joi.string().email().required(),
  Senha: Joi.string()
    .regex(/^(?=.*\d).{4,16}$/)
    .required(),
});

const route = async (req, res) => {
  const { error, value } = schema.validate(req.body);

  if (error) {
    return res.status(400).send(error);
  }

  const insertedId = await AuthController.signup(value);

  return res.status(200).send({
    success: true,
  });
};

module.exports = route;
