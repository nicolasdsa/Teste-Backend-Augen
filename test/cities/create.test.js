const mocha = require("mocha");
const env = require("../../config/env");
env(process.env.NODE_ENV);
const {expect} = require("chai");
const {route} = require("../../routes/city/create");
const cityModel = require("../../models/city");
const Response = require("../utils/res");

describe("Cities - Create", () => {
    context("When creating a city with valid values",  () => {
        it("Should return success", async () => {
            const req = {body: {name: "pelotas", state: "RS"}};
            const res = new Response();
            await route(req, res);

            expect(res.statusNumber).to.be.equals(200);
        })
    }
    )
    after(async () => {
        await cityModel.deleteByNameAndState("pelotas", "RS");

    })
})