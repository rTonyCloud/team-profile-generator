class Employee {
        constructor(name, id, email){
            this.name = name;
            this.id = id;
            this.email = email;
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
            return 'employee';
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