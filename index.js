const fs = require('fs');
const path = require('path');
const generateHTML = require('./src/generateHTML');
const inquirer = require('inquirer');
const { mainModule } = require("process");


// linking employees sheets
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js');

// output
const DIR = path.resolve(__dirname, "output");
const PATH = path.join(DIR, "team.html");


// array for the teamMembers
const teamMembers = [];


const createManager = () => {
        inquirer.prompt([{

                type: 'input',
                name: 'name',
                message: "what is the manager's name? (Required):",
                default: ['Adam'],
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please type your name!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: "what is the manager's id? (Required):",
                default: ['1'],
                validate: idInput => {
                    if (idInput) {
                        return true;
                    } else {
                        console.log('PLease type a managers ID!:');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: "what is your email address? (Required):",
                default: ['test@gmail.com'],
                validate: emailInput => {
                    if (emailInput) {
                        return true;
                    } else {
                        console.log('!:');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: "what is the manager's office number? (Required):",
                default: ['123'],
                validate: officeInput => {
                    if (officeInput) {
                        return true;
                    } else {
                        console.log('please type your office number!:');
                        return false;
                    }
                }
            },
        ]).then((managerCreate) => {
            const {
                name,
                id,
                officeNumber,
                email
            } = managerCreate;
            const addManager = new Manager(managerCreate.name, managerCreate.id, managerCreate.officeNumber, managerCreate.email);

            teamMembers.push(addManager);
            employeeCreate();
        });

        const employeeCreate = () => {

                inquirer.prompt([{
                        type: 'list',
                        name: 'role',
                        choices: ['Engineer', 'Intern'],
                    },
                    {
                        type: 'input',
                        name: 'name',
                        message: "what is your name? (Required):",
                        default: ['Tom'],
                        validate: memberNameInput => {
                            if (memberNameInput) {
                                return true;
                            } else {
                                console.log('Please type your name!:');
                                return false;
                            }
                        },
                    },
                    {
                        type: 'input',
                        name: 'id',
                        message: "what is your ID? (Required):",
                        default: ['Engineer'],
                        validate: memberIdInput => {
                            if (memberIdInput) {
                                return true;
                            } else {
                                console.log('Please provide a valid employee ID!');
                                return false;
                            }
                        },

                    },
                    {
                        type: 'input',
                        name: 'email',
                        message: "what is your email? (Required):",
                        default: ['any@gmail.com'],
                        validate: memberEmailInput => {
                            if (memberEmailInput) {
                                return true;
                            } else {
                                console.log('Please insert a valid email address!');
                                return false;
                            }
                        },

                    },
                    {
                        type: 'input',
                        name: 'github',
                        message: "what is the Engineers' github? (Required):",
                        default: ['rtonycloud'],
                         when:(input) => input.role === "Engineer",

                    },
                    {
                        type: 'input',
                        name: 'school',
                        message: "which school did the intern's attend? (Required):",
                        default: ['UM'],
                        when: (input) => input.role === "Intern",
                    },
                    {
                        type: 'confirm',
                        name: 'confirmMoreMembers',
                        message: "Do you want to add more teammates?(Required):",
                    },
                ]).then((createEmployees) => {
                        let {
                            name,
                            email,
                            role,
                            id,
                            github,
                            school,
                            confirmMoreMembers
                        } = createEmployees;
                        let employee;
                        if (role === "Engineer") {
                            employee = new Engineer(name, id, email, github);
                        } else if (role === "Intern") {
                            employee = new Intern(name, id, email, school);
                        }
                        teamMembers.push(employee);
                        if (confirmMoreMembers) {
                            employeeCreate();
                        } else {

                            generateHTML(teamMembers);
                        }
                    })
                }
            }

// function to start app
function init() {
    createManager();
}

init();

