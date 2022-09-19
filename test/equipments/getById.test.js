const mocha = require("mocha");
const env = require("../../config/env");
env(process.env.NODE_ENV);
const {expect} = require("chai");
const {route} = require("../../routes/equipment/getById");
const cityModel = require("../../models/city");
const equipmentModel = require("../../models/equipment");
const Response = require("../utils/res");
const ApiError = require("../../utils/apiError");

describe("Equipments - getById", () => {
    context("When getting a equipment by id",  () => { 

        let id;
        let idCity;

        before(async () => {
            const result = await cityModel.insert({name: "test", state: "RS"});
            const equipment = await equipmentModel.insert({name: "equipmentTest", city_id: result.insertId});
            id = equipment.insertId;
            idCity = result.insertId;
        })

        it("Should return equipment data", async () => {
            const req = {params: {id}};
            const res = new Response();
            await route(req, res);

            expect(res.statusNumber).to.be.equals(200);
            expect(res.body.name).to.be.equals("equipmentTest");
            expect(res.body.city_id).to.be.equals(idCity);
        })
        after(async () => {
            await equipmentModel.hardDeleteByIdTest(id);
            await cityModel.deleteById(idCity);
    
        })
    }
    )

    context("When getting a equipment by invalid id",  () => {    
    
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
    }
    )

})