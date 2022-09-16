const Model = require("../utils/model");

class cidadeModel extends Model {
  constructor() {
    super("Cidade");
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

module.exports = new cidadeModel();
