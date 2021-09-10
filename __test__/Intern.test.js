const Employee = require('../lib/Employee.js') 

const Intern = require('../lib/Intern.js');

// jest.mock('../_test_/Employee.test.js')

const intern = new Intern('tony', 1, 'tony@test.com', 'intern')

test("Creates a new intern object", () => {
    expect(Intern).toEqual(expect.any(Object));
    expect(intern.name).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(Number));
    expect(intern.role).toBe('Intern');
});