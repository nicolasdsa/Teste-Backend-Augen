const database = require("./database");

class Model {
  constructor(tableName) {
    this.tableName = tableName;
  }

  async query(sql, params) {
    const [result] = await database.query(sql, params);
    return result;
  }

  selectEmail(Email) {
    return database.query(
      `SELECT * FROM ${this.tableName} WHERE Email = ${Email}`
    );
  }
}

module.exports = Model;
