const mocha = require("mocha");
const env = require("../../config/env");
env(process.env.NODE_ENV);
const {expect} = require("chai");
const {route} = require("../../routes/equipment/update");
const equipmentModel = require("../../models/equipment");
const cityModel = require("../../models/city");
const Response = require("../utils/res");
const ApiError = require("../../utils/apiError");

describe("Equipments - UPDATE", () => {

    context("When updating a equipment by id",  () => {
        let id;
        let equipmentId;

        before(async () => {
            const result = await cityModel.insert({name: "Pelotas", state: "RS"});
            id = result.insertId;
            const equipment = await equipmentModel.insert({name: "EquipmentEdit", city_id: id})
            equipmentId = equipment.insertId;
        })

        it("Should return success", async () => {
            const req = {params: {equipmentId}, body: {name: "EditEquipment", city_id: id}};
            const res = new Response();
            await route(req, res);

            expect(res.statusNumber).to.be.equals(200);
            expect(res.body.success).to.be.true;
        })

        after(async () => {
            await equipmentModel.hardDeleteByIdTest(equipmentId);
            await cityModel.deleteById(id);
    
        })
    }
    )

    context("When updating a equipment by invalid id",  () => {    
    
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