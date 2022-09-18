const cityModel = require("../models/city");

class CityController {
    static async create(city){
        return cityModel.insert(city);
    }

    static async list(){
        const list = await cityModel.list();
        return list
    }

    static async update(city, id){
        return cityModel.updateById(city, id);
    }

    static async findById(id){
        const [city] = await cityModel.findById(id);
        return city;
    }

    static async deleteById(id){
        return cityModel.deleteById(id);
    }
}

module.exports = CityController;