const Model = require("../utils/model");

class analiseModel extends Model {
  constructor() {
    super("Analise");
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

module.exports = new analiseModel();
