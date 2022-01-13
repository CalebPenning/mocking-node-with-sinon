const { expect } = require("chai")
const { createSandbox, spy } = require("sinon")
const fs = require("fs")
const proxyquire = require("proxyquire")
const fileManagement = require('./file.management')

describe("File Management", () => {
    it("true should be true", () => {
        expect(true).to.be.true
    })
    describe("When creating a new file", () => {
        it ("Should call writeFileSync", () => {
            const writeSpy = spy(fs, "writeFileSync")
            fileManagement.createFile("test.txt")

            expect(writeSpy.calledWith("./data/test.txt", "")).to.be.true
        })
    })
})