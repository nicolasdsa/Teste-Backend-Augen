const Model = require("../utils/model");

class equipamentoModel extends Model {
  constructor() {
    super("Equipamento");
  }

  async createQuery(names, values) {
    return this.insert(names, values);
  }

  async selectQuery(condition) {
    return this.select(condition);
  }

  async deleteQuery(id) {
    return this.Delete(id);
  }

  async updateQuery(teste, id) {
    return this.update(teste, id);
  }
}

module.exports = new equipamentoModel();
