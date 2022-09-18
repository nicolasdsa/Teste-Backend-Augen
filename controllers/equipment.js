const equipmentModel = require("../models/equipment");

class EquipmentController {

    static async insert(equipment){
        return equipmentModel.insert(equipment);
    }

    static async list(){
        const list = await equipmentModel.list();
        return list
    }

    static async update(equipment, id){
        return equipmentModel.updateById(equipment, id);
    }

    static async findByCityId(cityId){
        return equipmentModel.findByCityId(cityId);
    }

    static async findById(id){
        const [equipment] = await equipmentModel.findById(id);
        return equipment;
    }

    static async deleteById(id){
        return equipmentModel.deleteById(id);
    }
}

module.exports = EquipmentController;