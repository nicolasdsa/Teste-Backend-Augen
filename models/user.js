const Model = require("../utils/model");

class UserModel extends Model {
  constructor() {
    super("user");
  }

  async insert({email, password}){
    const params = [email, password];
    const sql = `INSERT INTO ${this.tableName} (email, password) VALUES (?, ?)`;
    return this.query(sql, params);
  }

  async getUser(email) {
    const params = [email];
    const sql = `SELECT * FROM ${this.tableName} WHERE email = ?`;
    return this.query(sql, params);
  }
}

module.exports = new UserModel();
