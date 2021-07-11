const { expect, test } = require("@jest/globals");
const Employee = require("../libs/Employee");
const Manager = require("../libs/Manager");

test("Testing OfficeNumber", () => {
    const testValue = 100;
    const e = new Manager("Sheryl", 100, "test@test.com", testValue);
    expect(e.officeNumber).toBe(testValue);
}) ;

test("Testing getRole() Manager", () => {
    const testValue = "Manager";
    const e = new Manager("Sheryl", 101, "test@test.com", 100, testValue);
    expect(e.getRole()).toBe(testValue);
});

