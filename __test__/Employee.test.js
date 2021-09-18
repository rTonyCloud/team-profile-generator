const Employee = require('../lib/Employee');
// test file checks for employee.js 

const employee = new Employee('tony', 1, 'tony@test.com')

test("Creates a new Employee object", () => {
    expect(employee).toEqual(expect.any(Object))
});

test("Creates a new Employee id", () => {
    expect(employee.id).toEqual(employee.id)
});

test("Creates a new Employee email", () =>{
    expect(employee.email).toEqual(employee.email);
});

test("Creates a new Employee role", () => {
    expect(employee.role).toEqual(employee.role);
});


module.exports = {
    Employee
};