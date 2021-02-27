const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe("Initialization", () => {
        it("should create an object with name id and email", () => {
            const name = "will";
            const id = "12";
            const email = "sam@gmail.com"
            const obj = new Manager(name, id, email);
            expect(obj.name).toEqual(name);
            expect(obj.id).toEqual(id);
            expect(obj.email).toEqual(email);
        })
    })

    describe("office number", () => {
        it("should create an object with office number", () => {
            const officeNumber = "222";
            const obj = new Manager(officeNumber);
            expect(obj.officeNumber).toEqual(officeNumber);
        })
    })

    describe("Role", () => {
        it("should create an object with role", () => {
            const obj = new Manager();
            expect(obj.role).toEqual("Manager");
        })
    })
})