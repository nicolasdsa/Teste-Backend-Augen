const Model = require("../utils/model");

class EquipmentModel extends Model {
  constructor() {
    super("equipments");
  }

  async list(){
    const sql = `SELECT * FROM ${this.tableName}`;
    return await this.query(sql);
  }

  async insert({name, city_id}){
    const params = [name, city_id];
    const sql = `INSERT INTO ${this.tableName} (name, city_id) VALUES (?, ?)`;
    return this.query(sql, params);
  }

  async findById(id){
    const params = [id];
    const sql = `SELECT * FROM ${this.tableName} WHERE id = ?`;
    return this.query(sql, params);
  }

  async findByCityId(cityId){
    const params = [cityId];
    const sql = `SELECT * FROM ${this.tableName} WHERE city_id = ?`
    return this.query(sql, params);
  }

  async deleteById(id){
    const params = [id];
    const sql = `DELETE FROM ${this.tableName} WHERE id = ?`;
    return this.query(sql, params);
  }

  async findById(id){
    const params = [id];
    const sql = `SELECT * FROM ${this.tableName} WHERE id = ?`;
    return this.query(sql, params);
  }

}

module.exports = new EquipmentModel();
