const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("Initialization", () => {
        it("should create an object with name id and email", () => {
            const name = "will";
            const id = "12";
            const email = "sam@gmail.com";
            const obj = new Employee(name, id, email);
            expect(obj.name).toEqual(name);
            expect(obj.id).toEqual(id);
            expect(obj.email).toEqual(email);
        })
    })

    describe("Role", () => {
        it("should create an object with role", () => {
            const obj = new Employee();
            expect(obj.role).toEqual("Employee");
        })
    })
})