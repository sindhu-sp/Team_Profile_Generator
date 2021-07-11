const { expect } = require("@jest/globals");
const Employee = require("../libs/Employee");
// test "this is testing the parameters used for the employees"

test("Testing Employee", () => {
    
    const e = new Employee();
    expect(typeof(e)).toBe("object");

});

test("Testing name", () => {
    const name = "Sheryl"
    const e = new Employee(name);
    expect(e.name).toBe(name);

});

test("Testing id", () => {
    const testValue = 100;
    const e = new Employee("Sheryl", testValue);
    expect(e.id).toBe(testValue);

});

test("Testing email", () => {
    const testValue = "test@test.com"
    const e = new Employee("Sheryl", 100, testValue);
    expect(e.email).toBe(testValue);

});

