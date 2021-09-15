const Employee = require("./Employee")
class Engineer extends Employee {
        constructor(name, id, email, github)
        {
            super(name,id, email, github);
    
            this.github = github;
        }
        

        // returning the role to engineer
        getGithub() {
            return this.github;
        }
            
        
        getRole() {
            return "Engineer";
        }
    }
    module.exports = Engineer;


