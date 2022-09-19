const mocha = require("mocha");
const env = require("../../config/env");
env(process.env.NODE_ENV);
const {expect} = require("chai");
const route = require("../../routes/analysis/list");
const analysisModel = require("../../models/analysis");
const equipmentModel = require("../../models/equipment");
const cityModel = require("../../models/city");
const Response = require("../utils/res");
const ApiError = require("../../utils/apiError");

describe("Analysis - List", () => {
    context("When listing analysis",  () => {
    
        let cityId;
        let equipmentId;
        let id;

        before(async () => {
            const result = await cityModel.insert({name: "cityCreateAnalysis", state: "RS"});
            cityId = result.insertId;
            const equipment = await equipmentModel.insert({name: "EquipmentAnalysis", city_id: cityId});
            equipmentId = equipment.insertId;
            const analysis = await analysisModel.insert({ph: 14, chlorine: 66, fluorine: 33, output: 15, equipment_id: equipmentId});
            id  = analysis.insertId;
        })

        it("Should return cities data", async () => {
            const req = {};
            const res = new Response();
            await route(req, res);

            expect(res.statusNumber).to.be.equals(200);
        })
        after(async () => {
            await analysisModel.deleteById(id);
            await equipmentModel.hardDeleteByIdTest(equipmentId);
            await cityModel.deleteById(cityId);
        })
    })

})