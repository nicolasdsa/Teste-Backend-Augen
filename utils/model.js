const database = require("./database");

class Model {
  constructor(tableName) {
    this.tableName = tableName;
  }

  selectModel(condition) {
    return database.query(`SELECT * FROM ${this.tableName} ${condition}`);
  }
}

module.exports = Model;
