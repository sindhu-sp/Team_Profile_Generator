const { expect, test } = require("@jest/globals");
const Employee = require("../libs/Employee");
const Intern = require("../libs/Intern");

test("Testing School name", () => {
    const testValue = "UCB";
    const e = new Intern("Matt", 100, "test@test.com", testValue);
    expect(e.school).toBe(testValue);
}) ;

test("Testing getRole() Intern", () => {
    const testValue = "Intern";
    const e = new Intern("Matt", 101, "test@test.com", "UCB", testValue);
    expect(e.getRole()).toBe(testValue);
});