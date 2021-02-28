const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("Initialization", () => {
        it("should create an object with name id and email", () => {
            const name = "will";
            const id = "12";
            const email = "sam@gmail.com"
            const obj = new Intern(name, id, email);
            expect(obj.name).toEqual(name);
            expect(obj.id).toEqual(id);
            expect(obj.email).toEqual(email);
        })
    })

    describe("school", () => {
        it("should create an object with school", () => {
            const name = "will";
            const id = "12";
            const email = "sam@gmail.com";
            const school = "university";
            const obj = new Intern(name, id, email, school);
            expect(obj.school).toEqual(school);
        })
    })

    describe("Role", () => {
        it("should create an object with role", () => {
            const obj = new Intern();
            expect(obj.role).toEqual("Intern");
        })
    })
})