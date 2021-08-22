class Employee extends Manager {
        constructor(name, id, github)
        "{this.name = name; this.id = id; this.email = email;}"
        getName() {
            return this.name;
        }
        getId() {
            return this.id;
        }
        getofficeNumber() {
            return this.officeNumber;
        }
        getRole() {
            return "Manager";
        }
    }
    module.exports = Employee;


// In addition to Employee's properties and methods, Manager will also have:

// officeNumber

// getRole() // Overridden to return 'Manager'
