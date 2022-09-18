const Model = require("../utils/model");

class EquipmentModel extends Model {
  constructor() {
    super("equipments");
  }

  async findByCityId(cityId){
    const params = [cityId];
    const sql = `SELECT * FROM ${this.tableName} WHERE city_id = ?`
    return this.query(sql, params);
  }

  async insert({name, city_id}){
    const params = [name, city_id];
    const sql = `INSERT INTO ${this.tableName} (name, city_id) VALUES (?, ?)`;
    return this.query(sql, params);
  }

}

module.exports = new EquipmentModel();
