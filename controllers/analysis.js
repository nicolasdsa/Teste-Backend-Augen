const analysisModel = require("../models/analysis");

class AnalysisController {
    static async create(analysis){
        return analysisModel.insert(analysis);
    }

    static async list(){
        const list = await analysisModel.list();
        return list
    }

    static async update(analysis, id){
        return analysisModel.updateById(analysis, id);
    }

    static async findByEquipmentId(equipmentId){
        return analysisModel.findByEquipmentId(equipmentId);
    }

    static async findById(id){
        const [analysis] = await analysisModel.findById(id);
        return analysis
    }

    static async deleteById(id){
        return analysisModel.deleteById(id);
    }

}

module.exports = AnalysisController;