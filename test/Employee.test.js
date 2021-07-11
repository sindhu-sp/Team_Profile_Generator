const { expect } = require("@jest/globals");
const Employee = require("../libs/Employee");
// test "this is testing the parameters used for the employees"

test("Testing name", () => {
    const name = "Sheryl"
    const e = new Employee(name);
    expect(e.name).toBe(name);

});

test("Testing id", () => {
    const id = 100;
    const e = new Employee(id);
    expect(e.id).toBe(id);

});

test("Testing email", () => {
    const email = "test@test.com"
    const e = new Employee(email);
    expect(e.email).toBe(email);

});

test("Testing name", () => {
    const name = "Sheryl"
    const e = new Employee(name);
    expect(e.name).toBe(name);

})
