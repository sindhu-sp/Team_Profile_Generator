const Manager = require("./libs/Manager");
const Engineer = require("./libs/Engineer");
const Intern = require("./libs/Intern");

const inquirer = require("inquirer");
const fs = require("fs");

const generatedHtmlFilePath = "./dist/Team.html";

 let teamMembers = [];
// function addTeamMemberToArray(member)
// {
//     if(member === "Manager") {

//     }
// }

// Project requirements

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


inquirer
    .prompt([
        {
            name: "mName",
            type = "input",
            message = "Enter the Manager's name"
        },
        {
            name: "mId",
            type = "input",
            message = "Enter the Manager's ID"
        },
        {
            name: "mEmail",
            type = "input",
            message = "Enter the Manager's Email"
        },
        {
            name: "mOfficeNumber",
            type = "input",
            message = "Enter the Manager's office number"
        },
        {
            name: "addTeamMembers",
            type = "list",
            message = "Choose from the below options to add team members",
            choices = ["Engineer", "Intern", "Exit"]
        },
        
    ])
    .then(answers => {
        fs.writeFileSync(generatedHtmlFilePath, "");
    })
    .catch(error => {
        if(error.isTtyError){

        }
        else {

        }
    });

    function addIntern() {
        inquirer
    .prompt([
        {
            name: "iName",
            type = "input",
            message = "Enter the Intern's name"
        },
        {
            name: "iId",
            type = "input",
            message = "Enter the Intern's ID"
        },
        {
            name: "iEmail",
            type = "input",
            message = "Enter the Intern's Email"
        },
        {
            name: "iSchool",
            type = "input",
            message = "Enter the Intern's school"
        },
        {
            name: "addTeamMembers",
            type = "list",
            message = "Choose from the below options to add team members",
            choices = ["Engineer", "Intern", "Exit"]
        },
        
    ])
    .then(answers => {
        let intern = new Intern(answers.iName, answers.iId, answers.iEmail, answers.iSchool);
        teamMembers.push(intern);

        if(answers.addTeamMembers === "Engineer"){
            addEngineer();
        }
        else if(answers.addTeamMembers === "Intern"){
            addIntern();
        }
        else {
            generatedHtml();
        }
    })
    .catch(error => {
        if(error.isTtyError){

        }
        else {

        }
    });

    }

    function generateHtml() {
        fs.writeFileSync(generatedHtmlFilePath, "")
    }