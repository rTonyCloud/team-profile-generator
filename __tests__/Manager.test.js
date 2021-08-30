const Manager = require('../lib/Manager');
// test file checks for employee.js 

const employee = new Employee('tony', 1, 'tony@test.com')

test("Creates a new Employee object", () => {
    expect(employee).toEqual(expect.any(object))
    epect(employee.id).toequal(epect.any(number))
    expect(employee.email).toBe('tony@test.com')
});