const Model = require("../utils/model");

class funcionarioModel extends Model {
  constructor() {
    super("Funcionario");
  }

  async create(names, values) {
    return this.insert(names, values);
  }

  async getUser(email) {
    return this.selectEmail(email);
  }
}

module.exports = new funcionarioModel();
