const bcrypt = require("bcryptjs");
const funcionarioModel = require("../../models/funcionario");
const jwt = require("jsonwebtoken");

const secret = "9uC&g@4HX^xFgTf10o!7";

class AuthController {
  static async signup({ Email, Senha }) {
    const salt = bcrypt.genSaltSync(12);
    const hash = bcrypt.hashSync(Senha, salt);

    const verify = await funcionarioModel.getUser(`"${Email}"`);

    if (verify[0].length > 0) {
      return res.status(400).send("Este Email já está sendo utilizado.");
    }

    const id = await funcionarioModel.create(
      ["Email", "Senha"],
      [`"${Email}"`, `"${hash}"`]
    );

    return id;
  }

  static async signin({ Email, Senha }) {
    console.log(Email);
    console.log(Senha);
    const usuario = await funcionarioModel.getUser(`"${Email}"`);

    console.log(usuario[0].length);

    if (usuario[0].length == 0) {
      console.log("entrou aqui");
      return res.status(400).send("O funcionario não existe");
    }

    const senhaValida = bcrypt.compareSync(Senha, usuario[0][0].Senha);
    console.log({ senhaValida });

    if (!senhaValida) {
      console.log("Senha errada");
      return res.status(400).send("Senha Invalida");
    }

    const token = jwt.sign(
      { id: usuario[0].Id, Email: usuario[0].Email },
      secret
    );

    return token;
  }
}

module.exports = AuthController;
