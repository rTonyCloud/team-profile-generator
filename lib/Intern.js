const Employee = require("./Employee")

class intern extends Employee{
        constructor(name, id, school)
        {
            super(name,id,school)
            this.name = name;
            this.id = id; 
            this.school = school;
        }
        getName() {
            return this.name;
        }
        getId() {
            return this.id;
        }
        getSchool() {
            return this.school;
        }
        getRole() {
            return "Intern";
        }
    }
    module.exports = intern;


// In addition to Employee's properties and methods, Intern will also have:

// school

// getSchool()

// getRole() // Overridden to return 'Intern'