const mocha = require("mocha");
const env = require("../../config/env");
env(process.env.NODE_ENV);
const {expect} = require("chai");
const route = require("../../routes/equipment/list");
const cityModel = require("../../models/city");
const equipmentModel = require("../../models/equipment")
const Response = require("../utils/res");
const ApiError = require("../../utils/apiError");

describe("Equipments - List", () => {
    context("When listing equipments",  () => {
    
        let id

        before(async () => {
            const result = await cityModel.insert({name: "test", state: "RS"});
            const equipment = await equipmentModel.insert({name: "equipmentTest", city_id: result.insertId});
            id = equipment.insertId;
            idCity = result.insertId;
        })
        it("Should return equipments data", async () => {
            const req = {};
            const res = new Response();
            await route(req, res);

            expect(res.statusNumber).to.be.equals(200);
        })
        after(async () => {
            await equipmentModel.hardDeleteByIdTest(id);
            await cityModel.deleteById(idCity);
    
        })
    })

})