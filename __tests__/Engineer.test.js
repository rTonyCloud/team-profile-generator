const Employee = require('../lib/Employee.js')
const Engineer = require('../lib/Engineer')

jest.mock('../_test_/Employee.test.js')

const engineer = new Engineer('tony', 1, 'tony@test.com', 'rtonycloud')

test("Creates a new engineer object", () => {
    expect(Employee.name).toEqual(expect.any(String));
    epect(engineer.github).toEqual(expect.any(String));
    epect(engineer.email).toBe(expect.any(String));
    expect(engineer.role).toBe(expect.any(String));
});