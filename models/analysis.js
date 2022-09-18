const Model = require("../utils/model");

class AnalysisModel extends Model {
  constructor() {
    super("analysis");
  }

  async insert({ph, chlorine, fluorine, output, equipment_id}){
    const params = [ph, chlorine, fluorine, output, equipment_id];
    const sql = `INSERT INTO ${this.tableName} (ph, chlorine, fluorine, output, equipment_id) VALUES (?, ?, ?, ?, ?)`;
    return this.query(sql, params);
  }

  async list(){
    const sql = `SELECT * FROM ${this.tableName}`;
    return await this.query(sql);
  }

  async findByEquipmentId(equipmentId){
    const params = [equipmentId];
    const sql = `SELECT * FROM ${this.tableName} WHERE equipment_id = ?`
    return this.query(sql, params);
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

  async updateById(analysis, id){
    const params = [analysis.ph ,analysis.chlorine, analysis.fluorine, analysis.output, analysis.equipment_id, id];
    console.log(params)
    const sql = `UPDATE ${this.tableName} SET ph = ?, chlorine = ?, fluorine = ?, output = ?, equipment_id = ? WHERE id = ?`;
    return this.query(sql, params);
  }

}

module.exports = new AnalysisModel();
