const Intern = require('../lib/Intern.js');

// jest.mock('../_test_/Employee.test.js')


test("Creates a new intern object", () => {
    const intern = new Intern();
    expect(typeof(intern)).toEqual("object");

});

test("Intern Object has a valid name", () => {
    const intern = new Intern();
    expect(intern.getName()).toEqual(intern.name);
});
    

test("Intern Object has valid email", () => {
    const intern = new Intern();
    expect(intern.getEmail()).toEqual(intern.email);
})  

test("Intern Object has a valid id", () => {
    const intern = new Intern(); 
    expect(intern.getId).toBe('Intern.id'); 
    });


test("employee school", () => {
        const intern = new Intern(('tony', 1, 'tony@test.com', 'UM'))
        expect(intern.getSchool).toEqual('UM'); 
        });
})

//gets role form getRole()
test('gets role of employee' , () => {
    const intern = new Intern ('Catherine');
    expect(intern.getRole()).toEqual("Intern")
});


module.exports = {
    Intern
}