const Joi = require("joi");
const AuthController = require("./auth");

const bodySchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string()
    .regex(/^(?=.*\d).{4,16}$/)
    .required(),
});

const route = async (req, res) => {

  
  const insertedId = await AuthController.signup(req.body);

  return res.status(200).send({
    success: true,
  });
};

module.exports = {route, bodySchema};
