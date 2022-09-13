const Model = require("../utils/model");

class cidadeModel extends Model {
  constructor() {
    super("Cidade");
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

module.exports = new cidadeModel();
