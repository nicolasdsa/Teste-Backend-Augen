const Model = require("../utils/model");

class analiseModel extends Model {
  constructor() {
    super("Analise");
  }

  async create(names, values) {
    return this.insert(names, values);
  }

  async list() {
    return this.select();
  }

  async verify(id) {
    return this.selectId(id);
  }

  async delete(id) {
    return this.Delete(id);
  }

  async update(teste, id) {
    return this.updateQuery(teste, id);
  }
}

module.exports = new analiseModel();
