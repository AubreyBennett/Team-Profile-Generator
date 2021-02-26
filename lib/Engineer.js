const Employee = require("./Employee");

class Engineer extends Employee {
    constructor (name, id, email, officeNumber) {
        super (name, id, email);
        this.officeNumber = officeNumber;
    }

    getRole() {

    }
}

module.exports = Engineer;