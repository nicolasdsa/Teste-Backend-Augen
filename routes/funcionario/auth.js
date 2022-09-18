const bcrypt = require("bcryptjs");
const funcionarioModel = require("../../models/funcionario");
const jwt = require("jsonwebtoken");
const ApiError = require("../../utils/apiError");

const secret = "9uC&g@4HX^xFgTf10o!7";

class AuthController {
  static async signup({ Email, Senha }) {
    const salt = bcrypt.genSaltSync(12);
    const hash = bcrypt.hashSync(Senha, salt);

    const verify = await funcionarioModel.getUser(`"${Email}"`);

    if (verify[0].length > 0) {
      throw ApiError.badRequest("Este Email já está sendo utilizado.", {});
    }

    const id = await funcionarioModel.create(
      ["Email", "Senha"],
      [`"${Email}"`, `"${hash}"`]
    );

    return id;
  }

  static async signin({ Email, Senha }) {
    const usuario = await funcionarioModel.getUser(`"${Email}"`);

    if (usuario[0].length == 0) {
      throw ApiError.NotFound("O funcionario não existe.", {});
    }

    const senhaValida = bcrypt.compareSync(Senha, usuario[0][0].Senha);

    if (!senhaValida) {
      throw ApiError.NotFound("Senha Incorreta.", {});
    }

    const token = jwt.sign({ Email: usuario[0][0].Email }, secret);

    return token;
  }
}

module.exports = AuthController;
