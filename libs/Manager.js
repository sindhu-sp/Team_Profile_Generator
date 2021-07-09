// Code to Define Engineer
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getGithub() {
        return this.github;
    }

    getRole() {
        return "Manager";
    }
}
module.exports = Manager;