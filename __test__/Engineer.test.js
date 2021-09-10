const Engineer = require('../lib/Engineer')
const Employee = require('../lib/Employee.js') 

// jest.mock('../_test_/Employee.test.js')

const engineer = new Engineer('tony', 1, 'tony@test.com', 'rtonycloud')

test("Creates a new engineer object", () => {
    expect(Employee.name).toEqual(expect.any(Object));
});

    test("Create a new engineer github", () => {
    expect(engineer.github).toEqual(employee);
});
test("Creates a new engineer email", () => {
    expect(engineer.email).toBe());
});

test("Creates a new engineer role", () => {
    expect(engineer.role).toBe(expect.any(String));
});