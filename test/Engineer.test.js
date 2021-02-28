const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("Initialization", () => {
        it("should create an object with name id and email", () => {
            const name = "will";
            const id = "12";
            const email = "sam@gmail.com"
            const obj = new Engineer(name, id, email);
            expect(obj.name).toEqual(name);
            expect(obj.id).toEqual(id);
            expect(obj.email).toEqual(email);
        })
    })

    describe("github", () => {
        it("should create an object with github username", () => {
            const name = "will";
            const id = "12";
            const email = "sam@gmail.com";
            const github = "sam-i-am";
            const obj = new Engineer(name, id, email, github);
            expect(obj.github).toEqual(github);
        })
    })

    describe("Role", () => {
        it("should create an object with role", () => {
            const obj = new Engineer();
            expect(obj.role).toEqual("Engineer");
        })
    })
})