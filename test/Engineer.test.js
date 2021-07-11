const { expect, test } = require("@jest/globals");
const Employee = require("../libs/Employee");
const Engineer = require("../libs/Engineer");

test("Testing Github username", () => {
    const testValue = "GitHubUser";
    const e = new Engineer("Dona", 100, "test@test.com", testValue);
    expect(e.github).toBe(testValue);
}) ;

test("Testing getRole() Engineer", () => {
    const testValue = "Engineer";
    const e = new Engineer("Dona", 101, "test@test.com", "GitHubUser", testValue);
    expect(e.getRole()).toBe(testValue);
});