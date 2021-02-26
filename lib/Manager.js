const Employee = require("./Employee");

class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super (name, id, email);
        this.officeNumber = officeNumber;
        this.role = "Manager";
    }

    printInfo() {
        console.log(this);
    }

    getOffice() {
        return this.officeNumber;
    }

    getRole() {
        return Manager;
    }
}

module.exports = Manager;