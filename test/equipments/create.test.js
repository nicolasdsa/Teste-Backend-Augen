const mocha = require("mocha");
const env = require("../../config/env");
env(process.env.NODE_ENV);
const {expect} = require("chai");
const {route} = require("../../routes/equipment/create");
const equipmentModel = require("../../models/equipment");
const cityModel = require("../../models/city");
const Response = require("../utils/res");

describe("Equipments - Create", () => {
    let id;

    context("When creating a equipments with valid values",  () => {

        before(async () => {
            const result = await cityModel.insert({name: "testEquipment", state: "RS"});
            id = result.insertId;
        })

        it("Should return success", async () => {
            const req = {body: {name: "Equipamento teste", city_id: id}};
            const res = new Response();
            await route(req, res);

            expect(res.statusNumber).to.be.equals(200);
        })
    }
    )
    after(async () => {
        await equipmentModel.deleteByNameTest({name: "Equipamento teste", city_id: id});
        await cityModel.deleteByNameAndState("teste", "RS");

    })
})