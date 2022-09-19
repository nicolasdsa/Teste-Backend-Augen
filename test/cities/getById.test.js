const mocha = require("mocha");
const env = require("../../config/env");
env(process.env.NODE_ENV);
const {expect} = require("chai");
const {route} = require("../../routes/city/getById");
const cityModel = require("../../models/city");
const Response = require("../utils/res");
const ApiError = require("../../utils/apiError");

describe("Cities - getById", () => {
    context("When getting a city by id",  () => {
        let id;
    
        before(async () => {
            const result = await cityModel.insert({name: "Pelotas", state: "RS"});
            id = result.insertId;
        })
        it("Should return city data", async () => {
            const req = {params: {id}};
            const res = new Response();
            await route(req, res);

            expect(res.statusNumber).to.be.equals(200);
            expect(res.body.name).to.be.equals("Pelotas");
            expect(res.body.state).to.be.equals("RS");
        })
        after(async () => {
            await cityModel.deleteById(id);
    
        })
    }
    )

    context("When getting a city by invalid id",  () => {    
    
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