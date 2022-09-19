const mocha = require("mocha");
const env = require("../../config/env");
env(process.env.NODE_ENV);
const {expect} = require("chai");
const {route} = require("../../routes/equipment/delete");
const cityModel = require("../../models/city");
const equipmentModel = require("../../models/equipment");
const Response = require("../utils/res");
const ApiError = require("../../utils/apiError");

describe("Equipments - Delete", () => {

    context("When deleting a equipment by id",  () => {
        let id;
        let cityId;

        before(async () => {
            const result = await cityModel.insert({name: "Pelotas", state: "RS"});
            const equipment = await equipmentModel.insert({name: "equipmentTest", city_id: result.insertId});
            id = equipment.insertId;
            cityId = result.insertId
        })

        it("Should return success", async () => {
            const req = {params: {id}};
            const res = new Response();
            await route(req, res);

            expect(res.statusNumber).to.be.equals(200);
            expect(res.body.success).to.be.true;
        })
    }
    )

    context("When deleting a city by invalid id",  () => {    
    
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