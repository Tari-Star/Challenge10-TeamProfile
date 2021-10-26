// node modules
const inquirer = require('inquirer');

// team profiles
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');


// team arrey
const teamArray = [];

const addManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: "Enter manager's name",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter manager's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter manager's ID",
            validate: nameInput => {
                if (isNaN(nameInput)) {
                    return false;
                } else {
                    console.log("Please enter manager's ID!");
                    return true;
                }
            }  
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter manager's email",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log("Please enter manager's email!");
                    return false;
                }
            } 
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Enter manager's office number",
            validate: nameInput => {
                if (isNaN(nameInput)) {
                    return false;
                } else {
                    console.log("Please enter manager's office number!");
                    return true;
                }
            }
        }
    ])
}