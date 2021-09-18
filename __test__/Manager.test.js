// const Employee = require('../lib/Employee.js') 
const Manager = require('../lib/Manager.js');

// test file checks for employee.js 

// jest.mock('../_test_/Employee.test.js')



test("Creates a new Employee object", () => {
    const manager = new Manager ();
    expect(typeof(manager)).toEqual('object');

});


test("Creates a new Manager id", () => {
    expect(Manager.getId).toEqual(Manager.getId);
});
    
test("Creates a new Manager email", () => {
    expect(Manager.getEmail).toEqual(Manager.getEmail);
    
});