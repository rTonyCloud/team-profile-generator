const engineer = require('../lib/Engineer')
const employee = require('../lib/Employee.js'); 
const Engineer = require('../lib/Engineer');

// jest.mock('../_test_/Employee.test.js')


test("Creates a new engineer object", () => {
    const engineer = new Engineer()
    expect(typeof(engineer)).toEqual("object");
});

test("Create a new engineer github", () => {
    expect(engineer.getGithub).toEqual(engineer.github);
});

test("Creates a new engineer email", () => {
    expect(engineer.getEmail).toEqual(engineer.email);
});

test("Creates a new engineer role", () => {
    expect(engineer.getRole).toEqual(engineer.role);
});