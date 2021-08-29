class Employee {
        constructor(name, id, email, role){
            this.name = name;
            this.id = id;
            this.email = email;
            this.role = role;
        }
        
        getName() {
            return this.name;
        }
        getId() {
            return this.id;
        }
        getEmail() {
            return this.email;
        }
        getRole() {
            return this.role;
        }
    }
    module.exports = Employee;

//var employee1 = new Employee("test", 12, "email@gmail.com");

// name

// id

// email

// getName()

// getId()

// getEmail()

// getRole() // Returns 'Employee'