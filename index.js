const fs = require('fs');
const generateHTML = require('./src/generateHTML');
const inquirer = require('inquirer');


// linking employees sheets
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js');

// GIVEN a command-line application that accepts user input

// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input

// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address

// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab

// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number

// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team

// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu

// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu

// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated

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
            }
        ]).then((managerCreate) => {
            const {
                name,
                id,
                officeNumber,
                email
            } = managerCreate;
            const addManager = new Manager(name, id, officeNumber, email);

            teamMembers.push(addManager);
            employeeCreate();
        });
        
        const employeeCreate = () => {

                inquirer.prompt([{
                        type: 'list',
                        name: 'teammates',
                        choices: ['Engineer', 'Intern', 'N/A'],
                        validate: newMemberInput => {
                            if (newMemberInput) {
                                return true;
                            } else {
                                console.log('Please pick either Engineer, Intern or none.');
                                return false;
                            }
                        }
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
                        name: 'Github',
                        message: "what is the Engineers' github? (Required):",
                        default: ['rtonycloud'],
                        validate: engineerGithubInput => {
                            if (engineerGithubInput) {
                                return true;
                            } else {
                                console.log('Please pick either Engineer, Intern or none:');
                                return false;
                            }
                        },

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
                            employee = new Engineer(name, email, github, id);
                        } else if (role === "Intern") {
                            employee = new Intern(name, email, id, school);
                        }
                        teamMembers.push(employee);
                        if (confirmMoreMembers) {
                            employeeCreate();
                        } else {

                            generateHTML(teamMembers);
                        }
                    }
        


                        // create two more function engineer and intern
                        //  inside the .then manager call () what they want to create next
                        // ask whether they want to create engineer, intern else complete.
                        // if statement to call engineer, intern, or build. 


                        // .then(answers =>{
                        //     let manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
                        //     teamMembers.push(manager)});
                        // }



                        // TODO: Create a function to initialize app
// function init {
//        inquirer.prompt(questions).then(inquirerResponses => {
//             console.log(inquirerResponses);
//                console.log('is this working?..');
//                writeToFile('index.html', generateHTML({
//                       ...inquirerResponses
//         }));
//     });
// };

                    //   Function call to initialize app
                    //     function init() {
                    //     createManager();
                    // 
                )}}
//function to initialize app
function init() {
    createManager();
  }
  
  init();