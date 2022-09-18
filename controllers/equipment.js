const equipmentModel = require("../models/equipment");

class EquipmentController {
    static async findByCityId(cityId){
        return equipmentModel.findByCityId(cityId);
    }

    static async insert(equipment){
        return equipmentModel.insert(equipment);
    }
}

module.exports = EquipmentController;