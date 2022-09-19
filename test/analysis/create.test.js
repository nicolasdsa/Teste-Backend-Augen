const mocha = require("mocha");
const env = require("../../config/env");
env(process.env.NODE_ENV);
const {expect} = require("chai");
const {route} = require("../../routes/analysis/create");
const analysisModel = require("../../models/analysis");
const equipmentModel = require("../../models/equipment");
const cityModel = require("../../models/city");
const Response = require("../utils/res");

describe("Analysis - Create", () => {
    let cityId;
    let equipmentId;

    context("When creating a Analysis with valid values",  () => {
 

        before(async () => {
            const result = await cityModel.insert({name: "cityCreateAnalysis", state: "RS"});
            cityId = result.insertId;
            const equipment = await equipmentModel.insert({name: "EquipmentAnalysis", city_id: cityId});
            equipmentId = equipment.insertId;
        })

        it("Should return success", async () => {
            const req = {body: {ph: 14, chlorine: 66, fluorine: 33, output: 15, equipment_id: equipmentId}};
            const res = new Response();
            await route(req, res);

            expect(res.statusNumber).to.be.equals(200);
        })
    })
    after(async () => {
        await analysisModel.deleteByTest({ph: 14, chlorine: 66, fluorine: 33, output: 15, equipment_id: equipmentId});
        await equipmentModel.hardDeleteByIdTest(equipmentId);
        await cityModel.deleteById(cityId);
    })
})