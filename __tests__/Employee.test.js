const Employee = require('../lib/Employee');
// test file checks for employee.js 

const employee = new Employee('tony', 1, 'tony@test.com')

test("Creates a new Employee object", () => {
    expect(employee).toEqual(expect.any(Object))
    epect(employee.id).toEqual(epect.any(Number))
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.role).toEqual(epect.any(String));
});