// Code to Define Intern
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    getSchool() {
        return this.school;
    }

    getRole() {
        return "Intern";
    }
    getRoleAttribute(){
        return `<li>School: ${this.getSchool()}</li>`
    }
}
module.exports = Intern;