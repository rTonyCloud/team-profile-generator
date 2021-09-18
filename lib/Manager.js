const Employee = require("./Employee")

class Manager extends Employee{
        constructor(name, id, email, officeNumber)
        {

            super (name, id, email);

            this.officeNumber = officeNumber;
        }
        getName() {
            return this.name;
        }
        getId() {
            return this.id;
        }

        getEmail () {
            return this.email;
        }

        getOfficeNumber() {
            return this.officeNumber;
        }


        getRole() {
            return "Manager";
        }
    }
    module.exports = Manager;


// In addition to Employee's properties and methods, Manager will also have:

// officeNumber

// getRole() // Overridden to return 'Manager'
