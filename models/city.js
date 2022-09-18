const Model = require("../utils/model");

class CityModel extends Model {
  constructor() {
    super("cities");
  }

  async insert({name, state}){
    const params = [name, state];
    const sql = `INSERT INTO ${this.tableName} (name, state) VALUES (?, ?)`;
    return this.query(sql, params);
  }

  async list(){
    const sql = `SELECT * FROM ${this.tableName}`;
    return await this.query(sql);
  }

  async findById(id){
    const params = [id];
    const sql = `SELECT * FROM ${this.tableName} WHERE id = ?`;
    return this.query(sql, params);
  }

  async deleteById(id){
    const params = [id];
    const sql = `DELETE FROM ${this.tableName} WHERE id = ?`;
    return this.query(sql, params);
  }

  async updateById(city, id){
    const params = [city.name, city.state, id];
    const sql = `UPDATE ${this.tableName} SET name = ?, state = ? WHERE id = ?`;
    return this.query(sql, params);
  }
}

module.exports = new CityModel();
