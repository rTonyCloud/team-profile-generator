const Employee = require('../lib/Employee');
// test file checks for employee.js 

const employee = new Employee('tony', 1, 'tony@test.com')

test("Creates a new Employee object", () => {
    expect(employee).toEqual(expect.any(Object))
});

test("Creates a new Employee id", () => {
    expect(employee.id).toEqual(expect.any(Number))
});

test("Creates a new Employee email", () =>{
    expect(employee.email).toEqual(expect.any(String));
});

test("Creates a new Employee role", () => {
    expect(employee.role).toEqual(expect.any(String));
});


module.exports = {
    Employee
};