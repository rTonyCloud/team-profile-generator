const Employee = require('../lib/Employee.js') 
const Manager = require('../lib/Manager.js');

// test file checks for employee.js 

// jest.mock('../_test_/Employee.test.js')


const employee = new Manager('tony', 1, 'tony@test.com')

test("Creates a new Employee object", () => {
    expect(Employee).toEqual(expect.any(object))
});

test("Creates a new Manager id", () => {
    expect(manager.id).toEqual(expect.any(number))
});
    
test("Creates a new Employee object", () => {
    expect(manager.email).toBe('tony@test.com')
    
});