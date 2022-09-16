const database = require("./database");

class Model {
  constructor(tableName) {
    this.tableName = tableName;
  }

  select(condition = "") {
    return database.query(`SELECT * FROM ${this.tableName} ${condition}`);
  }

  insert(names, values) {
    return database.query(
      `INSERT INTO ${this.tableName} (${names}) VALUES (${values})`
    );
  }

  Delete(id) {
    return database.query(`DELETE FROM ${this.tableName} WHERE Id = ${id}`);
  }

  update(teste, id) {
    return database.query(
      `UPDATE ${this.tableName} SET ${teste} WHERE Id = ${id}`
    );
  }

  selectEmail(Email) {
    return database.query(
      `SELECT * FROM ${this.tableName} WHERE Email = ${Email}`
    );
  }
}

module.exports = Model;
