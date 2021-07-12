// Code to Define Engineer
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    getGithub() {
        return this.github;
    }

    getRole() {
        return "Engineer";
    }
    getRoleAttribute(){
        return `<li>Github Link: <a href="https://github.com/${this.getGithub()}">${this.getGithub()}</a></li>`
    }
}
module.exports = Engineer;