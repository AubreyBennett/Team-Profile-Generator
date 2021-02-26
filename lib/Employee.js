class Employee {
    construcor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = "Employee";
    }

    printInfo() {
        console.log(this);
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return Employee
    }
}

module.exports = Employee;