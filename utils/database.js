const mysql = require("mysql2/promise");

class DataBase {
  constructor() {
    this.host = "localhost";
    this.database = "testAugen";
    this.user = "root";
    this.password = "#3Lla@76cO3";
  }

  async init() {
    this.connection = await mysql.createConnection({
      host: this.host,
      user: this.user,
      database: this.database,
      password: this.password,
    });
  }

  async query(sql, params) {
    return await this.connection.execute(sql, params);
  }
}

module.exports = new DataBase();
