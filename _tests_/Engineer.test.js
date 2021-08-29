const Employee = require('../lib/Employee.js')
const Engineer = require('../lib/Engineer')

jest.mock('../_test_/Employee.test.js')

const engineer = new Engineer('tony', 1, 'tony@test.com', 'rtonycloud')

test("Creates a new engineer object", () => {
    expect(employee).toEqual(expect.any(object))
    epect(engineer.github).toEqual(github)
    expect(engineer.role).toBe(Engineer)
});