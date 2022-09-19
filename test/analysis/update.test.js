const mocha = require("mocha");
const env = require("../../config/env");
env(process.env.NODE_ENV);
const {expect} = require("chai");
const {route} = require("../../routes/analysis/update");
const analysisModel = require("../../models/analysis");
const equipmentModel = require("../../models/equipment");
const cityModel = require("../../models/city");
const Response = require("../utils/res");
const ApiError = require("../../utils/apiError");

describe("Analysis - UPDATE", () => {

    context("When updating a analysis by id",  () => {
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

        it("Should return success", async () => {
            const req = {params: {id}, body: {ph: 32, chlorine: 50, fluorine: 20, output: 11, equipment_id: equipmentId}};
            const res = new Response();
            await route(req, res);

            expect(res.statusNumber).to.be.equals(200);
            expect(res.body.success).to.be.true;
        })

        after(async () => {
            await analysisModel.deleteById(id);
            await equipmentModel.hardDeleteByIdTest(equipmentId);
            await cityModel.deleteById(cityId);
    
        })
    }
    )

    context("When updating a analysis by invalid id",  () => {    
    
        it("Should throw ApiError", async () => {
            const req = {params: {id: 999}};
            const res = new Response();
            try {
                await route(req, res);
            }
            catch(err) {
                expect(err).to.be.instanceOf(ApiError);
            }   
        })
    })

})