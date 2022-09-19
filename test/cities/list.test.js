const mocha = require("mocha");
const env = require("../../config/env");
env(process.env.NODE_ENV);
const {expect} = require("chai");
const route = require("../../routes/city/list");
const cityModel = require("../../models/city");
const Response = require("../utils/res");
const ApiError = require("../../utils/apiError");

describe("Cities - List", () => {
    context("When listing cities",  () => {
    
        let id

        before(async () => {
            const result = await cityModel.insert({name: "testCitiesList", state: "RS"});
            id = result.insertId;
        })
        it("Should return cities data", async () => {
            const req = {};
            const res = new Response();
            await route(req, res);

            expect(res.statusNumber).to.be.equals(200);
        })
        after(async () => {
            await cityModel.deleteById(id);
        })
    })

})